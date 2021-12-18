import React from 'react';
import './RollDice.css';

function RollDice(props) {
  return (
    <div className="rollDice" onClick={props.onClick}>
      Roll
    </div>
  );
}

export default RollDice;
