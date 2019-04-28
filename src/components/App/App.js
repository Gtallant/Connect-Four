import React from 'react';
import './App.scss';
import Game from '../Game';
import StartScreen from '../StartScreen';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.startGame = this.startGame.bind(this);
    this.state = {
      screen: "START", // START | GAME | END
      playerOneColor: null,
    }
  }

  startGame(playerOneColor) {
    this.setState({
      screen: "GAME",
      playerOneColor: playerOneColor,
    });
  }

  render() {
    const { screen, playerOneColor } = this.state;
    return (
      <div className="App">
        {screen === "START" ? <StartScreen start={this.startGame} /> : ''}
        {screen === "GAME" ? <Game playerOneColor={playerOneColor} /> : ''}
      </div>
    );
  }
}

export default App;
