import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import FormDiscPanel from './components/FormDiscriptorsPanel';
// import WarriorFormPanel from './components/WarriorForm';
import FaridyFakeDB from './components/FaridyFakeDB';

export class App extends Component {
  state = {
    warriors: [],
    todos: [],
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            this is <code>src/App2.js</code> buddy!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <FaridyFakeDB />
        {/* <FormDiscPanel />
        <WarriorFormPanel /> */}
        {/* {console.log('FaridyFakeDB.state:')}
        {console.log(FaridyFakeDB.getData())} */}
      </div>
    );
  }
}

export default App;
