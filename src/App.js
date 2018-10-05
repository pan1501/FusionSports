import React, { Component } from 'react';
import './App.css';
import $ from "jquery";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Headercontent from './Components/Header-content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" id="header">
          <Headercontent/>
        </header>
      </div>
    );
  }
}

export default App;
