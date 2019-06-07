import React from "react";
import { inject, observer } from "mobx-react";
import { ROUTES } from "../constants";
import PageHeader from "../components/PageHeader";
import CheckBox from "../components/CheckBox";
import styles from "./Share.module.css";

const Share = ({ moodStore, storyStore, emailStore, history }) => {
  const descriptionInput = React.createRef();
  const moodInput = React.createRef();
  const emailInput = React.createRef();

  const handleSubmit = e => {
    e.preventDefault();

    if (!emailInput.current.value) {
      console.log("nog validatie toevoegen");
    } else {
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
    }
  };

  // const setMood = e => {
  //   // e.preventDefault();
  //   console.log("Mood selected:", e);
  // };

  return (
    <>
      <PageHeader title={`Tell us your story`} />

      <form onSubmit={handleSubmit} className={styles.reverse}>
        {/* <label htmlFor="mood">
          Mood:
          <select name="mood" id="mood" ref={moodInput}>
            {moodStore.moods.map(mood => (
              <option value={mood.id} key={mood.id} name={mood.name}>
                {mood.name}
              </option>
            ))}
          </select>
        </label> */}

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
                    // checked={this.state.selected === "Gent"}
                    // onChange={setMood}
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

export default inject(`moodStore`, `storyStore`, `emailStore`)(observer(Share));
