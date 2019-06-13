import React, { Component } from "react";
import { observer, inject } from "mobx-react";

import styles from "../containers/Stories.module.css";

class Vote extends Component {
  render() {
    const { story, onVote, currentMood } = this.props;
    return (
      <ul className={styles.container_vote}>
        <li>{story.description}</li>
        {/* <li>{story.mood ? story.mood.name : ""}</li>
        <li>{story.city}</li> */}
        <li>
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
        </li>
      </ul>
    );
  }
}

export default inject("moodStore", "storyStore")(observer(Vote));
