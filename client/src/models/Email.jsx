import uuid from "uuid";
import { decorate, observable, action, computed } from "mobx";

class Email {
  constructor(store, email, id = uuid.v4()) {
    this.id = id;
    this.email = email;
    this.store = store;
  }

  setId = id => (this.id = id);
  setEmail = value => (this.email = value);

  get values() {
    return {
      email: this.email
    };
  }

  updateFromServer = values => {
    this.setId(values._id);
    this.setEmail(values.email);
  };
}

decorate(Email, {
  id: observable,
  email: observable,
  //
  setId: action,
  setEmail: action,
  //
  values: computed
});

export default Email;
