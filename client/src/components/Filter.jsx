import React, { Component } from "react";
import { observer, inject } from "mobx-react";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = { city: false };
  }

  setCity = e => {
    console.log(e.target.value);
  };

  render() {
    return (
      <form onChange={this.setCity.bind(this)}>
        <input type="radio" id="Gent" name="city" value="Gent" />
        Gent
        <input type="radio" id="Antwerpen" name="city" value="Antwerpen" />
        Antwerpen
      </form>
    );
  }
}

export default inject("storyStore")(observer(Filter));
