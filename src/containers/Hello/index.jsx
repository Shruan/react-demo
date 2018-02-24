import React, { Component } from 'react'
// import { render } from 'react-dom'
import Test from './subPage/test'

class Hello extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      now: Date.now()
    }
    // 方法的this指向绑定
    this.updateDate = this.updateDate.bind(this)
  }
  updateDate () {
    this.setState({
      now: Date.now()
    })
  }
  render () {
    const aaa = 'aaa111'
    return (
      <div>
        1111
        <Test title="aaa" />
        {aaa}
        <p>当前时间戳：{this.state.now}</p>
        <button onClick={this.updateDate}>update</button>
      </div>
    )
  }
}

export default Hello
