import React from "react";
import { inject, observer } from "mobx-react";
import { ROUTES } from "../constants";
import PageHeader from "../components/PageHeader";
import Navigation from "../components/Navigation";
import CheckBox from "../components/CheckBox";

const Share = ({ moodStore, storyStore, emailStore, history }) => {
  const descriptionInput = React.createRef();
  const moodInput = React.createRef();
  const emailInput = React.createRef();

  const handleSubmit = e => {
    e.preventDefault();
    history.push(ROUTES.succeed);
    storyStore.addStory({
      description: descriptionInput.current.value,
      moodId: moodInput.current.value
    });
    emailStore.addEmail({
      email: emailInput.current.value
    });
    descriptionInput.current.value = "";
    moodInput.current.value = "";
    emailInput.current.value = "";
  };

  return (
    <>
      <Navigation />
      <PageHeader title={`Tell us your story`} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="mood">
          Mood:
          <select name="mood" id="mood" ref={moodInput}>
            {moodStore.moods.map(mood => (
              <option value={mood.id} key={mood.id}>
                {mood.name}
              </option>
            ))}
          </select>
        </label>
        {/* <label htmlFor="mood">
          Mood:
          {moodStore.moods.map(mood => (
            <li key={mood.id}>
              <input
                type="radio"
                name="mood"
                value={mood.name}
                ref={moodInput}
                onClick={() => setMood(mood.name)}
              />
              {mood.name}
            </li>
          ))}
        </label> */}
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
        <CheckBox emailInput={emailInput} />
        <input type="submit" value="add" />
      </form>
    </>
  );
};

export default inject(`moodStore`, `storyStore`, `emailStore`)(observer(Share));
