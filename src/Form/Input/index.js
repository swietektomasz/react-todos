import React from 'react'

export const Input = ({ className, name, label, errors = {}, ...rest }) => (
  <div className={`form-group ${className}`}>
    <label>{label}</label>
    <input className="form-control" name={name} id={name} {...rest} />
    {errors[name] && <small className="text-danger">{String(errors[name])}</small>}
  </div>
)
