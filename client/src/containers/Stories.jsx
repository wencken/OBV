import React from "react";
import { PropTypes, inject, observer } from "mobx-react";
import Vote from "../components/Vote";
import { Link } from "react-router-dom";
import Muziek from "../components/Muziek";

import styles from "./Stories.module.css";

const Stories = ({ uiStore, moodStore, storyStore }) => {
  const { currentCity } = uiStore;
  const { currentMood } = moodStore;
  const { stories } = storyStore;

  const filterStories = city => {
    return stories.filter(story => story.city === city);
  };

  const filteredStories = filterStories(currentCity);

  return (
    <>
      <section className={"container_right"}>
        <h2 className={"visually-hidden"}>All Stories</h2>
        {filteredStories.length > 0 ? (
          <article
            className={
              currentMood
                ? currentMood === "happy"
                  ? `${styles.container} border_yellow bg_white`
                  : currentMood === "sad"
                  ? `${styles.container} border_blue bg_white`
                  : `${styles.container} border_pink bg_white`
                : `${styles.container} border_black bg_white`
            }
          >
            <h3 className={`${styles.center} title_small color_yellow`}>
              Verhalen van de week
            </h3>
            <div className={styles.container_stories}>
              {filteredStories.slice(0, 6).map(story => (
                <Vote
                  key={story.id}
                  story={story}
                  onVote={storyStore.voteStory}
                />
              ))}
            </div>
          </article>
        ) : (
          <p>No stories</p>
        )}
        <Link to="/share" className={styles.btn_yellow}>
          Tell us your story
        </Link>
      </section>
    </>
  );
};

Stories.propTypes = {
  storyStore: PropTypes.observableObject.isRequired
};

export default inject(`uiStore`, `moodStore`, `storyStore`)(observer(Stories));
