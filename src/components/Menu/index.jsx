import React, { Component } from 'react'
import { hashHistory } from 'react-router'

class Menu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menuList: [
        {
          id: 1,
          name: '路由测试',
          url: '/home/list'
        },
        {
          id: 2,
          name: '父子组件参数传递',
          url: '/hello'
        },
        {
          id: 3,
          name: '父子组件交互',
          url: '/todo'
        }
      ]
    }
  }
  pathTo (url) {
    hashHistory.push(url)
  }
  render () {
    return (
      <ul>
        {
          this.state.menuList.map((item) => (
            <li
              key={item.id}
              onClick={this.pathTo.bind(this, item.url)}
            >
              {item.name}
            </li>))
        }
      </ul>
    )
  }
}

export default Menu
