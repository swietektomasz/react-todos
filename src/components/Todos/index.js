import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Todo from './Todo'

const TodoList = ({ todos }) => {
  console.log(todos)
  return todos.map(todo => todo && <Todo key={todo.id} todo={todo} />)
}

const mapStateToProps = ({ todos }) => {
  return {
    todos,
  }
}

export default connect(
  mapStateToProps,
  null,
)(TodoList)

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
}
