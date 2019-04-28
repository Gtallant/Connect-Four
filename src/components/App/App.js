import React from 'react';
import './App.scss';
import Board from '../Board';
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
    const { screen } = this.state;
    return (
      <div className="App">
        {screen === "START" ? <StartScreen start={this.startGame} /> : ''}
        {screen === "GAME" ? <Board /> : ''}
      </div>
    );
  }
}

export default App;
