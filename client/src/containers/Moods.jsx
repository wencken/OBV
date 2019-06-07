import React from "react";
import { inject, observer } from "mobx-react";

const Moods = ({ moodStore, storyStore }) => {
  const { moods } = moodStore;
  const { stories } = storyStore;

  const countStories = value => {
    let count = 0;
    for (let i = 0; i < stories.length; i++) {
      if (stories[i].moodId === value) {
        count++;
      }
    }
    return (Math.round(count) / stories.length) * 100;
  };

  return (
    <>
      {/* <PageHeader title={`How are we doing?`} /> */}
      <h2>How are we doing?</h2>
      <ul>
        {moods.map(mood => (
          <li key={mood.id}>
            {mood.name}: {Math.round(countStories(mood.id))}%
          </li>
        ))}
      </ul>
    </>
  );
};

export default inject(`storyStore`, `moodStore`)(observer(Moods));
