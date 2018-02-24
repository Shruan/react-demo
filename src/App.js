import React, { Component } from 'react';
import Hello from './containers/Hello'
import Todo from './containers/Todo'
import Header from './components/Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo/>
        <Header/>
        <Hello/>
      </div>
    );
  }
}

export default App;
