import uuid from "uuid";
import { decorate, observable, action, computed } from "mobx";

class Story {
  constructor(description, city, id = uuid.v4()) {
    this.id = id;
    this.description = description;
    this.city = city;
    //this.mood = mood;
  }

  setId = value => (this.id = value);
  setDesc = value => (this.description = value);
  setCity = value => (this.city = value);

  updateFromServer = values => {
    this.setId(values._id);
    this.setDesc(values.description);
    this.setCity(values.city);
  };

  get values() {
    return { description: this.description, city: this.city };
  }
}

decorate(Story, {
  id: observable,
  description: observable,
  city: observable,
  setId: action,
  setDesc: action,
  setCity: action,
  values: computed
});

export default Story;
