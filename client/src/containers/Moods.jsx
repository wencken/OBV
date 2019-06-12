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
      <h2>How are we doing?</h2>
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
