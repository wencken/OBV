import { decorate, observable, configure, action, runInAction } from "mobx";
import Story from "../models/Story";
import Api from "../api";

configure({ enforceActions: `observed` });

class StoryStore {
  stories = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.api = new Api(`stories`);
    this._getAll();
  }

  _getAll = async () => {
    const jsonData = await this.api.getAll();
    runInAction(
      () =>
        (this.stories = this.stories.concat(
          jsonData.map(values => {
            const story = new Story(this.rootStore);
            story.updateFromServer(values);
            return story;
          })
        ))
    );
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
  deleteStory: action
});

export default StoryStore;
