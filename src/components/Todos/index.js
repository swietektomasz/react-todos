import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchTodosWithDispatch, getTodos } from '../../store/todos'
import AddTodo from '../Todos/AddTodo'
import Todo from './Todo'

class TodoList extends Component {
  componentDidMount = () => {
    this.props.fetchTodosWithDispatch()
  }

  render() {
    const { nodes } = this.props
    return (
      <div>
        {nodes.map(todo => {
          return <Todo key={todo.id} todo={todo} />
        })}
        <AddTodo />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return getTodos(state)
}

const mapDispatchToProps = {
  fetchTodosWithDispatch,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList)
