import React, { Component } from 'react'
import { hashHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as userInfoActionCreators from '../../store/actions/userInfo'

class List extends Component {
  constructor (props, context) {
    super(props, context)
    // 方法的this指向绑定
    this.state = {
      name: ''
    }
    this.goDetail = this.goDetail.bind(this)
  }
  componentDidMount () {
    this.setState({
      name: 'xxx'
    })
    this.props.userInfoActions.updateCityName({
      city: '厦门'
    })
    setTimeout(() => {
      console.log(this.state.name)
    })
  }
  goDetail (id) {
    hashHistory.push(`/detail/${id}`)
  }
  render () {
    return (
      <div>
        {
          // <button onClick={this.goDetail.bind(this, 1)}>111</button>
          // <button onClick={this.goDetail.bind(this, 2)}>222</button>
          // <button onClick={this.goDetail.bind(this, 3)}>333</button>
        }
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
  }
}

function mapDispatchToProps (dispatch) {
  return {
    userInfoActions: bindActionCreators(userInfoActionCreators, dispatch)
  }
}

List.propTypes = {
  userInfoActions: PropTypes.any.isRequired
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
