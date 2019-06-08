import React from "react";
import { inject, observer } from "mobx-react";
import { ROUTES } from "../constants";
import { withRouter } from "react-router-dom";

import CheckBox from "../components/CheckBox";
import styles from "./Share.module.css";

const Share = ({ city, moodStore, storyStore, emailStore, history }) => {
  console.log(city);

  const descriptionInput = React.createRef();
  const moodInput = React.createRef();
  const emailInput = React.createRef();

  const handleSubmit = e => {
    e.preventDefault();

    // if (!emailInput.current.value) {
    //   console.log("nog validatie toevoegen");
    // } else {

    history.push(ROUTES.succeed);

    storyStore.addStory({
      description: descriptionInput.current.value,
      moodId: moodInput.current.value,
      city: city
    });
    emailStore.addEmail({
      email: emailInput.current.value
    });
    descriptionInput.current.value = "";
    moodInput.current.value = "";
    emailInput.current.value = "";
    // }
  };

  // const setMood = e => {
  //   // e.preventDefault();
  //   console.log("Mood selected:", e);
  // };

  return (
    <>
      {/* <PageHeader title={`Tell us your story`} /> */}
      <h2>Tell us your story</h2>
      <form onSubmit={handleSubmit} className={styles.reverse}>
        {moodStore.moods.length === 0 ? (
          <>
            <p>
              We are very sorry. <br />
              Because of technical complications, <br />
              today you'll have no choice but being happy!
            </p>
            <label htmlFor="happy">
              <input
                type="radio"
                id="happy"
                name="mood"
                value="happy"
                ref={moodInput}
              />
              Happy
            </label>
          </>
        ) : (
          <ul>
            {moodStore.moods.map(mood => (
              <li key={mood.id}>
                <label htmlFor={mood.name}>
                  <input
                    key={mood.id}
                    id={mood.name}
                    type="radio"
                    name="mood"
                    value={mood.id}
                    ref={moodInput}
                  />
                  {mood.name}
                </label>
              </li>
            ))}
          </ul>
        )}

        <label htmlFor="description" className={styles.reverse}>
          Question
          <textarea
            type="textarea"
            name="description"
            id="description"
            placeholder="Tell us your story..."
            ref={descriptionInput}
            required
          />
        </label>
        <CheckBox emailInput={emailInput} />
        <input type="submit" value="Share your story" />
      </form>
    </>
  );
};

export default inject(`moodStore`, `storyStore`, `emailStore`)(
  withRouter(observer(Share))
);
