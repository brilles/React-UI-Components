import React from "react";
import "./App.css";

import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";

const App = () => {
  return (
    <div className="calculator-container">
      <CalculatorDisplay number="0" />
      <div className="input">
        <div className="grey-col">
          <div className="row-1">
            <ActionButton text="clear" />
          </div>
          <div className="row-2">
            <NumberButton text="7" />
            <NumberButton text="8" />
            <NumberButton text="9" />
          </div>
          <div className="row-3">
            <NumberButton text="4" />
            <NumberButton text="5" />
            <NumberButton text="6" />
          </div>
          <div className="row-4">
            <NumberButton text="1" />
            <NumberButton text="2" />
            <NumberButton text="3" />
          </div>
          <div className="row-5">
            <ActionButton text="0" />
          </div>
        </div>
        <div className="red-col">
          <div className="operators">
            <ActionButton buttonStyle="red" text="÷" />
            <ActionButton buttonStyle="red" text="x" />
            <ActionButton buttonStyle="red" text="−" />
            <ActionButton buttonStyle="red" text="+" />
            <ActionButton buttonStyle="red" text="=" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
