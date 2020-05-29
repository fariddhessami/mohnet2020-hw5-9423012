import React, { Component } from 'react';
import FaridyFakeDB from './components/FaridyFakeDB';

import FetcherComponent from './components/FetcherComponent';
import AxiosComponent1 from './components/axios-components/Axios-component-1';

import MiniDrawerFaridy1 from './components/MiniDrawerFaridy1';
import FormsPanel from './components/FormsPanel';

import { Helmet } from 'react-helmet';

export class App extends Component {
  state = {
    warriors: [],
    todos: [],
  };
  render() {
    return (
      <div className="App">
        {/* <head>
          <script src="https://maps.googleapis.com/maps/api/js?&v=3.exp&libraries=geometry,drawing,places"></script>
        </head> */}

        <Helmet>
          <script src="https://maps.googleapis.com/maps/api/js?&v=3.exp&libraries=geometry,drawing,places"></script>
        </Helmet>
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
        {/* <FetcherComponent />
        <AxiosComponent1 /> */}
        {/* ehem
        <MiniDrawerFaridy1 /> */}
        <FormsPanel />
      </div>
    );
  }
}

export default App;
