import React from 'react';
import './App.scss';
import Game from '../Game';
import StartScreen from '../StartScreen';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.startGame = this.startGame.bind(this);
    this.endGame = this.endGame.bind(this);
    this.state = {
      screen: "MENU", // MENU | GAME
      playerOneColor: null,
    }
  }

  startGame(playerOneColor) {
    this.setState({
      screen: "GAME",
      playerOneColor: playerOneColor,
    });
  }

  endGame(result) {
    alert(result);
    this.setState({
      screen: "MENU",
    });
  }

  render() {
    const { screen, playerOneColor } = this.state;
    return (
      <div className="App">
        {screen === "MENU" ? <StartScreen start={this.startGame} /> : ''}
        {screen === "GAME" ? <Game playerOneColor={playerOneColor} end={this.endGame} /> : ''}
      </div>
    );
  }
}

export default App;
