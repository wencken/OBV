import React from "react";
import { inject, observer } from "mobx-react";

const Moods = ({ city, moodStore, storyStore }) => {
  console.log(city);

  const { moods, countMood } = moodStore;
  const { stories } = storyStore;

  const filterStories = city => {
    return stories.filter(story => story.city === city);
  };

  const filteredStories = filterStories(city);

  // moods.map(({ total }) => console.log(total));

  return (
    <>
      <h2>How are we doing?</h2>
      <ul>
        {moods.map(mood => (
          <li key={mood.id}>
            {mood.name}: {countMood(filteredStories, mood)}%
          </li>
        ))}
      </ul>
    </>
  );
};

export default inject(`storyStore`, `moodStore`)(observer(Moods));
