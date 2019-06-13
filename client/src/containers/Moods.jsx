import React from "react";
import { inject, observer } from "mobx-react";

// import styles from "./Moods.module.css";

const Moods = ({ uiStore, moodStore, storyStore }) => {
  const { currentCity } = uiStore;
  const { moodCounts, resolveMood } = moodStore;
  const { stories } = storyStore;

  console.log(moodCounts);

  const filterStories = city => {
    return stories.filter(story => story.city === city);
  };

  const filteredStories = filterStories(currentCity);

  return (
    <>
      <div className={"container_switch"}>
        <div className={"container_right"}>
          <h2 className={"title_small"}>How is {uiStore.currentCity} doing?</h2>
          <ul>
            {moodCounts
              ? Object.keys(moodCounts).map(key => (
                  <li key={key}>
                    {resolveMood(key).name}:
                    {((moodCounts[key] / filteredStories.length) * 100).toFixed(
                      2
                    )}
                  </li>
                ))
              : ""}
          </ul>
        </div>
        <div className={"container_aside"}>
          <article className={"btn_listen bg_black color_white"}>
            <img
              src="../../assets/img/headphones2.png"
              alt="White headphones with soundwaves"
              width="50"
              height="59"
            />
            <h2 className={"visually-hidden"}>Listen</h2>
            <p className={"text_small"}>Now Playing</p>
            <p className={"navTitle"}>Macbeth</p>

            <button className={"listenHere"}>
              {" "}
              <span className={"icon"}>
                <span className={"playIcon"} />
                <span className={"pauseIcon"} />
              </span>{" "}
              <span>Listen here</span>
            </button>
          </article>

          <aside className={"container_facts"}>
            <h2 className={"visually-hidden"}>Legende</h2>

            <div>
              <p className="">Red</p>
              <p className={"text_small"}>means anger</p>
            </div>
            <div>
              <p className="">Blue</p>
              <p className={"text_small"}>stands for sad</p>
            </div>
            <div>
              <p className="">Yellow</p>
              <p className={"text_small"}>equals happiness</p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default inject(`uiStore`, `storyStore`, `moodStore`)(observer(Moods));
