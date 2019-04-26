import React, { Component } from 'react'

export default class Todo extends Component {
  _handleCheckboxChange = () => {
    this.props.handleChecking(this.props.id)
  }

  render() {
    return (
      <div>
        <label>{this.props.title}</label>
        <input
          type="checkbox"
          onChange={this._handleCheckboxChange}
          defaultChecked={this.props.done}
        />
      </div>
    )
  }
}
