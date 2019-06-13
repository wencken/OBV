import { decorate, observable, action } from "mobx";
import Auth from "../api/auth";
import { getUserFromCookie } from "../utils/index.js";

class UiStore {
  authUser = null;
  currentCity = "Ghent";

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
  register = (name, email, pwd) => this.authService.register(name, email, pwd);

  changeCity = city => {
    console.log(city);

    if (city !== "") {
      this.currentCity = city;
      console.log(this.currentCity);
    } else {
      this.currentCity = "Ghent";
    }
    return this.currentCity;
  };
}

decorate(UiStore, {
  authUser: observable,
  currentCity: observable,
  //
  setUser: action,
  changeCity: action
});

export default UiStore;
