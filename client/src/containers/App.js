import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
// import styles from "./App.module.css";

import { ROUTES } from "../constants";
import Home from "./Home";
import Stories from "./Stories";
import Mood from "./Mood";
import Share from "./Share";
import Detail from "./Detail";
import Information from "./Information";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import StoryList from "../components/StoryList";

class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path={ROUTES.home} exact strict component={Home} />
          <Route path={ROUTES.stories} component={Stories} />
          <Route path={ROUTES.mood} component={Mood} />
          <Route path={ROUTES.share} component={Share} />
          <Route path={ROUTES.detail} component={Detail} />
          <Route path={ROUTES.information} component={Information} />
          <Route path={ROUTES.login} component={Login} />
          <Route path={ROUTES.storylist} component={StoryList} />

          <Route path={ROUTES.register} component={Register} />
        </Switch>
      </main>
    );
  }
}

export default App;
