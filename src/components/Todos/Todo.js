import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'

import { toggleTodoWithDispatch, removeTodoWithDispatch } from './../../store/todos/actions'

const Todo = props => {
  const { todo, toggleTodoWithDispatch, removeTodoWithDispatch } = props

  return (
    <div>
      <label style={{ textDecorationLine: todo.done ? 'line-through' : 'none' }}>
        {todo.title}: {todo.description}
      </label>
      <input
        type="checkbox"
        onChange={() => toggleTodoWithDispatch({ ...todo, done: !todo.done })}
        defaultChecked={todo.done}
      />
      <button onClick={() => removeTodoWithDispatch(todo)}>x</button>
      <button onClick={() => props.history.push(`/todos/${todo.id}`)}>edit</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      toggleTodoWithDispatch,
      removeTodoWithDispatch,
    },
    dispatch,
  )
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps,
  )(Todo),
)

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
}
