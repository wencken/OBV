import React from "react";
import { NavLink } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { ROUTES } from "../constants";
import styles from "./Navigation.module.css";

const Navigation = ({ uiStore }) => {
  return (
    <nav>
      {uiStore.authUser ? (
        <ul className={styles.boxAdmin}>
          <span>
            <li>
              {uiStore.authUser.name.charAt(0).toUpperCase() +
                uiStore.authUser.name.slice(1)}
            </li>
            <li>
              <button onClick={uiStore.logout}>Uitloggen</button>
            </li>
          </span>
          <li>
            <NavLink exact={true} to={ROUTES.home}>
              De Derde Boodschap
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.storyadmin}>Stories</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.mood}>Mood</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.kandidaten}>Kandidaten</NavLink>
          </li>
        </ul>
      ) : (
        <ul className={styles.box}>
          <li>
            <NavLink exact={true} to={ROUTES.home}>
              De Derde Boodschap
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.stories}>Stories</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.mood}>Mood</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.share}>Tell us your story</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.detail}>Macbeth</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.information}>Huh?</NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default inject("uiStore")(observer(Navigation));
