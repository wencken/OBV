import { decorate, observable, configure, action, runInAction } from "mobx";
import Mood from "../models/Mood";
import Api from "../api";

configure({ enforceActions: `observed` });

class MoodStore {
  moods = [];
  moodCounts = {};
  currentMood = "";

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
    // newMood.updateFromServer(data);
    this.moods.push(newMood);
    this.api
      .create(newMood)
      .then(moodValues => newMood.updateFromServer(moodValues));
  };

  countMood = (stories, mood) => {
    let count = 0;
    for (let i = 0; i < stories.length; i++) {
      if (stories[i].moodId === mood.id) {
        count++;
        this.moodCounts[mood.name] = parseFloat(count);
      }
    }
    this.setMaxMood();
    return ((count / stories.length) * 100).toFixed(2);
  };

  setMaxMood = () => {
    const maxMood = Object.keys(this.moodCounts).reduce((a, b) =>
      this.moodCounts[a] > this.moodCounts[b] ? a : b
    );
    this.currentMood = maxMood;
    console.log(this.currentMood);
  };

  updateMood = mood => {
    this.api.update(mood).then(moodValues => mood.updateFromServer(moodValues));
  };

  resolveMood = id => this.moods.find(mood => mood.id === id);
}

decorate(MoodStore, {
  moods: observable,
  addMood: action,
  updateMood: action,
  setMaxMood: action,
  resolveMood: action
});

export default MoodStore;
