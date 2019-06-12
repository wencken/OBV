import {
  decorate,
  observable,
  configure,
  action,
  runInAction,
  computed
} from "mobx";
import Mood from "../models/Mood";
import Api from "../api";

configure({ enforceActions: `observed` });

class MoodStore {
  moods = [];
  moodCounts = {};

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.api = new Api(`moods`);
    this.getAll();
  }

  getAll = () => {
    this.api.getAll().then(d => d.forEach(this._addMoods));
  };

  _addMoods = ({ name, _id }) => {
    const mood = new Mood(name, _id);
    runInAction(() => this.moods.push(mood));
  };

  addMood = data => {
    const newMood = new Mood(data.name);
    this.moods.push(newMood);
    this.api
      .create(newMood)
      .then(moodValues => newMood.updateFromServer(moodValues));
  };

  // countMood = (stories, mood) => {
  //   let count = 0;
  //   for (let i = 0; i < stories.length; i++) {
  //     if (stories[i].moodId === mood.id) {
  //       count++;
  //       this.moodCounts[mood.name] = parseFloat(count);
  //     }
  //   }
  //   this.setMaxMood();
  //   return ((count / stories.length) * 100).toFixed(2);
  // };

  get currentMood() {
    // const city = this.rootStore.uiStore.currentCity;
    const amounts = this.rootStore.storyStore.stories.reduce((a, b) => {
      let key = b["moodId"];

      if (!a[key]) {
        a[key] = 1;
      }
      a[key]++;
      return a;
    }, {});
    const maxMoodId = Object.keys(amounts).reduce(
      (c, d) => (amounts[c] > amounts[d] ? c : d),
      0
    );
    console.log(maxMoodId);
    const moodObject = this.resolveMood(maxMoodId);
    if (moodObject) return moodObject.name;
    return null;
  }

  setMaxMood = () => {
    if (this.moodCounts.length > 1) {
      const maxMood = Object.keys(this.moodCounts).reduce((a, b) =>
        this.moodCounts[a] > this.moodCounts[b] ? a : b
      );
      this.currentMood = maxMood;
    } else {
      Object.keys(this.moodCounts).map(mood => (this.currentMood = mood));
    }
  };

  updateMood = mood => {
    this.api.update(mood).then(moodValues => mood.updateFromServer(moodValues));
  };

  resolveMood = id => this.moods.find(mood => mood.id === id);
}

decorate(MoodStore, {
  moods: observable,
  moodCounts: observable,
  //
  addMood: action,
  countMood: action,
  countMoods: action,
  setMaxMood: action,
  currentMood: computed,
  //
  updateMood: action,
  resolveMood: action
});

export default MoodStore;
