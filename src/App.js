import React from 'react';
import logo from './logo.svg';
import './App.css';

import FirstComponentFaridy from './components/FirstComponentFaridy';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <FirstComponentFaridy />
      </header>
    </div>
  );
}

export default App;
