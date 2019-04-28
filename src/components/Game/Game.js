import React from 'react';
import './Game.scss';
import Board from '../Board';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.placeToken = this.placeToken.bind(this);
    this.endTurn = this.endTurn.bind(this);
    let playerColors;
    if (props.playerOneColor === 'red') {
      playerColors = ['red', 'black'];
    } else {
      playerColors = ['black', 'red'];
    }
    this.state = {
      currentPlayer: 0,
      playerColors: playerColors,
      gameData: [
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null]
      ],
    }
  }

  placeToken(col, row, value) {
    this.setState(prevState => {
      let updatedGameData = prevState.gameData;
      updatedGameData[col][row] = value;
      return { gameData: updatedGameData };
    });
  }

  endTurn() {
    this.setState(prevState => {
      if (prevState.currentPlayer === 0) {
        return {
          currentPlayer: 1
        };
      } else {
        return {
          currentPlayer: 0
        };
      }
    });
  }

  render() {
    const {
      currentPlayer,
      playerColors,
      gameData,
    } = this.state;
  return (
    <div className="game">
      <div className="game__controls">
        <h1 className={`game__controls__current-player ${playerColors[currentPlayer]}`}>Player {currentPlayer + 1}</h1>
        <p className="game__controls__label">place a token.</p>
      </div>
      <Board 
        gameData={gameData}
        playerColors={playerColors}
        currentPlayer={currentPlayer}
        placeToken={this.placeToken}
        endTurn={this.endTurn}
      />
    </div>
  );
  }
}

export default Game;
