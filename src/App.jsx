import { useState, useRef } from "react";
import "./App.css";
import Results from "./components/Results";
import Tester from "./components/Tester";

function App() {
  const [socialMedia, setSocialMedia] = useState(false);
  const [calculateWater, setCalculateWater] = useState(false);
  const inputField = useRef(null);
  const selectMedia = useRef(null);

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
        <Results props={socialMedia}></Results>
      ) : (
        <form onSubmit={submit}>
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
