import React from "react";
import { inject, observer } from "mobx-react";
import { ROUTES } from "../constants";
import { withRouter } from "react-router-dom";

import CheckBox from "../components/CheckBox";
import styles from "./Share.module.css";
import Muziek from "../components/Muziek";

const Share = ({ uiStore, moodStore, storyStore, emailStore, history }) => {
  const { currentCity } = uiStore;
  const { currentMood, moods } = moodStore;

  const getCurrentMoodId = () => {
    const currentMoodObject = moods.filter(mood => mood.name === currentMood);
    console.log(currentMood);
    return currentMoodObject.id;
  };

  let gemoed = "";
  console.log(gemoed);
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
      moodId: gemoed,
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
    gemoed = e.currentTarget.value;
    console.log(gemoed);
  };

  return (
    <>
      <div className={"container_switch"}>
        <article className={"container_right"}>
          <h2 className={"title_small"}>Tell us your story</h2>
          <form onSubmit={handleSubmit} className={styles.container}>
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
              <ul className={styles.form_links}>
                {moodStore.moods.map(mood => (
                  <li key={mood.id} className={styles.buttons_li}>
                    <label htmlFor={mood.name}>
                      <input
                        className={styles.input_radio}
                        key={mood.id}
                        id={mood.name}
                        type="radio"
                        name="mood"
                        value={mood.id}
                        // ref={moodInput}
                        checked={gemoed === mood.id}
                        onChange={setMood}
                      />
                      <div className={styles.img_container}>
                        <div
                          className={
                            mood.name
                              ? mood.name === "happy"
                                ? `${styles.img_box} bg_yellow`
                                : mood.name === "sad"
                                ? `${styles.img_box} bg_blue `
                                : `${styles.img_box} bg_pink `
                              : "visually-hidden"
                          }
                        />
                        <img
                          className={styles.img}
                          src={`../../assets/img/${mood.name}.png`}
                          alt={mood.name}
                        />
                      </div>
                    </label>
                  </li>
                ))}
              </ul>
            )}

            <div className={styles.form_rechts}>
              <ul>
                {moodStore.moods.map(mood => (
                  <li
                    key={mood.id}
                    className={styles.textarea_li}
                    // className={
                    //   gemoed
                    //     ? gemoed === mood.id
                    //       ? "bg_blue"
                    //       : // : mood.id === gemoed
                    //         // ? `${styles.reverse}`
                    //         // : `${styles.reverse}`
                    //         "visually-hidden"
                    //     : "visually-hidden"
                    // }
                  >
                    <label
                      htmlFor="description"
                      className={
                        mood.name
                          ? mood.name === "happy"
                            ? `text_normal text_bold `
                            : mood.name === "sad"
                            ? `text_normal text_bold `
                            : `text_normal text_bold `
                          : "visually-hidden"
                      }
                    >
                      What have you experienced lately that made you feel very{" "}
                      <span
                        className={
                          mood.name
                            ? mood.name === "happy"
                              ? ` bg_yellow text_underline`
                              : mood.name === "sad"
                              ? ` bg_blue text_underline`
                              : ` bg_pink text_underline`
                            : "visually-hidden"
                        }
                      >
                        {mood.name}
                      </span>
                      ?
                      <textarea
                        className={
                          mood.name
                            ? mood.name === "happy"
                              ? `${styles.textarea_yellow} ${styles.textarea} `
                              : mood.name === "sad"
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
                  </li>
                ))}
              </ul>
              <CheckBox emailInput={emailInput} />
              <input
                className={styles.btn_black}
                type="submit"
                value="Share your story"
              />
            </div>
          </form>
        </article>

        <div className={"container_aside"}>
          <Muziek />
        </div>
      </div>
    </>
  );
};

export default inject(`uiStore`, `moodStore`, `storyStore`, `emailStore`)(
  withRouter(observer(Share))
);
