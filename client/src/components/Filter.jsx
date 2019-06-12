import React, { Component } from "react";
import { inject, observer } from "mobx-react";

import styles from "./Filter.module.css";
import { log } from "util";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: "Ghent" };
  }

  handleChangeCity = e => {
    e.preventDefault();
    this.props.setCity(e.target.value);
    this.setState({ selected: e.target.value });
  };

  render() {
    const { selected } = this.state;
    const { currentMood } = this.props.moodStore;
    const { city } = this.props;
    return (
      <article>
        <h2 className={styles.visuallyHidden}>Filter</h2>
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
              <li className={"text_bold"}>
                Share your story and let us know how you feel.
              </li>
              <li
                className={
                  currentMood
                    ? currentMood === "sad"
                      ? ""
                      : "visually-hidden"
                    : "visually-hidden"
                }
              >
                {city} is feeling span{" "}
                <span className={"text_bold"}>teardrop-sad</span> this week.
                #elections19 #blacksunday #shame
              </li>
              <li
                className={
                  currentMood
                    ? currentMood === "happy"
                      ? ""
                      : "visually-hidden"
                    : "visually-hidden"
                }
              >
                {city} is feeling{" "}
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
                {city} is feeling{" "}
                <span className={"text_bold"}>darkred-angry</span> this week.
                #shame #RIP #women #justice #julie
              </li>
              <li>
                <a className={`btn_black`} href="./share">
                  Share your story
                </a>
              </li>
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

export default inject("moodStore")(observer(Filter));

// const Filter = ({ uiStore }) => {
//   // const { changeCity } = uiStore;
//   const cityInput = React.createRef();

//   const handleChangeCity = e => {
//     e.preventDefault();
//     if (cityInput.current.value) {
//       uiStore.changeCity(cityInput.current.value);
//     }
//   };

//   return (
//     <>
//       <form>
//         <label htmlFor="Ghent">
//           <input
//             type="radio"
//             id="Ghent"
//             name="city"
//             value="Ghent"
//             ref={cityInput}
//             // checked={selected === "Ghent"}
//             onChange={handleChangeCity}
//           />
//           Ghent
//         </label>
//         <label htmlFor="Antwerp">
//           <input
//             type="radio"
//             id="Antwerp"
//             name="city"
//             value="Antwerp"
//             ref={cityInput}
//             // checked={selected === "Antwerp"}
//             onChange={handleChangeCity}
//           />
//           Antwerp
//         </label>
//       </form>
//     </>
//   );
// };

// export default inject("uiStore")(observer(Filter));
