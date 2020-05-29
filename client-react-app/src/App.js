import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// import FormDiscPanel from './components/FormDiscriptorsPanel';
// import WarriorFormPanel from './components/WarriorForm';
import FaridyFakeDB from './components/FaridyFakeDB';

import FetcherComponent from './components/FetcherComponent';
import AxiosComponent1 from './components/axios-components/Axios-component-1';

export class App extends Component {
  state = {
    warriors: [],
    todos: [],
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
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
        <FetcherComponent />
        <AxiosComponent1 />
      </div>
    );
  }
}

export default App;
