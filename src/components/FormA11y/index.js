import React from 'react';
import './forma11y.css';


const defaultFunc = () => null

const describedBy = (id, desc, err) => {
  let describedby = '';
  if (err !== '' && desc !== '') {
    describedby = `${id}_err ${id}_desc`;
  }
  else if (err !== '') describedby = `${id}_err`;
  else if (desc !== '') describedby = `${id}_desc`;
  return describedby;
}

const showDescription = (id, text, type = 'desc') => {
  if (text === '') return null;
  return (
    <span 
      id={`${id}_${type}`} 
      className={`f1y-field-${type}`}
    >
      {text}
    </span>
  )
}


const F1yForm = ({
  submit = defaultFunc,
  children
}) => (
  <form 
    className="f1y-form"
    onSubmit={submit}
  >
    {children}
  </form>
)


const F1yBasicField = ({
  change = defaultFunc,
  focus = defaultFunc,
  blur = defaultFunc,
  type = 'text',
  value = '',
  label = '', // *Required
  description = '',
  error = '',
  id = '' // *Required
}) => (
  <div className="f1y-basic-field">
    <label 
      htmlFor={id}
    >
      {label}
    </label>
    <input 
      id={id}
      type={type}
      value={value}
      aria-describedby={
        describedBy(id, description, error)
      }
      onChange={change}
      onFocus={focus}
      onBlur={blur}
    />
    {showDescription(id, error, 'err')}
    {showDescription(id, description)}
  </div>
)


export {
  F1yForm,
  F1yBasicField
}