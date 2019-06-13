import React from "react";
import { inject, observer } from "mobx-react";
import Carousel from "../components/carousel/Carousel";
import CarouselData from "../components/carousel/CarouselData";
import styles from "./Detail.module.css";

const Detail = ({ moodStore }) => {
  const { currentMood } = moodStore;

  return (
    <>
      <header>
        <h2>Macbeth</h2>
        <p>Shakespeare’s darkest psychological thriller.</p>
      </header>
      <Carousel currentMood={currentMood} slides={CarouselData} />
      <div className={styles.container_button}>
        <article className={"btn_listen bg_black color_white"}>
          <img
            src="../../assets/img/headphones2.png"
            alt="White headphones with soundwaves"
            width="50"
            height="59"
          />
          <h2 className={"visually-hidden"}>Listen</h2>
          <p className={"text_small"}>Now Playing</p>
          <p className={"navTitle"}>Macbeth</p>
          <button>Listen here</button>
        </article>
        <ul className={styles.container_button}>
          <li
            className={
              currentMood
                ? currentMood === "happy"
                  ? `${styles.button_list} border_yellow`
                  : currentMood === "sad"
                  ? `${styles.button_list} border_blue`
                  : `${styles.button_list} border_pink`
                : styles.button_list
            }
          >
            <p>Still not convinced?</p>
            <a
              className={`${styles.btn} btn_black`}
              href="https://www.operaballet.be/nl/programma/2018-2019/macbeth"
            >
              Read more
            </a>
          </li>
          <li
            className={
              currentMood
                ? currentMood === "happy"
                  ? `${styles.button_list} bg_yellow`
                  : currentMood === "sad"
                  ? `${styles.button_list} bg_blue color_white`
                  : `${styles.button_list} bg_pink color_white`
                : styles.button_list
            }
          >
            <p>Curious for more?</p>
            <a
              className={`${styles.btn} btn_white`}
              href="https://ticketing.operaballet.be/nl/saleflow/event/301643d9-b03d-e811-90f0-0050568438e9/manual/area/5d31a250-3014-4e61-a610-1bf764ade50e/seat"
            >
              Buy Tickets
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default inject(`moodStore`)(observer(Detail));
