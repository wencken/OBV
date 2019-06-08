import React from "react";
import { inject, observer } from "mobx-react";
import styles from "./Home.module.css";

const Home = ({ storyStore, moodStore }) => {
  const { stories } = storyStore;
  const { moods } = moodStore;

  return (
    <>
      {/* <PageHeader title={`De Derde Boodschap`} /> */}
      <header>
        <h2>De Derde Boodschap</h2>
        <p>
          Top 10 van de {stories.length} verhalen uit {moods.name}(mood)
          {/* van{" "}{stories.city}: */}
        </p>
      </header>

      {stories.length > 0 ? (
        <div>
          {stories.slice(0, 10).map(story => (
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
