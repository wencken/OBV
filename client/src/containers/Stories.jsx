import React from "react";
import { PropTypes, inject, observer } from "mobx-react";
import Vote from "../components/Vote";
import { Link } from "react-router-dom";

import styles from "./Stories.module.css";

const Stories = ({ uiStore, storyStore }) => {
  const { currentCity } = uiStore;

  const { stories } = storyStore;

  const filterStories = city => {
    return stories.filter(story => story.city === city);
  };

  const filteredStories = filterStories(currentCity);

  return (
    <>
      <article className={"container_right"}>
        <h2 className={"visually-hidden"}>All Stories</h2>
        {filteredStories.length > 0 ? (
          <article>
            <h3 className={"title_small color_yellow"}>Verhalen van de week</h3>
            {filteredStories.map(story => (
              <Vote
                key={story.id}
                story={story}
                onVote={storyStore.voteStory}
              />
            ))}
          </article>
        ) : (
          <p>No stories</p>
        )}
        <Link to="/share" className={styles.btn_yellow}>
          Tell us your story
        </Link>
      </article>
    </>
  );
};

Stories.propTypes = {
  storyStore: PropTypes.observableObject.isRequired
};

export default inject(`uiStore`, `storyStore`)(observer(Stories));
