import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";
// import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div>
      <NavLink exact={true} to={ROUTES.home}>
        De Derde Boodschap
      </NavLink>
      <NavLink to={ROUTES.stories}>Stories</NavLink>
      <NavLink to={ROUTES.mood}>Mood</NavLink>
      <NavLink to={ROUTES.share}>Tell us your story</NavLink>
      <NavLink to={ROUTES.detail}>Macbeth</NavLink>
      <NavLink to={ROUTES.information}>Huh?</NavLink>
    </div>
  );
};

export default Navigation;
