import React, { Component } from "react";
import { observer, inject } from "mobx-react";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: "Gent" };
  }

  // handleFormSubmit = e => {
  //   e.preventDefault();
  //   console.log("Geselecteerde stad:", e.target.value);
  // };

  setCityMode = value => {
    console.log("Geselecteerde stad:", this.state.selected);
    this.setState({ selected: value });
  };

  render() {
    return (
      // <form onChange={this.handleFormSubmit}>
      <form>
        <input
          type="radio"
          id="Gent"
          name="city"
          value="Gent"
          checked={this.state.selected === "Gent"}
          onChange={() => this.setCityMode("Gent")}
        />
        Gent
        <input
          type="radio"
          id="Antwerpen"
          name="city"
          value="Antwerpen"
          checked={this.state.selected === "Antwerpen"}
          onChange={() => this.setCityMode("Antwerpen")}
        />
        Antwerpen
      </form>
    );
  }
}

export default inject("storyStore")(observer(Filter));
