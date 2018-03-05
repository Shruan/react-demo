import React, { Component } from 'react'
// import { render } from 'react-dom'
import logo from './logo.svg'
import './style.less'

class HomeHeader extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'Welcome to React'
    }
  }
  render () {
    return (
      <header className="sy__flex">
        <div>厦门</div>
        <div><input /></div>
        <div>{this.state.title}</div>
      </header>
    )
  }
}

export default HomeHeader
