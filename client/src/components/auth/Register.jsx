import React, { Component } from "react";
import { inject } from "mobx-react";
import { withRouter } from "react-router-dom";
import { ROUTES } from "../../constants";

class Register extends Component {
  constructor() {
    super();
    this.state = { name: "", email: "", pwd: "", pwd2: "" };
  }

  onChangeCheckbox = e => {
    this.setState({ [e.target.name]: e.target.checked });
  };
  handleChange = e => {
    const input = e.currentTarget;
    const state = { ...this.state };
    state[input.name] = input.value;
    this.setState(state);
  };

  handleSubmit = e => {
    e.preventDefault();
    const { uiStore, history } = this.props;
    const { name, email, pwd } = this.state;
    uiStore.register(name, email, pwd).then(() => {
      history.push(ROUTES.login);
    });
  };

  render() {
    const { name, email, pwd, pwd2 } = this.state;
    return (
      <>
        <h2>Registreren</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">
            name
            <input
              type="test"
              name="name"
              id="name="
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="email">
            email
            <input
              type="email"
              name="email"
              id="email="
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="username">
            password
            <input
              type="password"
              name="pwd"
              id="pwd"
              value={pwd}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="username">
            repeat password
            <input
              type="password"
              name="pwd2"
              id="pwd2"
              ref={pwd2}
              onChange={this.handleChange}
            />
          </label>

          <input
            type="submit"
            value="register"
            disabled={pwd && pwd !== pwd2}
          />
        </form>
      </>
    );
  }
}

export default inject("uiStore")(withRouter(Register));
