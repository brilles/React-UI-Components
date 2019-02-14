import React from "react";
import "./App.css";

import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: [7, 8, 9, 4, 5, 6, 1, 2, 3]
    };
  }
  render() {
    return (
      <div className="calculator-container">
        <CalculatorDisplay number="0" />
        <div className="input">
          <div className="grey-col">
            <div className="row-1">
              <ActionButton text="clear" />
            </div>
            <div className="row-2">
              <NumberButton text={this.state.text[0]} />
              <NumberButton text={this.state.text[1]} />
              <NumberButton text={this.state.text[2]} />
            </div>
            <div className="row-3">
              <NumberButton text={this.state.text[3]} />
              <NumberButton text={this.state.text[4]} />
              <NumberButton text={this.state.text[5]} />
            </div>
            <div className="row-4">
              <NumberButton text={this.state.text[6]} />
              <NumberButton text={this.state.text[7]} />
              <NumberButton text={this.state.text[8]} />
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
  }
}

export default App;
