import React, { Component } from 'react';
import Hello from './containers/Hello'
import Header from './components/Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Hello/>
      </div>
    );
  }
}

export default App;
