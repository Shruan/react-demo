import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { hashHistory } from 'react-router'

class Home extends Component {
  constructor (props, context) {
    super(props, context)
    // 方法的this指向绑定
    this.goDetail = this.goDetail.bind(this)
  }
  goDetail () {
    hashHistory.push('home/list')
  }
  render () {
    return (
      <div>
        <p onClick={this.goDetail}>显示列表</p>
        <div>{this.props.children}</div>
      </div>
    )
  }
}

Home.propTypes = {
  children: PropTypes.any.isRequired
}

export default Home
