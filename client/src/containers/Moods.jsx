import React from "react";
import { inject, observer } from "mobx-react";

const Moods = ({ city, moodStore, storyStore }) => {
  console.log(city);

  const { moods } = moodStore;
  const { stories } = storyStore;

  const filterStories = city => {
    return stories.filter(story => story.city === city);
  };

  const filteredStories = filterStories(city);

  // moods.map(({ total }) => console.log(total));

  var counts = {};

  const countStories = mood => {
    let count = 0;
    for (let i = 0; i < filteredStories.length; i++) {
      if (filteredStories[i].moodId === mood.id) {
        count++;
        counts[mood.name] = parseFloat(count);
        const max = checkMajority();
        console.log(max);
        moodStore.changeCurrentMood(max);
      }
    }
    return (count / filteredStories.length) * 100;

    // return (mood.total / stories.length) * 100;
  };

  const checkMajority = () => {
    return Object.keys(counts).reduce((a, b) =>
      counts[a] > counts[b] ? a : b
    );
  };

  return (
    <>
      <h2>How are we doing?</h2>
      <ul>
        {moods.map(mood => (
          <li key={mood.id}>
            {mood.name}: {countStories(mood).toFixed(2)}%
          </li>
        ))}
      </ul>
    </>
  );
};

export default inject(`storyStore`, `moodStore`)(observer(Moods));
