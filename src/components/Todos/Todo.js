import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { toggleTodo, removeTodo } from './../../store/todos/actions'

const Todo = props => {
  const {
    todo: { id, title, createdAt, done },
  } = props
  return (
    <div>
      <label style={{ textDecorationLine: done ? 'line-through' : 'none' }}>
        {createdAt}: {title}
      </label>
      <input type="checkbox" onChange={() => props.toggleTodo(id)} defaultChecked={done} />
      <button onClick={() => props.removeTodo(id)}>x</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      toggleTodo,
      removeTodo,
    },
    dispatch,
  )
}

export default connect(
  null,
  mapDispatchToProps,
)(Todo)

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
}
