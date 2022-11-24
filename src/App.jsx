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
        <div className="container">
          <div className="phone1"></div>
          <div className="header">
            <h1>You use {socialMedia.toFixed(1)} litres of water per day!</h1>
          </div>
          <div className="text">
            <div className="example">
              <h2>
                In a month it amounts to {monthlyConsumation.toFixed(0)} litres{" "}
              </h2>
              <h1>&#9749;</h1>
              <h3>
                ... which is just about the same as{" "}
                {cupsOfCoffeeinAYear.toFixed(0)} cups of coffee.
              </h3>
            </div>
            <div className="example">
              <h2>
                In a year the amount is {yearlyConsumation.toFixed(0)} litres
              </h2>
              <h1>🛁</h1>
              <h3>
                ... or the equivalent of {bathtubsInAYear.toFixed(0)} filled
                bathtubs!
              </h3>
            </div>
            <button onClick={setFalse}>Try again</button>
          </div>
          <div className="phone2"></div>
        </div>
      ) : (
        <div className="container">
          <div className="phone1"></div>
          <div className="header">
            <h1>Overskrift her</h1>
            <h3>
              Have you ever wondered how much CO2 your social media emits? Well
              then, try out our social media CO2 usage calculator and see how
              much your social media usage emits. We will put it in perspective
              so it's easier to understand.
              <br />
              Simply choose your prefered social media and put in the hours you
              spent on it on a daily basis.
            </h3>
          </div>
          <form className="text">
            <div className="form-control">
              <label htmlFor="social-media">
                What is your preffered social media?
              </label>
              <select onChange={handleCalc} ref={selectMedia}>
                <option value="chose">Choose an option...</option>
                <option value="7.2">Facebook</option>
                <option value="6">Twitter</option>
                <option value="13.8">Reddit</option>
                <option value="7.2">Instragram</option>
                <option value="4.8">Youtube</option>
                <option value="5.4">Twitch</option>
                <option value="6">LinkedIn</option>
                <option value="7.2">Snapchat</option>
                <option value="16.2">TikTok</option>
              </select>
            </div>
            <div className="form-control">
              <label htmlFor="input-number">
                How many hours a day do you spend on it?
              </label>
              <input
                required
                type="number"
                name="number"
                id="input-number"
                ref={inputField}
                placeholder="Choose hours..."
              />
              <button onClick={submit}>Show results</button>
            </div>
          </form>
          <div className="phone2"></div>
        </div>
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
