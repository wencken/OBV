import React from "react";
import { inject, observer } from "mobx-react";
import { ROUTES } from "../constants";
import { withRouter } from "react-router-dom";

import CheckBox from "../components/CheckBox";
import styles from "./Share.module.css";

const Share = ({ uiStore, moodStore, storyStore, emailStore, history }) => {
  const { currentCity } = uiStore;
  const { currentMood } = moodStore;
  let mood = "";

  const descriptionInput = React.createRef();
  const moodInput = React.createRef();
  const emailInput = React.createRef();

  const handleSubmit = e => {
    e.preventDefault();

    // if (!emailInput.current.value) {
    //   console.log("nog validatie toevoegen");
    // } else {
    console.log(e.currentTarget);

    history.push(ROUTES.succeed);

    storyStore.addStory({
      description: descriptionInput.current.value,
      moodId: mood,
      city: currentCity
    });
    emailStore.addEmail({
      email: emailInput.current.value
    });
    descriptionInput.current.value = "";
    emailInput.current.value = "";
    // }
  };

  const setMood = e => {
    console.log("Mood selected:", e.currentTarget.value);
    mood = e.currentTarget.value;
  };

  return (
    <>
      <h2>Tell us your story</h2>
      <article className={"btn_listen bg_black color_white"}>
        <img
          src="../../assets/img/headphones2.png"
          alt="White headphones with soundwaves"
          width="50"
          height="59"
        />
        <h2 className={"visually-hidden"}>Listen</h2>
        <p className={"text_small"}>Now Playing</p>
        <p className={"navTitle"}>Macbeth</p>
        <button>Listen here</button>
      </article>
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
                    // ref={moodInput}
                    // checked={this.state.selected === "Ghent"}
                    onChange={setMood}
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
            className={
              currentMood
                ? currentMood === "happy"
                  ? `${styles.textarea_yellow} ${styles.textarea} `
                  : currentMood === "sad"
                  ? `${styles.textarea_blue} ${styles.textarea} `
                  : `${styles.textarea_pink} ${styles.textarea} `
                : styles.textarea
            }
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

export default inject(`uiStore`, `moodStore`, `storyStore`, `emailStore`)(
  withRouter(observer(Share))
);
