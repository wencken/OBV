import React, { Component } from "react";
import { inject, observer } from "mobx-react";

import styles from "./Filter.module.css";
// import { log } from "util";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: "Ghent" };
  }

  handleChangeCity = e => {
    this.setState({ selected: e.target.value });
    this.props.uiStore.changeCity(e.target.value);
  };

  render() {
    const { selected } = this.state;
    const { currentMood } = this.props.moodStore;
    // const { city } = this.props;
    return (
      <article>
        <h2 className={"visually-hidden"}>Filter</h2>
        <div
          className={
            currentMood
              ? currentMood === "happy"
                ? styles.container_yellow
                : currentMood === "sad"
                ? styles.container_blue
                : styles.container_pink
              : styles.container_blue
          }
        >
          <article className={styles.article_mood}>
            <ul>
              <li className={"text_bold"} />
              <li
                className={
                  currentMood
                    ? currentMood === "sad"
                      ? "color_black"
                      : "visually-hidden"
                    : "visually-hidden"
                }
              >
                We are feeling span{" "}
                <span className={"text_bold"}>teardrop-sad</span> this week.
                #elections19 #blacksunday #shame
              </li>
              <li
                className={
                  currentMood
                    ? currentMood === "happy"
                      ? "color_black"
                      : "visually-hidden"
                    : "visually-hidden"
                }
              >
                We are feeling{" "}
                <span className={"text_bold"}>sunkissed-happy</span> this week.
                #joy #summer #sfinksmixedfestival
              </li>
              <li
                className={
                  currentMood
                    ? currentMood === "mad"
                      ? ""
                      : "visually-hidden"
                    : "visually-hidden"
                }
              >
                We are feeling{" "}
                <span className={"text_bold"}>darkred-angry</span> this week.
                #shame #RIP #women #justice #julie
              </li>

              <a className={styles.btn_black} href="./share">
                Share your story
              </a>
            </ul>
          </article>
          <form className={styles.container_filter}>
            <input
              className={styles.input_radio}
              type="radio"
              id="Ghent"
              name="city"
              value="Ghent"
              checked={selected === "Ghent"}
              onChange={this.handleChangeCity}
            />
            <label htmlFor="Ghent" className={styles.label_radio}>
              Ghent
            </label>
            <input
              className={styles.input_radio}
              type="radio"
              id="Antwerp"
              name="city"
              value="Antwerp"
              checked={selected === "Antwerp"}
              onChange={this.handleChangeCity}
            />
            <label htmlFor="Antwerp" className={styles.label_radio}>
              Antwerp
            </label>
          </form>
        </div>
      </article>
    );
  }
}

export default inject("uiStore", "moodStore")(observer(Filter));
