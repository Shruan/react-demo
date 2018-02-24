import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Input extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
    this.inputOnchange = this.inputOnchange.bind(this)
    this.inputOnSubmit = this.inputOnSubmit.bind(this)
  }

  inputOnchange (e) {
    this.setState({
      value: e.target.value
    })
  }
  inputOnSubmit (e) {
    const { value } = this.state
    if (e.keyCode === 13) {
      // console.log(value)
      this.props.onSubmitFuc(value)
      this.setState({
        value: ''
      })
    }
  }
  render () {
    return (
      <div>
        <input
          style={{ width: '100%', margin: '10px', border: '1px solid #eee' }}
          value={this.state.value}
          onChange={this.inputOnchange}
          onKeyUp={this.inputOnSubmit}
        />
        <p>{this.state.value}</p>
      </div>
    )
  }
}

Input.propTypes = {
  onSubmitFuc: PropTypes.func.isRequired
}

export default Input
