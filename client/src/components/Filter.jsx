import React, { Component } from "react";
import { observer, inject } from "mobx-react";

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
        <form className={styles.bg_blue}>
          <div className={styles.container_filter}>
            <label htmlFor="Ghent" className={styles.container_radio}>
              <input
                type="radio"
                id="Ghent"
                name="city"
                value="Ghent"
                checked={selected === "Ghent"}
                onChange={this.handleChangeCity}
              />
              Ghent
            </label>
            <label htmlFor="Antwerp" className={styles.container_radio}>
              <input
                type="radio"
                id="Antwerp"
                name="city"
                value="Antwerp"
                checked={selected === "Antwerp"}
                onChange={this.handleChangeCity}
              />
              Antwerp
            </label>
          </div>
        </form>
      </article>
    );
  }
}

export default inject("storyStore")(observer(Filter));

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
