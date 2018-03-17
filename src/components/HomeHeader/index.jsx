import React, { Component } from 'react'
import PropTypes from 'prop-types'
import logo from './logo.svg'
import './style.less'

class HomeHeader extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <header className="sy__flex">
        <div>
          {this.props.city}
          <i className="icon-angle-down" />
        </div>
        <div>
          <i className="icon-search" />
          <input />
        </div>
        <div><i className="icon-user" /></div>
      </header>
    )
  }
}

HomeHeader.propTypes = {
  city: PropTypes.string.isRequired
}

export default HomeHeader
