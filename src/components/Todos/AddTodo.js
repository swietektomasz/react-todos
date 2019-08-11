import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addTodoWithDispatch } from '../../store/todos/actions'
import { TextInput } from '../../Form/Input'
import { Formik, Field } from 'formik'

export const AddTodo = props => {
  const initialValues = {
    description: '',
    title: '',
    done: false,
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        props.addTodoWithDispatch(values)
        actions.setSubmitting(false)
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field name="title" component={TextInput} label={'Title'} />
          <Field name="description" component={TextInput} label={'Description'} />
          <button type="submit">add</button>
        </form>
      )}
    ></Formik>
  )
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addTodoWithDispatch,
    },
    dispatch,
  )
}

export default connect(
  null,
  mapDispatchToProps,
)(AddTodo)
