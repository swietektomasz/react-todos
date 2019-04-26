import React, { Component } from 'react'
import Todo from './Todo/Todo'

export default class TodoList extends Component {
  _handleChecking = id => {
    this.props.updateCheckedTodos(id)
  }

  render() {
    return (
      <div>
        {this.props.list.map(todo => (
          <Todo
            key={todo.id}
            title={todo.title}
            done={todo.done}
            id={todo.id}
            handleChecking={this._handleChecking}
          />
        ))}
      </div>
    )
  }
}
