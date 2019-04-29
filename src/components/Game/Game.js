import React from 'react';
import './Game.scss';
import Board from '../Board';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.placeToken = this.placeToken.bind(this);
    this.endTurn = this.endTurn.bind(this);
    this.checkWin = this.checkWin.bind(this);
    let playerColors;
    if (props.playerOneColor === 'red') {
      playerColors = ['red', 'black'];
    } else {
      playerColors = ['black', 'red'];
    }
    this.state = {
      currentPlayer: 0,
      playerColors: playerColors,
      maxTurnsRemaining: 41,
      gameData: [
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null]
      ],
      result: null,
    }
  }

  placeToken(col, row, value) {
    console.log(`---- placeToken (${col},${row}) ----`);
    this.setState(prevState => {
      let updatedGameData = prevState.gameData;
      updatedGameData[col][row] = value;
      return {
        gameData: updatedGameData,
        maxTurnsRemaining: prevState.maxTurnsRemaining - 1,
      };
    }, () => {
      const result = this.checkWin(col, row);
      console.log(`Game Result: ${result}`);
      this.setState(() => result, () => { this.endTurn()});
    });
  }

  endTurn() {
    console.log('---- endTurn ----');
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

  checkWin(col, row) {
    const {
      maxTurnsRemaining,
      currentPlayer,
      playerColors, 
    } = this.state;
    console.log('... checkWin ...');
    console.log(`Checking win condition at the ${row} space in column ${col}`);
    if (maxTurnsRemaining <= 0) {
      return 'Tie Game';
    } else {
      let horizontalSum = 0, // -
        verticalSum = 0, // |
        rtlSum = 0, // /
        ltrSum = 0; // \
      for (let i = -3; i <= 3; i++) {
          // Check Horizontal Win Condition
          horizontalSum = this.computeSum(col + i, row, playerColors[currentPlayer], horizontalSum);
          if (horizontalSum >= 4) {
            return `Player ${currentPlayer + 1} wins!`;
          }

          // Check Vertical Win Condition
          verticalSum = this.computeSum(col, row + i, playerColors[currentPlayer], verticalSum);
          if (verticalSum >= 4) {
            return `Player ${currentPlayer + 1} wins!`;
          }

          // Check Right to Left Diagonal Win Condition
          rtlSum = this.computeSum(col + i, row + i, playerColors[currentPlayer], rtlSum);
          if (rtlSum >= 4) {
            return `Player ${currentPlayer + 1} wins!`;
          }

          // Check Left to Right Diagonal Win Condition
          ltrSum = this.computeSum(col + i, row - i, playerColors[currentPlayer], ltrSum);
          if (ltrSum >= 4) {
            return `Player ${currentPlayer + 1} wins!`;
          }
      }
    }
    return false;
  }

  computeSum(col, row, val, sum) {
    const { gameData } = this.state;
    if ((col >= 0 && col <= 6) && (row >= 0 && row <= 5)) {
      if (gameData[col][row] === val) {
        console.log(sum + 1);
        return sum + 1;
      }
      else {
        return 0;
      }
    }
    return sum;
  }

  render() {
    console.log('__________ RENDER __________');
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
      />
    </div>
  );
  }
}

export default Game;
