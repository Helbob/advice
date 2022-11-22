import React from "react";
import { useState, useRef } from "react";
function Results(props) {
  const [socialMedia, setSocialMedia] = useState(false);
  console.log(socialMedia);
  const [calculateWater, setCalculateWater] = useState(false);
  const selectMedia = useRef(null);
  const monthlyConsumation = socialMedia * 30;
  const yearlyConsumation = socialMedia * 365;
  const bathtubsInAYear = yearlyConsumation / 158.987295;
  const cupsOfCoffeeinAYear = monthlyConsumation / 0.25;
  console.log(props);
  function setFalse() {
    setCalculateWater(false);
  }
  function submit(e) {
    e.preventDefault();
    setSocialMedia(selectMedia.current.value * props.current.value);
    setCalculateWater(true);
  }
  return (
    <div>
      <h1>Den CO2 det udleder svarer til {socialMedia} Liter vand om dagen</h1>
      <h2>
        Hvilket svarer til {monthlyConsumation.toFixed(0)} liter vand om
        måneden.
      </h2>
      <h3>
        Det er det samme som {cupsOfCoffeeinAYear.toFixed(0)} kopper kaffe om
        måneden.
      </h3>
      <h2>... Og {yearlyConsumation.toFixed(0)} liter vand om året</h2>
      <h3>Det er det samme som {bathtubsInAYear.toFixed(0)} karbade.</h3>
    </div>
  );
}

export default Results;
