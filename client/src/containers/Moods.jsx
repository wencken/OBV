import React from "react";
import { inject, observer } from "mobx-react";

const Moods = ({ city, moodStore, storyStore }) => {
  console.log(city);

  const { moods } = moodStore;
  const { stories } = storyStore;

  var counts = {};

  const countStories = mood => {
    let count = 0;
    for (let i = 0; i < stories.length; i++) {
      if (stories[i].moodId === mood.id) {
        count++;
        counts[mood.name] = parseFloat(count);
        const max = checkMajority();
        console.log(max);
        moodStore.changeCurrentMood(max);
      }
    }
    return (count / stories.length) * 100;
  };

  const checkMajority = () => {
    return Object.keys(counts).reduce((a, b) =>
      counts[a] > counts[b] ? a : b
    );

    // console.log({ ...counts });
    // const test = { ...counts };
    // let max = Math.max(...test);
    // console.log(max);

    // counts.map(count => console.log(count));

    // const max = Math.max(...countsById);
    // console.log(max);
  };

  return (
    <>
      {/* <PageHeader title={`How are we doing?`} /> */}
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
