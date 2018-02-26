import React, { Component } from 'react'
import PropType from 'prop-types'
import { hashHistory } from 'react-router'

class Detail extends Component {
  constructor (props) {
    super(props)
    this.goBack = this.goBack.bind(this)
  }
  goBack () {
    hashHistory.go(-1)
  }
  render () {
    return (
      <div>
        <div>{this.props.params.id}</div>
        <button onClick={this.goBack}>返回</button>
      </div>
    )
  }
}

Detail.propTypes = {
  params: PropType.any.isRequired
}

export default Detail
