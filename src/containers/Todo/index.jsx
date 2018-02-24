import React, { Component } from 'react'
import Input from '../../components/Input'

class Todo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: []
    }
    this.onSubmitFuc = this.onSubmitFuc.bind(this)
  }
  onSubmitFuc (value) {
    this.setState({
      list: this.state.list.concat(value)
    })
  }
  render () {
    return (
      <div>
        <Input onSubmitFuc={this.onSubmitFuc} />
        {
          this.state.list.length === 0 ? '' :
          this.state.list.map((item, index) => <p keys={index}>{item}</p>)
        }
      </div>
    )
  }
}

export default Todo
