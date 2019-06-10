import React, { Component } from "react";
import { observer } from "mobx-react";

import styles from "./Filter.module.css";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: "Ghent" };
  }

  handleChangeCity = e => {
    this.setState({ selected: e.target.value });

    this.props.changeCity(e.target.value);
  };

  render() {
    const { selected } = this.state;

    return (
      <article>
        <h2 className={styles.visuallyHidden}>Filter</h2>
        <div className={styles.container_blue}>
          <article className={styles.article_mood}>
            <p>Share your story and let us know how you feel.</p>
            <p>
              Ghent is feeling teardrop-sad this week. #elections19 #blacksunday
              #shame
            </p>
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

export default observer(Filter);

// const Filter = ({ moodStore }) => {
//   const { city } = moodStore;

//   const cityInput = React.createRef();

//   const handleChangeCity = e => {
//     e.preventDefault();
//     // {city} === cityInput.current.value;
//     // moodStore.setCity({
//     //   city: cityInput.current.value
//     // });
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
//             onChange={handleChangeCity}
//           />
//           Antwerp
//         </label>
//       </form>
//     </>
//   );
// };

// export default inject("moodStore")(observer(Filter));
