import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { hashHistory } from 'react-router'
import HomeHeader from '../components/HomeHeader'
import HomeBanner from '../components/HomeBanner'

class Home extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      initDone: false
    }
    // 方法的this指向绑定
    this.goDetail = this.goDetail.bind(this)
  }
  componentDidMount () {
    setTimeout(() => {
      this.setState({
        initDone: true
      })
    }, 1000)
  }
  goDetail () {
    // hashHistory.push('home/list')
  }
  render () {
    return (
      <div>
        <HomeHeader city={this.props.userInfo.city} />
        <HomeBanner />
        <p onClick={this.goDetail}>显示列表</p>
        <div>
          {
            this.state.initDone ? this.props.children : <div>加载中...</div>
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  console.log(state.userInfo)
  return {
    userInfo: state.userInfo
  }
}
function mapDispatchToProps (dispatch) {
  return {}
}

Home.propTypes = {
  children: PropTypes.any.isRequired,
  userInfo: PropTypes.any.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
