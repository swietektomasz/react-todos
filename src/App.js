import React, { Component } from 'react'
import './App.css'
import TodoList from './components'
import AddTodo from './components/Todo/AddTodo'

const initialTodos = [
  {
    id: 0,
    title: 'do this',
    done: true,
  },
  {
    id: 1,
    title: 'do that',
    done: false,
  },
  {
    id: 2,
    title: 'do something',
    done: false,
  },
]

class App extends Component {
  state = {
    todos: initialTodos,
  }

  _handleAddTodo = text => {
    this.setState(({ todos }) => ({
      todos: [...todos, { id: todos.length++, title: 'text', done: false }],
    }))
  }

  _handleChecked = event => {}

  render() {
    return (
      <div className="App">
        <AddTodo handleAdding={this._handleAddTodo} handleChecking={this._handleChecked} />
        <TodoList list={this.state.todos} />
      </div>
    )
  }
}

export default App
