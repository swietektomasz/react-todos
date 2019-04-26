import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Todo extends Component {
  static propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    done: PropTypes.bool,
  }

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
