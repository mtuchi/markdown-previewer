import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import './assets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Markdown Previewer</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>Markdown Syntax</code> on editor and see a live preview.
        </p>

        <div className="main-wrapper">
          <Wrapper />
        </div>
      </div>
    );
  }
}

export default App;
