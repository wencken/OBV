import { decorate, observable, action } from "mobx";
import Auth from "../api/auth";
import { getUserFromCookie } from "../utils/index.js";

class UiStore {
  authUser = null;

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.authService = new Auth();
    this.setUser(getUserFromCookie());
  }

  setUser = value => (this.authUser = value);

  //INLOGGEN
  login = (username, password) => {
    return this.authService
      .login(username, password)
      .then(() => {
        this.setUser(getUserFromCookie());
        Promise.resolve();
      })
      .catch(() => {
        this.setUser(null);
        Promise.reject();
      });
  };

  //UITLOGGEN
  logout = () => {
    this.authService.logout().then(() => this.setUser(null));
  };

  //REGISTREREN
  register = (name, email, pwd, role) =>
    this.authService.register(name, email, pwd, role);
}

decorate(UiStore, { authUser: observable, setUser: action });

export default UiStore;