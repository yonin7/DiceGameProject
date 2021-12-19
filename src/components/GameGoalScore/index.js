import React from 'react';
import './GameGoalScore.css';

function GameGoalScore(props) {
  return <div className="gameGoalScore">Goal: {props.goal}</div>;
}

export default GameGoalScore;
