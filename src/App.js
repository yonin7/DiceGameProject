import React from 'react';
import Player from './components/Player/Player';
import Dice from './components/Dice';
import RollDiceBTN from './components/RollDice';
import HoldScoreBTN from './components/Hold/Hold';
import GameGoalScore from './components/GameGoalScore';
import NewGameBTN from './components/NewGame';

import './App.css';

class App extends React.Component {
  state = {
    currentTurn: 0,
    currentScore: 0,
    cubeResult1: 0,
    cubeResult2: 0,
    players: [
      { name: 'player1', score: 0 },
      { name: 'player2', score: 0 },
    ],
    imgSrc: '',
    goal: 100,
  };
  calcularIsWinner = (totalScore) => {
    return totalScore >= this.state.goal;
  };
  setPlayerAWinner = (playerIndex) => {
    const winnerPlayer = this.state.players.map((player, index) =>
      index === playerIndex ? { ...player, name: 'Winner' } : player
    );
    this.setState({
      ...this.state,
      players: winnerPlayer,
    });
  };

  clickHold = () => {
    const playerScore = this.state.currentScore;
    const newPlayers = this.state.players.map((player, index) =>
      index === this.state.currentTurn
        ? { ...player, score: player.score + playerScore }
        : player
    );
    const currentTurn = this.state.currentTurn === 0 ? 1 : 0;
    this.setState({
      ...this.state,
      currentTurn,
      currentScore: 0,
      players: newPlayers,
    });
  };

  clickRoll = () => {
    const cubeResult1 = Math.floor(Math.random() * 6) + 1;
    const cubeResult2 = Math.floor(Math.random() * 6) + 1;
    this.setState({
      ...this.state,
      currentScore: this.state.currentScore + cubeResult1 + cubeResult2,
      cubeResult1,
      cubeResult2,
    });
  };
  restartGame = () => {
    this.setState({
      currentTurn: 0,
      currentScore: 0,
      cubeResult1: 0,
      cubeResult2: 0,
      players: [
        { name: 'player1', score: 0 },
        { name: 'player2', score: 0 },
      ],
      imgSrc: '',
      goal: 100,
    });
  };
  render() {
    return (
      <div className="gameBord">
        <NewGameBTN onClick={this.restartGame} />
        <div className="diceContainer">
          <Dice cubeResult={this.state.cubeResult1} />
          <Dice cubeResult={this.state.cubeResult2} />
        </div>
        <div className="playersContainer">
          {this.state.players.map((player, index) => (
            <Player
              key={`${player.name}_${index}`}
              player={player}
              isPlayerTurn={this.state.currentTurn === index}
              isWinner={this.calcularIsWinner}
              playerIndex={index}
              setPlayerAWinner={this.setPlayerAWinner}
              currentScore={
                this.state.currentTurn === index && this.state.currentScore
              }
            />
          ))}
        </div>

        <div className="gameActions">
          <RollDiceBTN onClick={this.clickRoll} />
          <HoldScoreBTN onClick={this.clickHold} />
        </div>
        <GameGoalScore goal={this.state.goal} />
      </div>
    );
  }
}

export default App;
