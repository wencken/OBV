import React, { Component } from "react";
import { observer, inject } from "mobx-react";

import styles from "../containers/Stories.module.css";

class Vote extends Component {
  render() {
    const { story, onVote, currentMood } = this.props;
    return (
      <article className={styles.container_vote}>
        <h4>{story.description}</h4>
        {/* <p>{story.mood ? story.mood.name : ""}</p>
        <p>{story.city}</p> */}
        <button
          className={
            currentMood
              ? currentMood === "happy"
                ? `${styles.vote_button} border_yellow bg_white`
                : currentMood === "sad"
                ? `${styles.vote_button} border_blue bg_white`
                : `${styles.vote_button} border_pink bg_white`
              : `${styles.vote_button} border_black bg_white`
          }
          onClick={() => onVote(story)}
        >
          {story.rate}{" "}
          <span role="img" aria-label="poop">
            💩
          </span>
        </button>
      </article>
    );
  }
}

export default inject("moodStore", "storyStore")(observer(Vote));
