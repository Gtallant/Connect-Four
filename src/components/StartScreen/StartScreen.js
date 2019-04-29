import React from 'react';
import './StartScreen.scss';

class Board extends React.Component {
  render() {
    const { start } = this.props;
  return (
    <div className="start">
      <h1 className="start__title"><img className="start__title__image" src="/assets/logo.png" alt="Connect 4" /></h1>
      <p className="start__directions">Player 1 <br />pick a color to begin</p>
      <div className="start__pick-color">
        <button onClick={() => start('red')} className="start__pick-color__btn red">Red</button>
        <button onClick={() => start('black')} className="start__pick-color__btn black">Black</button>
      </div>
    </div>
  );
  }
}

export default Board;
