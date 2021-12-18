import React from 'react';
import './Player.css';

function player(props) {
  if (props.isWinner(props.player.score)) {
    props.setPlayerAWinner(props.playerIndex);
  }
  return (
    <div className="container">
      <h2 className="titleName">{props.player.name}</h2>
      <div
        className="turnPoint"
        style={{ display: props.isPlayerTurn ? 'block' : 'none' }}
      />
      <div className="totalScore">total Score: {props.player.score}</div>
      <div className="currentScore">current Score:{props.currentScore}</div>
    </div>
  );
}

export default player;
