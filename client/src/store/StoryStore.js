import {
  decorate,
  observable,
  configure,
  action,
  computed,
  runInAction
} from "mobx";
import Story from "../models/Story";
import Api from "../api";

configure({ enforceActions: `observed` });

class StoryStore {
  stories = [];
  currentMood = "";

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.api = new Api(`stories`);
    this.getAll();
    // this.checkMood();
  }

  getAll = () => {
    this.api.getAll().then(d => d.forEach(this._addStories));
  };

  checkMood = () => {
    this.api.checkHighMood().then(d => (this.currentMood = d));
  };

  addStory = data => {
    const newStory = new Story(this.rootStore);
    newStory.updateFromServer(data);
    this.stories.push(newStory);
    this.api
      .create(newStory)
      .then(storyValues => newStory.updateFromServer(storyValues));

    // this.incrementMood(newStory);
  };

  _addStories = values => {
    // console.log(values);
    const story = new Story(this.rootStore);
    story.updateFromServer(values);

    runInAction(() => this.stories.push(story));

    // this.getMoods();

    // setTimeout(this.incrementMood(story), 2000);
  };
  getMoodAmounts = async () => {
    return await this.stories.reduce((a, b) => {
      let key = b["moodId"];

      if (!a[key]) {
        a[key] = 1;
      }
      a[key]++;
      console.log(a);

      return a;
    }, {});
  };

  get topMood() {
    // const test = this.api.checkHighMood().then(r => {
    //   return r;
    // });
    // console.log(test);
    //return this.api.checkHighMood();
    // console.log("check");

    return this.stories.reduce((a, b) => {
      let key = b["moodId"];
      if (!a[key]) {
        a[key] = 1;
      }
      a[key]++;
      const maxMoodId = Object.keys(a).reduce((c, d) => (a[c] > a[d] ? c : d));
      console.log(maxMoodId);
      // console.log(this.rootStore.moodStore.resolveMood(maxMoodId));
      // const maxMood = this.rootStore.moodStore.resolveMood(maxMoodId);
      // console.log(maxMood.name);
      return a;
    }, {});

    // const maxMoodId = this.getMoodAmounts().then(a =>
    //   Object.keys(a).reduce((c, d) => (a[c] > a[d] ? c : d))
    // );
    // console.log(maxMoodId);
    // return maxMoodId;
  }

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
  incrementMood: action,
  topMood: computed
});

export default StoryStore;
