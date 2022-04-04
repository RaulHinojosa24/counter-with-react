import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [counterValue, setCounterValue] = useState(0);
  const [counterColor, setCounterColor] = useState("#333333");

  function updateCounter(value) {
    setCounterValue(counterValue + value);
  }

  useEffect(updateCounterColor, [counterValue]);

  function updateCounterColor() {
    if (counterValue == 0) {
      setCounterColor("#333333");
    } else if (counterValue < 0) {
      setCounterColor("red");
    } else {
      setCounterColor("green");
    }
  }

  return (
    <div className="container">
      <div className="row max-height align-items-center">
        <div className="col-10 mx-auto col-md-6 text-center main-container p-5">
          <h1 className="text-uppercase">counter</h1>
          <Counter value={counterValue} color={counterColor} />
          <div className="btn-container d-flex justify-content-around flex-wrap">
            <Button counterAction={() => updateCounter(-1)} text="Lower count" />
            <Button counterAction={() => updateCounter(1)} text="Add count" />
          </div>
        </div>
      </div>
    </div>
  );
}

function CounterBox() {

}

function Button({ text, counterAction }) {
  return (
    <button
      class="btn counterBtn prevBtn text-uppercase m-2"
      onClick={counterAction}>
      {text}
    </button>
  );
}

function Counter({ value, color }) {
  return (
    <h1
      id="counter"
      style={{ "color": color }}
    >{value}
    </h1>
  );
}

export default App;