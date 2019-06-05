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
    this.setState({
      showContent: !this.state.showContent
    });
  }

  render() {
    const { showContent } = this.state;
    const { emailInput } = this.props;
    return (
      <>
        <label htmlFor="checkbox" className={styles.checkbox}>
          <input
            type="checkbox"
            name="email"
            id="checkbox"
            onClick={this.toggleContent}
          />
          Ik wil deelnemen aan de wedstrijd.
        </label>
        <label htmlFor="email">
          {showContent === true ? (
            <input
              type="email"
              name="email"
              id="email"
              ref={emailInput}
              className={styles.reverse}
              required
            />
          ) : (
            ""
          )}
        </label>
      </>
    );
  }
}

export default CheckBox;
