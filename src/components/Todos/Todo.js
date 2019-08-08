import React from 'react'
import PropTypes from 'prop-types'

export const Todo = ({ handleChecking, title, done, id }) => (
  <div>
    <label>{title}</label>
    <input type="checkbox" onChange={() => handleChecking(id)} defaultChecked={done} />
  </div>
)

export default Todo

Todo.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  done: PropTypes.bool,
  handleChecking: PropTypes.func,
}
