import React from 'react';
import './App.scss';
import Board from '../Board';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Connect Four</h1>
      </header>
      <Board />
    </div>
  );
}

export default App;
