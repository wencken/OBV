import React from "react";
import Carousel from "../components/carousel/Carousel";
import CarouselData from "../components/carousel/CarouselData";
import styles from "../Detail.module.css";

const Detail = () => {
  return (
    <>
      <header>
        <h2>Macbeth</h2>
        <p>Shakespeare’s darkest psychological thriller.</p>
      </header>
      <Carousel slides={CarouselData} />
      <ul>
        <li>
          <a href="https://www.operaballet.be/nl/programma/2018-2019/macbeth">
            More Info
          </a>
        </li>
        <li>
          <a href="https://ticketing.operaballet.be/nl/saleflow/event/301643d9-b03d-e811-90f0-0050568438e9/manual/area/5d31a250-3014-4e61-a610-1bf764ade50e/seat">
            Buy Tickets
          </a>
        </li>
      </ul>
    </>
  );
};

export default Detail;
