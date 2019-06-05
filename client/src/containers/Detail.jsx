import React from "react";
import Navigation from "../components/Navigation";
import Carousel from "../components/Carousel";
import CarouselData from "../components/CarouselData";

const Detail = () => {
  return (
    <>
      <Navigation />
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
