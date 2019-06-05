import React from "react";
import { inject, observer } from "mobx-react";
import PageHeader from "../components/PageHeader";

const Moods = ({ moodStore, storyStore }) => {
  const { moods } = moodStore;
  const { stories } = storyStore;

  const countStories = value => {
    var count = 0;
    for (var i = 0; i < stories.length; i++) {
      if (stories[i].moodId === value) {
        count++;
      }
    }
    return (Math.round(count) / stories.length) * 100;
  };

  return (
    <>
      <PageHeader title={`How are we doing?`} />
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
