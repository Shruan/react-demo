import React, { Component } from 'react'
// import { render } from 'react-dom'
import logo from './logo.svg'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'Welcome to React'
    }
  }
  render () {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.title}</h1>
        </header>
        {
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        }
      </div>
    )
  }
}

export default Header
