import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { ROUTES } from "../constants";
import Footer from "../components/Footer";

import Home from "./Home";
import Stories from "./Stories";
import Mood from "./Moods";
import Share from "./Share";
import Detail from "./Detail";
import Information from "./Information";
import Succeed from "../components/Succeed";
//
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
//
import StoryAdmin from "../components/StoryAdmin";
import Kandidaten from "../components/Kandidaten";
import PageHeader from "../components/PageHeader";
import Filter from "../components/Filter";

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: "Gent"
    };
  }

  changeCity = (e, newCity) => {
    this.setState({
      city: newCity
    });
    //hier niet loggen, is asynchroon! zie log in Share comp
  };

  render() {
    return (
      <>
        <PageHeader title={`De Derde Boodschap`} />
        <Filter changeCity={this.changeCity} />
        <main>
          <Switch>
            <Route path={ROUTES.home} exact strict component={Home} />
            <Route path={ROUTES.stories} component={Stories} />
            <Route path={ROUTES.mood} component={Mood} />
            <Route
              path={ROUTES.share}
              render={() => <Share city={this.state.city} />}
            />
            <Route path={ROUTES.detail} component={Detail} />
            <Route path={ROUTES.information} component={Information} />
            <Route path={ROUTES.login} component={Login} />
            <Route path={ROUTES.succeed} component={Succeed} />

            <Route path={ROUTES.storyadmin} component={StoryAdmin} />
            <Route path={ROUTES.kandidaten} component={Kandidaten} />

            <Route path={ROUTES.register} component={Register} />
          </Switch>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
