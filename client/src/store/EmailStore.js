import { decorate, observable, configure, action, runInAction } from "mobx";
import Email from "../models/Email";
import Api from "../api";

configure({ enforceActions: `observed` });

class EmailStore {
  emails = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.api = new Api(`emails`);
    this.getAll();
  }

  getAll = () => {
    this.api.getAll().then(d => d.forEach(this._addEmail));
  };

  addEmail = data => {
    const newEmail = new Email(this.rootStore);
    newEmail.updateFromServer(data);
    this.emails.push(newEmail);
    this.api
      .create(newEmail)
      .then(emailValues => newEmail.updateFromServer(emailValues));
  };

  _addEmail = values => {
    // console.log(values);
    const email = new Email(this.rootStore);
    email.updateFromServer(values);
    runInAction(() => this.emails.push(email));
  };
}

decorate(EmailStore, {
  emails: observable,
  addEmail: action
});

export default EmailStore;
