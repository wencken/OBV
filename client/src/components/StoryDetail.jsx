import React, { Component } from "react";
import { observer, inject } from "mobx-react";

class StoryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { edit: false };
  }

  setEditMode = value => this.setState({ edit: value });

  render() {
    const { edit } = this.state;
    const { story, onUpdate, onDelete } = this.props;
    return edit ? (
      <li>
        <label htmlFor="description">
          {story.description}
          <input
            type="text"
            name="description"
            id="description"
            value={story.description}
            onChange={e => story.setDesc(e.currentTarget.value)}
          />
        </label>
        <label htmlFor="mood">
          Mood:
          <select
            name="mood"
            id="mood"
            value={story.moodId}
            onChange={e => story.setMoodId(e.currentTarget.value)}
          >
            {this.props.moodStore.moods.map(mood => (
              <option value={mood.id} key={mood.id}>
                {mood.name}
              </option>
            ))}
          </select>
        </label>
        <button
          onClick={() => {
            onUpdate(story);
            this.setEditMode(false);
          }}
        >
          save
        </button>
      </li>
    ) : (
      <li>
        {story.description} - {story.mood ? story.mood.name : ""}
        <button onClick={() => this.setEditMode(true)}>edit</button>
        <button onClick={() => onDelete(story)}>delete</button>
      </li>
    );
  }
}

export default inject("moodStore")(observer(StoryDetail));
