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

  getAmounts = () => {
    const city = this.rootStore.uiStore.currentCity;
    console.log(city);

    const amounts = this.rootStore.storyStore.stories
      .filter(story => story.city === city)
      .reduce((a, b) => {
        let key = b["moodId"];

        if (!a[key]) {
          a[key] = 0;
        }
        a[key]++;
        return a;
      }, {});
    console.log(amounts);
    this.moodCounts = amounts;

    return amounts;
  };

  get currentMood() {
    const amountsObject = this.getAmounts();

    const maxMoodId = Object.keys(amountsObject).reduce(
      (c, d) => (amountsObject[c] > amountsObject[d] ? c : d),
      0
    );
    console.log(maxMoodId);

    const moodObject = this.resolveMood(maxMoodId);

    if (moodObject) return moodObject.name;
    return null;
  }

  updateMood = mood => {
    this.api.update(mood).then(moodValues => mood.updateFromServer(moodValues));
  };

  resolveMood = id => this.moods.find(mood => mood.id === id);
}

decorate(MoodStore, {
  moods: observable,
  //
  addMood: action,
  currentMood: computed,
  //
  updateMood: action,
  resolveMood: action
});

export default MoodStore;
