import React, { Component } from "react";
import { observer, inject } from "mobx-react";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: "Gent" };
    console.log("Stad:", this.state.selected);
  }

  handleChangeCity = e => {
    console.log("Stad:", e.target.value);
    this.setState({ selected: e.target.value });
  };

  render() {
    const { selected } = this.state;

    return (
      <form>
        <label htmlFor="Gent">
          <input
            type="radio"
            id="Gent"
            name="city"
            value="Gent"
            // ref={cityInput}
            checked={selected === "Gent"}
            onChange={this.handleChangeCity}
          />
          Gent
        </label>
        <label htmlFor="Antwerpen">
          <input
            type="radio"
            id="Antwerpen"
            name="city"
            value="Antwerpen"
            // ref={cityInput}
            checked={selected === "Antwerpen"}
            onChange={this.handleChangeCity}
          />
          Antwerpen
        </label>
      </form>
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
//         <label htmlFor="Gent">
//           <input
//             type="radio"
//             id="Gent"
//             name="city"
//             value="Gent"
//             ref={cityInput}
//             onChange={handleChangeCity}
//           />
//           Gent
//         </label>
//         <label htmlFor="Antwerpen">
//           <input
//             type="radio"
//             id="Antwerpen"
//             name="city"
//             value="Antwerpen"
//             ref={cityInput}
//             onChange={handleChangeCity}
//           />
//           Antwerpen
//         </label>
//       </form>
//     </>
//   );
// };

// export default inject("moodStore")(observer(Filter));
