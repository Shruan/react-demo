import React, { Component } from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from '../App'

import Home from '../pages/Home'
import Hello from '../pages/Hello'
import List from '../pages/List'
import Detail from '../pages/Detail'
import Todo from '../pages/Todo'
import StoreTest from '../pages/StoreTest'


class router extends Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <Route path='home' component={Home}>
            <Route path='list' component={List}></Route>
          </Route>
          <Route path='detail/:id' component={Detail}></Route>
          <Route path='hello' component={Hello}></Route>
          <Route path='todo' component={Todo}></Route>
          <Route path='storeTest' component={StoreTest}></Route>
        </Route>
      </Router>
    )
  }
}

export default router
