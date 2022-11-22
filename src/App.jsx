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
          <h1>
            Den CO2 det udleder svarer til {socialMedia} Liter vand om dagen
          </h1>
          <h2>
            Hvilket svarer til {monthlyConsumation.toFixed(0)} liter vand om
            måneden.
          </h2>
          <h3>
            Det er det samme som {cupsOfCoffeeinAYear.toFixed(0)} kopper kaffe
            om måneden.
          </h3>
          <h2>... Og {yearlyConsumation.toFixed(0)} liter vand om året</h2>
          <h3>Det er det samme som {bathtubsInAYear.toFixed(0)} karbade.</h3>
          <button onClick={setFalse}>Gaa tilbage</button>
        </div>
      ) : (
        <>
          <h2>Overskrift her</h2>
          <p>Information + Guide her</p>
          <form>
            <div className="form-control">
              <label htmlFor="social-media">Sociale Medie</label>
              <select onChange={handleCalc} ref={selectMedia}>
                <option value="chose">Vælg medie</option>
                <option value="7.2">Facebook</option>
                <option value="6">Twitter</option>
                <option value="13.8">Reddit</option>
              </select>
            </div>
            <div className="form-control">
              <label htmlFor="input-number">Antal timer</label>
              <input
                required
                type="number"
                name="number"
                id="input-number"
                ref={inputField}
              />
              <button onClick={submit}>Udregn</button>
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
