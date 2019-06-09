import uuid from "uuid";
import { decorate, observable, action, computed } from "mobx";

class Story {
  constructor(store, description, city, rate, id = uuid.v4(), mood) {
    this.id = id;
    this.description = description;
    this.city = city;
    this.rate = rate;
    this.store = store;
    this.mood = mood;
  }

  setId = id => (this.id = id);
  setDesc = value => (this.description = value);
  setCity = value => (this.city = value);
  setMoodId = value => (this.mood = value);
  setRatings = value => (this.rate = value);

  // get mood() {
  //   return this.store.moodStore.resolveMood(this.moodId);
  // }

  ratings = () => {
    this.rate++;
  };

  get values() {
    return {
      rate: this.rate,
      description: this.description,
      city: this.city,
      mood: this.mood
    };
  }

  updateFromServer = values => {
    this.setId(values._id);
    this.setDesc(values.description);
    this.setCity(values.city);
    this.setMoodId(values.mood);
    this.setRatings(values.rate);
  };
}

decorate(Story, {
  id: observable,
  description: observable,
  city: observable,
  mood: observable,
  rate: observable,
  //
  setId: action,
  setDesc: action,
  setCity: action,
  setMoodId: action,
  setRatings: action,
  //
  ratings: action,
  values: computed
  // mood: computed
});

export default Story;
