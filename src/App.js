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
      todos: [...todos, { id: todos.length++, title: text, done: false }],
    }))
  }

  _handleTodoChecking = () => id => {
    const editedTodos = this.state.todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo,
    )

    this.setState({
      todos: editedTodos,
    })
  }

  render() {
    return (
      <div className="App">
        <AddTodo handleAdding={this._handleAddTodo} />
        <TodoList list={this.state.todos} updateCheckedTodos={this._handleTodoChecking} />
      </div>
    )
  }
}

export default App
