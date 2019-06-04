import React from "react";
import { inject, observer } from "mobx-react";
import PageHeader from "../components/PageHeader";
import Navigation from "../components/Navigation";

const Mood = ({ moodStore, storyStore }) => {
  const { moods } = moodStore;
  // const moodCat = storyStore.story.mood;
  // console.log(moodCat);

  return (
    <>
      <PageHeader title={`How are we doing?`} />
      <Navigation />

      <div>
        {moods.map(mood => (
          <p>{mood.name}</p>
        ))}
      </div>
    </>
  );
};

export default inject(`storyStore`, `moodStore`)(observer(Mood));
