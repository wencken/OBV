import React, { Component } from "react";
import styles from "../containers/Share.module.css";
class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.toggleContent = this.toggleContent.bind(this);
    this.state = {
      showContent: false
    };
  }

  toggleContent(event) {
    event.preventDefault();
    this.setState(prevState => ({
      showContent: !prevState.showContent
    }));
  }

  render() {
    const { showContent } = this.state;
    const { emailInput } = this.props;
    // const mood = this.props.moodStore;
    return (
      <>
        <label
          htmlFor="checkbox"
          className={`${styles.checkbox} text_italic text_small`}
        >
          <input
            type="checkbox"
            name="email"
            id="checkbox"
            onClick={this.toggleContent}
          />
          I want to have a chance of winning an opera ticket.
        </label>
        <label htmlFor="email">
          {showContent === true ? (
            <input
              type="email"
              name="email"
              id="email"
              ref={emailInput}
              placeholder="E-mailadres"
              // className={styles.reverse}
              className={styles.email}
            />
          ) : (
            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-mailadres"
              ref={emailInput}
              className={"visually-hidden"}
            />
          )}
        </label>
      </>
    );
  }
}

export default CheckBox;
