import { decorate, observable, configure, action, runInAction } from "mobx";
import Story from "../models/Story";
import Api from "../api";

configure({ enforceActions: `observed` });

class StoryStore {
  stories = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.api = new Api(`stories`);
    this.getAll();
  }

  getAll = () => {
    this.api.getAll().then(d => d.forEach(this._addStories));
  };

  addStory = data => {
    const newStory = new Story(this.rootStore);
    newStory.updateFromServer(data);
    this.stories.push(newStory);
    this.api
      .create(newStory)
      .then(storyValues => newStory.updateFromServer(storyValues));

    incrementMood(newStory);
    console.log(newStory);

    // newStory.mood.increment();
  };

  _addStories = values => {
    console.log(values);
    const story = new Story(this.rootStore);
    story.updateFromServer(values);

    runInAction(() => this.stories.push(story));

    // if (!story.mood) {
    //   console.log(story);
    // } else {
    //   story.mood.increment();
    // }
  };

  incrementMood = story => {
    story.mood.increment();
  };

  updateStory = story => {
    this.api
      .update(story)
      .then(storyValues => story.updateFromServer(storyValues));
  };

  deleteStory = story => {
    this.stories.remove(story);
    this.api.delete(story);
  };

  voteStory = story => {
    // console.log("button clicked for ", story.id);
    story.ratings();
    this.api
      .update(story)
      .then(storyValues => story.updateFromServer(storyValues));
  };
}

decorate(StoryStore, {
  stories: observable,
  addStory: action,
  deleteStory: action,
  incrementMood: action
});

export default StoryStore;
