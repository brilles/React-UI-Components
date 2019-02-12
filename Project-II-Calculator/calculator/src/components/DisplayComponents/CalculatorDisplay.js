import React from "react";
import "./Display.css";

const CalculatorDisplay = props => {
  return (
    <div className="calculator-display">
      <div className="num">{props.number}</div>
    </div>
  );
};

export default CalculatorDisplay;
