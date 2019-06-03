import uuid from "uuid";
import { decorate, observable, action, computed } from "mobx";

class Story {
  constructor(store, description, city, id = uuid.v4()) {
    this.id = id;
    this.description = description;
    this.city = city;
    this.store = store;
  }

  setId = id => (this.id = id);
  setDesc = value => (this.description = value);
  setCity = value => (this.city = value);
  setMoodId = value => (this.moodId = value);

  get mood() {
    return this.store.moodStore.resolveMood(this.moodId);
  }

  get values() {
    return {
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
  };
}

decorate(Story, {
  id: observable,
  description: observable,
  city: observable,
  moodId: observable,
  setId: action,
  setDesc: action,
  setCity: action,
  setMoodId: action,
  values: computed,
  mood: computed
});

export default Story;
