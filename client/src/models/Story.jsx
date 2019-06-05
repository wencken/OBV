import uuid from "uuid";
import { decorate, observable, action, computed } from "mobx";

class Story {
  constructor(store, description, city, rate, id = uuid.v4()) {
    this.id = id;
    this.description = description;
    this.city = city;
    this.rate = rate;
    this.store = store;
  }

  setId = id => (this.id = id);
  setDesc = value => (this.description = value);
  setCity = value => (this.city = value);
  setMoodId = value => (this.moodId = value);
  setRatings = value => (this.rate = value);

  get mood() {
    return this.store.moodStore.resolveMood(this.moodId);
  }

  ratings = () => {
    this.rate++;
  };

  get values() {
    return {
      rate: this.rate,
      description: this.description,
      city: this.city,
      moodId: this.moodId
    };
  }

  updateFromServer = values => {
    this.setId(values._id);
    this.setDesc(values.description);
    this.setCity(values.city);
    this.setMoodId(values.moodId);
    this.setRatings(values.rate);
  };
}

decorate(Story, {
  id: observable,
  description: observable,
  city: observable,
  moodId: observable,
  rate: observable,
  //
  setId: action,
  setDesc: action,
  setCity: action,
  setMoodId: action,
  setRatings: action,
  //
  ratings: action,
  values: computed,
  mood: computed
});

export default Story;
