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

    this.incrementMood(newStory);
  };

  _addStories = values => {
    // console.log(values);
    const story = new Story(this.rootStore);
    story.updateFromServer(values);

    runInAction(() => this.stories.push(story));

    // this.getMoods();

    setTimeout(this.incrementMood(story), 2000);
  };

  // getMoods = () => {
  //   this.stories.map(story => this.incrementMood(story));
  // };

  incrementMood = story => {
    console.log(story);
    console.log(story.mood);
    if (story.mood) {
      story.mood.increment();
    }
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
