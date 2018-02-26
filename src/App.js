import React, { Component } from 'react';
import Header from './components/Header'
import Hello from './containers/Hello'
import Todo from './containers/Todo'
import Home from './containers/Home'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo/>
        <Header/>
        <div>{this.props.children}</div>
        <Hello/>
      </div>
    );
  }
}

export default App;
