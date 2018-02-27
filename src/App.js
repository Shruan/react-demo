import React, { Component } from 'react';
import Header from './components/Header'
import Menu from './components/Menu'
import Home from './pages/Home'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu/>
        <Header/>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default App;
