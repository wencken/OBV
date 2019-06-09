import React from "react";
import { inject, observer } from "mobx-react";
import styles from "./Home.module.css";

const Home = ({ city, storyStore, moodStore }) => {
  console.log(city);

  const { stories } = storyStore;
  const { moods } = moodStore;

  const filterStories = city => {
    return stories.filter(story => story.city === city);
  };

  const filteredStories = filterStories(city);

  return (
    <>
      <header>
        <h2>De Derde Boodschap</h2>
        <p>
          Top 10 van de {stories.length} verhalen uit {moods.name}(mood)
          {/* van{" "}{stories.city}: */}
        </p>
      </header>

      {filteredStories.length > 0 ? (
        <div>
          {filteredStories.slice(0, 10).map(story => (
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
