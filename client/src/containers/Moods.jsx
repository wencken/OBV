import React from "react";
import { inject, observer } from "mobx-react";

const Moods = ({ city, moodStore, storyStore }) => {
  console.log(city);

  const { moods } = moodStore;
  const { stories } = storyStore;

  const countStories = id => {
    let count = 0;
    for (let i = 0; i < stories.length; i++) {
      if (stories[i].moodId === id) {
        count++;
      }
    }
    return (count / stories.length) * 100;
  };

  return (
    <>
      {/* <PageHeader title={`How are we doing?`} /> */}
      <h2>How are we doing?</h2>
      <ul>
        {moods.map(mood => (
          <li key={mood.id}>
            {mood.name}: {countStories(mood.id).toFixed(2)}%
          </li>
        ))}
      </ul>
    </>
  );
};

export default inject(`storyStore`, `moodStore`)(observer(Moods));
