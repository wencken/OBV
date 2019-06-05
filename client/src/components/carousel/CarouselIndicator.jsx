import React, { Component } from "react";
import styles from "./Carousel.module.css";

class CarouselIndicator extends Component {
  render() {
    return (
      <>
        <li
          className={
            this.props.index === this.props.activeIndex
              ? styles.carousel__indicator_active
              : styles.carousel__indicator
          }
          onClick={this.props.onClick}
        />
      </>
    );
  }
}

export default CarouselIndicator;
