import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addTodo } from '../../store/todos/actions'

export const AddTodo = props => {
  const [title, setTitle] = useState('')
  return (
    <div>
      <input
        placeholder="add todo..."
        defaultValue=""
        onChange={({ target: { value } }) => setTitle(value)}
      />
      <button onClick={() => props.addTodo(title)}>add</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addTodo,
    },
    dispatch,
  )
}

export default connect(
  null,
  mapDispatchToProps,
)(AddTodo)

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
}
