import React, { Component } from "react";
import { observer, inject } from "mobx-react";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: "Gent" };
    console.log("stad:", this.state.selected);
  }

  setCityMode = value => {
    if (value) {
      console.log("Geselecteerde stad:", this.state.selected);
      this.setState({ selected: value });
    }
  };

  render() {
    return (
      <form>
        <label htmlFor="Gent">
          <input
            type="radio"
            id="Gent"
            name="city"
            value="Gent"
            // ref={cityInput}
            checked={this.state.selected === "Gent"}
            onChange={() => this.setCityMode("Gent")}
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
            checked={this.state.selected === "Antwerpen"}
            onChange={() => this.setCityMode("Antwerpen")}
          />
          Antwerpen
        </label>
      </form>
    );
  }
}

export default inject("storyStore")(observer(Filter));
