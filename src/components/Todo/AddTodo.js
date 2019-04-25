import React, { Component } from 'react'

export default class AddTodo extends Component {
  state = {
    text: '',
  }

  render() {
    return (
      <div>
        <input placeholder="add todo..." />
        <button onClick={this.props.handleAdding}>add</button>
      </div>
    )
  }
}
