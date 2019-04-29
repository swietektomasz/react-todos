import React, { Component } from 'react'

export default class AddTodo extends Component {
  state = {
    text: '',
  }

  _handleInputChange = e => {
    this.setState({ text: e.target.value })
  }

  _handleSubmit = () => {
    this.props.handleAdding(this.state.text)
    this.setState({ text: '' })
  }

  render() {
    return (
      <div>
        <input
          placeholder="add todo..."
          value={this.state.text}
          onChange={this._handleInputChange}
        />
        <button onClick={this._handleSubmit}>add</button>
      </div>
    )
  }
}
