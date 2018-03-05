import React, { Component } from 'react';
import Menu from './components/Menu'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu/>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default App;
