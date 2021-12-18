import React from 'react';
import './GameGoalScore.css';

function GameGoalScore(props) {
  return <div className="gameGoalScore">{props.goal}</div>;
}

export default GameGoalScore;
