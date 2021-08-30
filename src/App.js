import './App.css';
import React, { useState, useEffect } from 'react';
import Slider from 'react-input-slider';

const App = () => {
  const [tip, setTip] = useState(0);
  const [bill, setBill] = useState(0);
  const [tipPercent, setTipPercent] = useState(0);
  const [total, setTotal] = useState(0);
  const [people, setPeople] = useState(1);
  const [totalPerPerson, setTotalPerPerson] = useState(0);

  useEffect(() => {
    const tip = bill * (tipPercent / 100);
    const total = bill + tip;
    const totalPerPerson = total / people;
    setTip(tip.toFixed(2));
    setTotal(total.toFixed(2));
    setTotalPerPerson(totalPerPerson.toFixed(2));
  }, [bill, tipPercent, people]);


  return (
    <div className="App">
      <div className="App-inner">
        <div className="App-header">
          <div className='display'>
            <p>Total</p>
            <p>{total}</p>
          </div>
          <div className='display'>
            <p>Tip</p>
            <p>{tip}</p>
          </div>
          <div className='display'>
            <p>Person</p>
            <p>{totalPerPerson}</p>
          </div>
        </div>
        <div className="App-body">
          <div className="App-inputs">
            <div className="App-input">
              <input type="number" placeholder='Bill' onChange={(e) => e.target.value >= 0 ? setBill(parseFloat(e.target.value)): setBill(0)} />
            </div>
            <div className="App-input">
              <p>Tip: {tipPercent}%</p>
              <Slider
                axis="x"
                x={tipPercent}
                xmin={0}
                xmax={100}
                onChange={({ x }) => setTipPercent(x)}
              />
            </div>
            <div className="App-input">
              <p>People: {people}</p>
              <Slider
                axis="x"
                x={people}
                xmin={1}
                xmax={100}
                onChange={({ x }) => setPeople(x)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
