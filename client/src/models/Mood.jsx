import uuid from "node-uuid";
import { decorate, observable, action, computed } from "mobx";

class Mood {
  constructor(name, id = uuid.v4()) {
    this.id = id;
    this.name = name;
    this.amount = 1;
  }

  setId = value => (this.id = value);
  setName = value => (this.name = value);

  increment = () => {
    this.amount++;
    console.log(this.amount);
  };

  get total() {
    return this.amount;
  }

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
  amount: observable,
  //
  setId: action,
  setName: action,
  //
  increment: action,
  total: computed,
  values: computed
});

export default Mood;
