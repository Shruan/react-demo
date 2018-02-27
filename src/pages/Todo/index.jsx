import React, { Component } from 'react'
import Input from '../../components/Input'

class Todo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: []
    }
    this.onSubmitFuc = this.onSubmitFuc.bind(this)
    this.deleteList = this.deleteList.bind(this)
  }
  onSubmitFuc (value) {
    this.setState({
      list: this.state.list.concat({
        label: value,
        id: this.state.list.length
      })
    })
  }
  deleteList (id) {
    this.setState({
      list: this.state.list.filter(item => item.id !== id)
    })
  }
  render () {
    return (
      <div>
        <Input onSubmitFuc={this.onSubmitFuc} />
        <ul>
          {
            this.state.list.length === 0 ? '' :
            this.state.list.map((item) => (
              <li
                key={item.id}
                onClick={this.deleteList.bind(this, item.id)}
              >
                {item.label}
              </li>))
          }
        </ul>
      </div>
    )
  }
}

export default Todo
