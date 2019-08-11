import PropTypes from 'prop-types'
import React from 'react'

export const TextInput = ({ field, form: { touched, errors }, label, type }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} required {...field} autoComplete="off" />
    </div>
  )
}

TextInput.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string,
  }),
  form: PropTypes.shape({
    touched: PropTypes.object,
    errors: PropTypes.object,
  }),
  label: PropTypes.string,
  type: PropTypes.string,
}
