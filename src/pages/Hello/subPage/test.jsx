import React, { Component } from 'react'
import PropTypes from 'prop-types'

class test extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      testKey: '时间'
    }
  }
  render () {
    return (
      <div>test{this.props.title}, {this.state.testKey}</div>
    )
  }
}

test.propTypes = {
  title: PropTypes.string.isRequired
}

export default test
