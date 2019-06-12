import uuid from "node-uuid";
import { decorate, observable, action, computed } from "mobx";

class Mood {
  constructor(name, id = uuid.v4()) {
    this.id = id;
    this.name = name;
  }

  setId = value => (this.id = value);
  setName = value => (this.name = value);

  get values() {
    return { name: this.name };
  }

  updateFromServer = values => {
    this.setId(values._id);
    this.setName(values.name);
  };
}

decorate(Mood, {
  id: observable,
  name: observable,
  //
  setId: action,
  setName: action,
  //
  values: computed
});

export default Mood;
