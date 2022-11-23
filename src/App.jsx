import { useState, useRef, useEffect } from "react";
import "./App.css";
import Results from "./components/Results";
import Tester from "./components/Tester";

function App() {
  const [socialMedia, setSocialMedia] = useState(false);
  const [calculateWater, setCalculateWater] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputField = useRef(null);
  const selectMedia = useRef(null);
  const monthlyConsumation = socialMedia * 30;
  const yearlyConsumation = socialMedia * 365;
  const bathtubsInAYear = yearlyConsumation / 158.987295;
  const cupsOfCoffeeinAYear = monthlyConsumation / 0.25;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  function setFalse() {
    setCalculateWater(false);
  }
  function submit(e) {
    e.preventDefault();
    setSocialMedia(selectMedia.current.value * inputField.current.value);
    setCalculateWater(true);
  }

  return (
    <div className="App">
      {calculateWater ? (
        <div>
          <h1>The CO2 it emits is equal to {socialMedia}L water a day.</h1>
          <h2>
            Which is equal to {monthlyConsumation.toFixed(0)}L water a month.
          </h2>
          <h3>
            Which is the same as {cupsOfCoffeeinAYear.toFixed(0)} &#9749; cups
            of coffee a month.
          </h3>
          <h2>...And {yearlyConsumation.toFixed(0)}L water a year</h2>
          <h3>
            Which is the same as filling up {bathtubsInAYear.toFixed(0)}{" "}
            bathtubs.
          </h3>
          <button onClick={setFalse}>Go back</button>
        </div>
      ) : (
        <>
          <h2>Overskrift her</h2>
          <p>
            Have you ever wondered how much CO2 your social media emits? Well
            then, try out our social media CO2 usage calculator and see how much
            your social media usage emits. We will put it in perspective to it's
            easier to understand.
          </p>
          <form>
            <div className="form-control">
              <label htmlFor="social-media">Social Media</label>
              <select onChange={handleCalc} ref={selectMedia}>
                <option value="chose">Select media</option>
                <option value="7.2">Facebook</option>
                <option value="6">Twitter</option>
                <option value="13.8">Reddit</option>
              </select>
            </div>
            <div className="form-control">
              <label htmlFor="input-number">Hours</label>
              <input
                required
                type="number"
                name="number"
                id="input-number"
                ref={inputField}
              />
              <button onClick={submit}>Calculate your CO2 usage.</button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

export default App;

// const testerTo = useRef(null);
// testerTo.value = parseInt();

function handleCalc(e) {
  /* const idk = e.target.value;

    switch (idk) {
      case "0.46":
        return console.log(tester.current.value);

      case "2":
        return testerTo.current.value;

      default:
        return console.log(22);
    }*/
}
