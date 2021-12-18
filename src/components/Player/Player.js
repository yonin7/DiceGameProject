import React from 'react';
import './Player.css';

let name = '';
function player(props) {
  if (props.isWinner(props.currentScore)) {
    setPlayerAWinner(props.playerIndex);
  }
  return (
    <div>
      <h2>{name}</h2>
      <div
        className="turnPoint"
        style={{ display: props.isPlayerTurn ? 'block' : 'none' }}
      />
      <div className="totalScore" />
      <div className="currentScore">{props.currentScore}</div>
    </div>
  );
}

export default player;
