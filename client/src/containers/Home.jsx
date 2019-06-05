import React from "react";
import { inject, observer } from "mobx-react";
import PageHeader from "../components/PageHeader";
import styles from "./Home.module.css";

const Home = ({ storyStore, moodStore }) => {
  const { stories } = storyStore;
  const { moods } = moodStore;

  const countStories = value => {
    for (var i = 0; i < 10; i++) {
      return stories[i];
    }
  };
  return (
    <>
      <PageHeader title={`De Derde Boodschap`} />
      <h2>Top 10 van de {stories.length} verhalen:</h2>
      {stories.length > 0 ? (
        <div>
          {stories.map(story => (
            <ul className={styles.reverse}>
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
