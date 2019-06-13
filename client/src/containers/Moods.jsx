import React from "react";
import { inject, observer } from "mobx-react";

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
      <h2>How is {uiStore.currentCity} doing?</h2>
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
        <button>Listen here</button>
      </article>
      <ul>
        {moodCounts
          ? Object.keys(moodCounts).map(key => (
              <li key={key}>
                {resolveMood(key).name}:
                {((moodCounts[key] / filteredStories.length) * 100).toFixed(2)}
              </li>
            ))
          : ""}
      </ul>
    </>
  );
};

export default inject(`uiStore`, `storyStore`, `moodStore`)(observer(Moods));
