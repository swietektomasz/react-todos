import { connect } from 'react-redux'
import React, { Component } from 'react'

import TodoList from '../Todos'
import AddTodo from '../Todos/AddTodo'

import { fetchTodos } from './../../store/todos/actions'

import '../../App.css'

class Home extends Component {
  componentDidMount = () => {
    this.props.fetchTodos()
  }

  render() {
    const { todos } = this.props
    console.log(todos)
    return (
      <div className="App">
        {todos.map(todo => (
          <p key={todo.id}>{todo.title}</p>
        ))}
        {/* <AddTodo handleAdding={this._handleAddTodo} />
        <TodoList list={this.state.todos} updateCheckedTodos={this._handleTodoChecking} /> */}
      </div>
    )
  }
}

const mapStateToProps = ({ todos }) => {
  return {
    todos,
  }
}

const mapDispatchToProps = {
  fetchTodos,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)
