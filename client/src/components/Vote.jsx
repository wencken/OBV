import React, { Component } from "react";
import { observer, inject } from "mobx-react";

class Vote extends Component {
  render() {
    const { story, onVote } = this.props;
    return (
      <ul>
        <li>{story.description}</li>
        <li>{story.mood ? story.mood.name : ""}</li>
        <li>{story.city}</li>
        <li>
          <button onClick={() => onVote(story)}>
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

export default inject("storyStore")(observer(Vote));
