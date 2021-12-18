import React from 'react';
import './Dice.css';

function Dice(props) {
  return <img src={`${props.cubeResult}`} />;
}

export default Dice;
