import React, { Component } from 'react'
// import { render } from 'react-dom'
import Test from './subPage/test'

class Hello extends Component {
  render () {
    const aaa = 'aaa111'
    return (
      <div>
        1111
        <Test title="aaa"/>
        {aaa}
      </div>
    );
  }
}

export default Hello;
