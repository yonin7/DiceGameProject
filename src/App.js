import React from 'react';
import Player from './components/Player/Player';
import Dice from './components/Dice';
import RollDiceBTN from './components/RollDice';
import HoldScoreBTN from './components/Hold/Hold';
import FinalScoreInput from './components/Input/Input';

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

  render() {
    const clickHold = () => {
      const playerScore = this.state.cubeResult1 + this.state.cubeResult2;
      const newPlayers = this.state.players.map((player, index) =>
        index === this.state.currentTurn
          ? { ...player, score: playerScore }
          : player
      );
      this.setState({ ...this.state, players: newPlayers });

      if (this.state.currentTurn != this.state.players.length)
        this.setState({ ...this.state, currentTurn: this.state.currentTurn++ });
      this.setState({ ...this.state, currentTurn: 0 });
    };
    const calcularIsWinner = (totalScore, name) => {
      name = this.players.name;
      return totalScore >= this.state.goal;
    };
    const setPlayerAWinner = (playerIndex) => {
      this.state.players[playerIndex].name = 'Winner';
    };
    const calcularScore = () => {
      return this.setState({
        ...this.state,
        currentScore: this.state.currentScore + this.state.diceScore,
      });
    };
    const clickRoll = () => {
      const cubeResult1 = Math.floor(Math.random() * 6) + 1;
      const cubeResult2 = Math.floor(Math.random() * 6) + 1;
      this.setState({ ...this.state, cubeResult1, cubeResult2 });
    };
    const restartGame = () => {
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
    return (
      <div className="App">
        <NewGameBTN onClick={restartGame} />
        {this.state.players.map((player, index) => (
          <Player
            name={player.name}
            isPlayerTurn={this.state.currentTurn === index}
            isWinner={calcularIsWinner}
            currentScore={calcularScore}
            playerIndex={index}
            setPlayerAWinner={setPlayerAWinner}
          />
        ))}
        <Dice cubeResult={this.state.cubeResult1} />
        <Dice cubeResult={this.state.cubeResult2} />
        <div className="gameActions">
          <RollDiceBTN onClick={clickRoll} />
          <HoldScoreBTN onClick={clickHold} />
        </div>
        <FinalScoreInput />
        {this.state.goal}
      </div>
    );
  }
}

export default App;
