import React from "react";
import { inject, observer } from "mobx-react";
import styles from "./Home.module.css";

const Home = ({ city, storyStore, moodStore }) => {
  const { stories } = storyStore;
  const { moods, currentMood } = moodStore;

  console.log(city);
  console.log({ currentMood });
  console.log(moods);

  const filterStories = city => {
    return stories.filter(story => story.city === city);
  };

  const filteredStories = filterStories(city);

  const sortStories = filteredStories => {
    const copyStories = [].concat(filteredStories);
    return copyStories.sort((a, b) => b.rate - a.rate);
  };

  const sortedStories = sortStories(filteredStories);

  return (
    <>
      <header>
        <h2
          className={
            currentMood
              ? currentMood === "happy"
                ? "bg_yellow"
                : currentMood === "sad"
                ? "bg_blue"
                : "bg_pink"
              : ""
          }
        >
          De Derde Boodschap
        </h2>
        <p>
          Top 10 van de {stories.length} verhalen uit {currentMood}(mood) van{" "}
          {city}:
        </p>
      </header>

      {sortedStories.length > 0 ? (
        <div>
          {sortedStories.slice(0, 10).map(story => (
            <ul key={story.id} className={styles.reverse}>
              <li>{story.description}</li>
              <li>- {story.mood ? story.mood.name : ""}</li>
              <li>- {story.rate}</li>
            </ul>
          ))}
        </div>
      ) : (
        <p>No stories</p>
      )}
    </>
  );
};

export default inject(`storyStore`, `moodStore`)(observer(Home));
