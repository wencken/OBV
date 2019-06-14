import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { inject } from "mobx-react";

import { ROUTES } from "../constants";
import Footer from "../components/Footer";

import Home from "./Home";
import Stories from "./Stories";
import Moods from "./Moods";
import Share from "./Share";
import Detail from "./Detail";
import Information from "./Information";
import Succeed from "../components/Succeed";
//
import Login from "../components/auth/Login";
// import Register from "../components/auth/Register";
//
import StoryAdmin from "../components/StoryAdmin";
import Kandidaten from "../components/Kandidaten";
import PageHeader from "../components/PageHeader";
import Filter from "../components/Filter";

class App extends Component {
  render() {
    return (
      <>
        <PageHeader title={`De Derde Boodschap`} />
        <Filter />
        <main>
          <Switch>
            <Route path={ROUTES.home} exact strict render={() => <Home />} />
            <Route path={ROUTES.stories} render={() => <Stories />} />
            <Route path={ROUTES.mood} render={() => <Moods />} />
            <Route path={ROUTES.share} render={() => <Share />} />
            <Route path={ROUTES.detail} component={Detail} />
            <Route path={ROUTES.information} component={Information} />
            <Route path={ROUTES.login} component={Login} />
            <Route path={ROUTES.succeed} component={Succeed} />

            <Route path={ROUTES.storyadmin} component={StoryAdmin} />
            <Route path={ROUTES.kandidaten} component={Kandidaten} />

            {/* <Route path={ROUTES.register} component={Register} /> */}
          </Switch>
        </main>
        <Footer />
      </>
    );
  }
}

export default inject("uiStore")(App);
