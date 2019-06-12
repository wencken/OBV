import React, { Component } from "react";
import CarouselSlide from "./CarouselSlide";
import CarouselIndicator from "./CarouselIndicator";
import styles from "./Carousel.module.css";

class Carousel extends Component {
  constructor(props) {
    super(props);
    //
    this.goToSlide = this.goToSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.nexSlide = this.nexSlide.bind(this);
    //
    this.state = { activeIndex: 0, currentMood: "" };
  }

  goToSlide = index => {
    this.setState({
      activeIndex: index
    });
  };
  nexSlide = e => {
    e.preventDefault();
    // console.log("-1");
    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index
    });
  };
  prevSlide = e => {
    e.preventDefault();
    // console.log("+1");
    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index
    });
  };

  render() {
    const currentMood = this.props;
    console.log(currentMood);
    return (
      <>
        <article
          className={
            currentMood
              ? currentMood === "happy"
                ? `${styles.carousel_container} border_yellow `
                : currentMood === "sad"
                ? `${styles.carousel_container} border_blue`
                : `${styles.carousel_container} border_pink`
              : styles.carousel_container
          }
        >
          <div className={styles.carousel}>
            <button
              className={styles.carousel_button1}
              onClick={e => this.prevSlide(e)}
            />
            <ul className={styles.carousel__slides}>
              {this.props.slides.map((slide, index) => (
                <CarouselSlide
                  key={index}
                  index={index}
                  activeIndex={this.state.activeIndex}
                  slide={slide}
                />
              ))}
            </ul>

            <button
              className={styles.carousel_button2}
              onClick={e => this.nexSlide(e)}
            />
          </div>
          <ul className={styles.carousel__indicators}>
            {this.props.slides.map((slide, index) => (
              <CarouselIndicator
                key={index}
                index={index}
                activeIndex={this.state.activeIndex}
                isActive={this.state.activeIndex === index}
                onClick={e => this.goToSlide(index)}
              />
            ))}
          </ul>
        </article>
      </>
    );
  }
}

export default Carousel;
