import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Formik, Field } from 'formik'

import { TextInput } from '../../Form/Input'
import { updateTodoWithDispatch, getTodoByIdWithDispatch } from '../../store/todos'

class Edit extends Component {
  componentDidMount = () => {
    this.props.getTodoByIdWithDispatch(this.props.match.params.id)
  }

  render() {
    const {
      byId: { description, title, done, id },
    } = this.props
    const initialValues = {
      description,
      title,
      done,
      id,
    }
    return (
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          this.props.updateTodoWithDispatch(values)
          actions.setSubmitting(false)
          this.props.history.push(`/todos/`)
        }}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name="title" component={TextInput} label={'Title'} />
            <Field name="description" component={TextInput} label={'Description'} />
            <input type="hidden" name="id" />
            <button type="submit">edit</button>
          </form>
        )}
      ></Formik>
    )
  }
}

const mapStateToProps = ({ todos }) => {
  return todos
}

const mapDispatchToProps = {
  updateTodoWithDispatch,
  getTodoByIdWithDispatch,
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Edit),
)
