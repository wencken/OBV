import { decorate, observable, configure, action, runInAction } from "mobx";
import Mood from "../models/Mood";
import Api from "../api";

configure({ enforceActions: `observed` });

class MoodStore {
  moods = [];
  city = "";

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.api = new Api(`moods`);
    this.getAll();
  }

  // setCity = city => {
  //   this.city = city;
  //   console.log(this.city);
  // };

  updateCity = city => {};

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

  updateMood = mood => {
    this.api.update(mood).then(moodValues => mood.updateFromServer(moodValues));
  };

  resolveMood = id => this.moods.find(mood => mood.id === id);
}

decorate(MoodStore, {
  moods: observable,
  addMood: action,
  updateMood: action
});

export default MoodStore;
