import React, { Component } from 'react'
import { hashHistory } from 'react-router'

class List extends Component {
  constructor (props, context) {
    super(props, context)
    // 方法的this指向绑定
    this.goDetail = this.goDetail.bind(this)
  }
  goDetail (id) {
    hashHistory.push(`/detail/${id}`)
  }
  render () {
    return (
      <div>
        <button onClick={this.goDetail.bind(this, 1)}>111</button>
        <button onClick={this.goDetail.bind(this, 2)}>222</button>
        <button onClick={this.goDetail.bind(this, 3)}>333</button>
      </div>
    )
  }
}

export default List
