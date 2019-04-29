import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Todo from './Todo'

export default class TodoList extends Component {
  static propTypes = {
    list: PropTypes.array,
    id: PropTypes.number,
  }

  render() {
    const { list = [] } = this.props

    return (
      <div>
        {list.map(todo => (
          <Todo
            key={todo.id}
            title={todo.title}
            done={todo.done}
            id={todo.id}
            handleChecking={() => this.props.updateCheckedTodos(this.props.id)}
          />
        ))}
      </div>
    )
  }
}
