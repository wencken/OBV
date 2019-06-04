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
  };

  _addStories = values => {
    // console.log(values);
    const story = new Story(this.rootStore);
    story.updateFromServer(values);
    runInAction(() => this.stories.push(story));
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
}

decorate(StoryStore, {
  stories: observable,
  addStory: action,
  deleteStory: action
});

export default StoryStore;
