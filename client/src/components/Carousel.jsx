import React, { Component } from "react";
import PageHeader from "./PageHeader";
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
    this.state = { activeIndex: 0 };
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
    return (
      <>
        <PageHeader title={`Macbeth`} />

        <article className={styles.carousel_container}>
          <h2>Shakespeare’s darkest psychological thriller.</h2>

          <div className={styles.carousel}>
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

            <button onClick={e => this.prevSlide(e)}>Previous</button>
            <button onClick={e => this.nexSlide(e)}>Next</button>
          </div>
        </article>
      </>
    );
  }
}

export default Carousel;
