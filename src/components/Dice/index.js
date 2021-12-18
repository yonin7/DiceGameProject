import React from 'react';
import './Dice.css';

function Dice(props) {
  return (
    <img
      className="dice"
      alt=""
      src={`dice-${props.cubeResult}.png`}
      style={{ display: props.cubeResult === 0 ? 'none' : 'block' }}
    />
  );
}

export default Dice;
