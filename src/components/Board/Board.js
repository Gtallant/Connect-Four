import React from 'react';
import './Board.scss';
import Column from '../Column';

function Board(props) {
  const {
    currentPlayer,
    playerColors,
    gameData,
    placeToken,
    endTurn,
  } = props;
  return (
    <div className="board">
      {gameData.map((col, i) => (
        <Column 
          key={i}
          index={i}
          currentPlayer={currentPlayer} 
          playerColors={playerColors} 
          columnData={col}
          placeToken={placeToken}
          endTurn={endTurn}
        />
      ))}
    </div>
  );
}

export default Board;
