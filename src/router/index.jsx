import React, { Component } from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from '../App'
import Home from '../containers/Home'
import List from '../containers/List'
import Detail from '../containers/Detail'


class router extends Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <Route path='home' component={Home}>
            <Route path='list' component={List}></Route>
          </Route>
          <Route path='detail/:id' component={Detail}></Route>
        </Route>
      </Router>
    )
  }
}

export default router
