import React, { Component } from 'react'

export default class Todo extends Component {
  render() {
    return (
      <div>
        <label>{this.props.title}</label>
        <input
          type="checkbox"
          onChange={this.props.handleChecking}
          defaultChecked={this.props.done}
        />
      </div>
    )
  }
}
