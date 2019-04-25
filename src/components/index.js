import React, { Component } from 'react'
import Todo from './Todo/Todo'

export default class TodoList extends Component {
  render() {
    return (
      <div>
        {this.props.list.map(todo => (
          <Todo key={todo.id} title={todo.title} done={todo.done} />
        ))}
      </div>
    )
  }
}
