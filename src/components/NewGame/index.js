import React from 'react';
import './NewGame.css';

function NewGameButton(props) {
  return (
    <div className="newGameButton" onClick={props.onClick}>
      New Game
    </div>
  );
}

export default NewGameButton;
