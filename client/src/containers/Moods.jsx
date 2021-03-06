import React from "react";
import { inject, observer } from "mobx-react";

import styles from "./Moods.module.css";
import Muziek from "../components/Muziek";

const Moods = ({ uiStore, moodStore, storyStore }) => {
  const { currentCity } = uiStore;
  const { stories } = storyStore;
  const { moodCounts, resolveMood, currentMood } = moodStore;

  console.log(moodCounts);

  const test = currentMood;
  console.log(test);

  const filterStories = city => {
    return stories.filter(story => story.city === city);
  };

  const filteredStories = filterStories(currentCity);

  return (
    <>
      <div className={"container_switch"}>
        <article className={"container_right"}>
          <h2 className={"title_small"}>How is {uiStore.currentCity} doing?</h2>
          <ul className={styles.container_stats}>
            {moodCounts
              ? Object.keys(moodCounts).map(key => (
                  <li className={styles.stat} key={key}>
                    <img
                      src={`../../assets/img/${resolveMood(key).name}.png`}
                      alt={`${resolveMood(key).name}`}
                    />
                    <svg
                      width="100"
                      height={(
                        (moodCounts[key] / filteredStories.length) *
                        400
                      ).toFixed(0)}
                      className={
                        resolveMood(key).name
                          ? resolveMood(key).name === "happy"
                            ? styles.stat_yellow
                            : resolveMood(key).name === "sad"
                            ? styles.stat_blue
                            : styles.stat_pink
                          : ""
                      }
                    >
                      <rect
                        width="100"
                        height={(
                          (moodCounts[key] / filteredStories.length) *
                          400
                        ).toFixed(0)}
                      />
                    </svg>
                    <span>
                      {(
                        (moodCounts[key] / filteredStories.length) *
                        100
                      ).toFixed(0)}
                      %
                    </span>
                  </li>
                ))
              : ""}
          </ul>
        </article>
        <div className={"container_aside"}>
          <Muziek />

          <aside className={"container_facts"}>
            <h2 className={"visually-hidden"}>Legende</h2>

            <div>
              <p className={"title_small text_uppercase color_pink"}>Red</p>
              <p className={"text_small"}>means anger</p>
            </div>
            <div>
              <p className={"title_small text_uppercase color_blue"}>Blue</p>
              <p className={"text_small"}>stands for sad</p>
            </div>
            <div>
              <p className={"title_small text_uppercase color_yellow"}>
                Yellow
              </p>
              <p className={"text_small"}>equals happiness</p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default inject(`uiStore`, `storyStore`, `moodStore`)(observer(Moods));
