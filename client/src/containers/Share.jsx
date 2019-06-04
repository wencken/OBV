import React from "react";
import { inject, observer } from "mobx-react";
import PageHeader from "../components/PageHeader";
import Navigation from "../components/Navigation";

const Share = ({ moodStore, storyStore }) => {
  const descriptionInput = React.createRef();
  const moodInput = React.createRef();

  const handleSubmit = e => {
    e.preventDefault();
    storyStore.addStory({
      description: descriptionInput.current.value,
      moodId: moodInput.current.value
    });
    descriptionInput.current.value = "";
    moodInput.current.value = "";
  };

  const setMood = value => {
    console.log(value);
  };

  return (
    <>
      <Navigation />
      <PageHeader title={`Tell us your story`} />
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="mood">
          Mood:
          <select name="mood" id="mood" ref={moodInput}>
            {moodStore.moods.map(mood => (
              <option value={mood.id} key={mood.id}>
                {mood.name}
              </option>
            ))}
          </select>
        </label> */}
        <label htmlFor="radio">
          Mood:
          {moodStore.moods.map(mood => (
            <input
              type="radio"
              name="mood"
              id={mood.id}
              value={mood.id}
              ref={moodInput}
              onClick={() => setMood(mood)}
            />
          ))}
        </label>
        <label htmlFor="description">
          Question
          <input
            type="text"
            name="description"
            id="description"
            ref={descriptionInput}
            required
          />
        </label>
        <input type="submit" value="add" />
      </form>
    </>
  );
};

export default inject(`moodStore`, `storyStore`)(observer(Share));
