import React from "react";
import { inject, observer } from "mobx-react";
import Carousel from "../components/carousel/Carousel";
import CarouselData from "../components/carousel/CarouselData";
import styles from "./Detail.module.css";
import Muziek from "../components/Muziek";

const Detail = ({ moodStore }) => {
  const { currentMood } = moodStore;

  return (
    <>
      <article className={"container_switch"}>
        <div className={"container_right"}>
          <header>
            <h2 className={"visually-hidden"}>Macbeth</h2>
            <p className={"title_small"}>
              Shakespeare’s darkest <br />
              psychological thriller.
            </p>
          </header>
          <Carousel currentMood={currentMood} slides={CarouselData} />
        </div>

        <div className={"container_aside"}>
          <Muziek />

          <ul className={"container_facts"}>
            <li
              className={
                currentMood
                  ? currentMood === "happy"
                    ? styles.btn_border_yellow
                    : currentMood === "sad"
                    ? styles.btn_border_blue
                    : styles.btn_border_pink
                  : styles.button_list
              }
            >
              <p>Still not convinced?</p>
              <a
                className={styles.btn_black}
                href="https://www.operaballet.be/nl/programma/2018-2019/macbeth"
              >
                Read more
              </a>
            </li>
            <li
              className={
                currentMood
                  ? currentMood === "happy"
                    ? styles.btn_bg_yellow
                    : currentMood === "sad"
                    ? styles.btn_bg_blue
                    : styles.btn_bg_pink
                  : styles.button_list
              }
            >
              <p>Curious for more?</p>
              <a
                className={styles.btn_white}
                href="https://ticketing.operaballet.be/nl/saleflow/event/301643d9-b03d-e811-90f0-0050568438e9/manual/area/5d31a250-3014-4e61-a610-1bf764ade50e/seat"
              >
                Buy Tickets
              </a>
            </li>
          </ul>
        </div>
      </article>
    </>
  );
};

export default inject(`moodStore`)(observer(Detail));
