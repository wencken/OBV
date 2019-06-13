import React from "react";
import { inject, observer } from "mobx-react";

const Moods = ({ uiStore, moodStore, storyStore }) => {
  const { currentCity } = uiStore;
  const { moods } = moodStore;
  const { stories } = storyStore;

  const filterStories = city => {
    return stories.filter(story => story.city === city);
  };

  const filteredStories = filterStories(currentCity);

  // moods.map(({ total }) => console.log(total));

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
      {/* <ul>
        {moodCounts
          ? Object.keys(moodCounts).map(key => (
              <li key={key}>
                {key}: {moodCounts[key]}
              </li>
            ))
          : ""}
      </ul> */}
      <ul>
        {moods.map(mood => (
          <li key={mood.id}>
            {/* {mood.name}: {countMood(filteredStories, mood)}% */}
            {mood.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default inject(`uiStore`, `storyStore`, `moodStore`)(observer(Moods));
