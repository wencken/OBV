import React, { Component } from "react";
import styles from "./Carousel.module.css";

class CarouselSlide extends Component {
  render() {
    return (
      <li
        className={
          this.props.index === this.props.activeIndex
            ? styles.carousel__slide_active
            : styles.carousel__slide
        }
      >
        <h3 className={styles.carousel_slide__title}>
          {this.props.slide.title}
        </h3>
        <p className={`${styles.carousel_slide__text} text_normal`}>
          {this.props.slide.text}
        </p>
      </li>
    );
  }
}

export default CarouselSlide;
