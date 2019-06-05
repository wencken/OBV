import React from "react";
import PageHeader from "../components/PageHeader";
import Map from "../components/Map";

const Information = () => {
  return (
    <>
      <PageHeader title={`Huh?`} />
      <h2>Laat jezelf aan opera horen en opera zal antwoorden.</h2>
      <p>
        De Derde Boodschap toont aan dat opera en ballet kunnen ontroeren. Deze
        vorm van kunst omvat veel verhalen met een enorme lading aan emoties.
        Wat zou u ervan vinden om uw verhaal te delen met{" "}
        <a href="https://www.operaballet.be/nl">Opera Ballet Vlaanderen?</a>
      </p>
      <Map />
    </>
  );
};

export default Information;
