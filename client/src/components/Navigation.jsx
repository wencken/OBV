import React from "react";
import { NavLink } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { ROUTES } from "../constants";
import styles from "./Navigation.module.css";

const Navigation = ({ uiStore, moodStore }) => {
  const { currentMood } = moodStore;

  return (
    <nav>
      {uiStore.authUser ? (
        <ul className={styles.container_nav_admin}>
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
            <NavLink className={styles.navTitle} exact={true} to={ROUTES.home}>
              De Derde Boodschap
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.navTitle} to={ROUTES.storyadmin}>
              Stories
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.navTitle} to={ROUTES.mood}>
              Mood
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.navTitle} to={ROUTES.kandidaten}>
              Kandidaten
            </NavLink>
          </li>
        </ul>
      ) : (
        <ul className={styles.container_nav_main}>
          <li>
            <NavLink className={styles.navTitle} exact={true} to={ROUTES.home}>
              De Derde Boodschap
            </NavLink>
          </li>
          <div className={styles.container_nav}>
            <li>
              <NavLink className={styles.navTitle} to={ROUTES.stories}>
                Stories
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.navTitle} to={ROUTES.mood}>
                Mood
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.navTitle} to={ROUTES.detail}>
                Macbeth
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.navTitle} to={ROUTES.information}>
                What's this?
              </NavLink>
            </li>
            <li>
              <NavLink
                className={
                  currentMood
                    ? currentMood === "happy"
                      ? `${styles.navTitle} bg_yellow `
                      : currentMood === "sad"
                      ? `${styles.navTitle} bg_blue color_white`
                      : `${styles.navTitle} bg_pink color_white`
                    : styles.navTitle
                }
                to={ROUTES.share}
              >
                Your story
              </NavLink>
            </li>
          </div>
        </ul>
      )}
    </nav>
  );
};

export default inject("uiStore", "moodStore")(observer(Navigation));
