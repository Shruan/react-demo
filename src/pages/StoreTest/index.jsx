import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActions from '../../store/actions/userInfo'

class StoreTest extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {
        name: '',
        city: ''
      }
    }
    this.submit = this.submit.bind(this)
    this.change = this.change.bind(this)
  }
  inputOnchange (label, e) {
    if (label === 'name') {
      this.setState({
        user: {
          name: e.target.value,
          city: this.state.user.city
        }
      })
    } else if (label === 'city') {
      this.setState({
        user: {
          name: this.state.user.name,
          city: e.target.value
        }
      })
    }
  }
  submit () {
    // console.log(this.props.userInfo)
    this.props.userInfoActions.login(this.state.user)
    // console.log(this.props.userInfo)
  }
  change () {
    this.props.userInfoActions.updateCityName({ num: '222' })
  }
  render () {
    return (
      <div>
        <input value={this.state.user.name} onChange={this.inputOnchange.bind(this, 'name')} />
        <input value={this.state.user.city} onChange={this.inputOnchange.bind(this, 'city')} />
        <button onClick={this.submit}>submit</button>
        <div>用户：{this.props.userInfo.name}</div>
        <div>城市：{this.props.userInfo.city}</div>
        <button onClick={this.change}>城市：{this.props.userInfo.num}</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    userInfo: state.userInfo
  }
}

function mapDispatchToProps (dispatch) {
  return {
    userInfoActions: bindActionCreators(userInfoActions, dispatch)
  }
}

StoreTest.propTypes = {
  userInfoActions: PropTypes.any.isRequired,
  userInfo: PropTypes.any.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoreTest)
