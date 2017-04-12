import React from 'react';
import './forma11y.css';


const defaultStr = '';
const defaultFunc = () => null
const defaultRequired = (field, prop) => {
  console.error(`${field} requires '${prop}' prop!`);
  return defaultStr;
}

const describedBy = (id, desc, err) => {
  let describedby = defaultStr;
  if (err !== defaultStr && desc !== defaultStr) {
    describedby = `${id}_err ${id}_desc`;
  }
  else if (err !== defaultStr) describedby = `${id}_err`;
  else if (desc !== defaultStr) describedby = `${id}_desc`;
  return describedby;
}

const showDescription = (id, text, type = 'desc') => {
  if (text === defaultStr) return null;
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
  label = defaultRequired('F1yBasicField', 'label'),
  id = defaultRequired('F1yBasicField', 'id'),
  change = defaultFunc,
  focus = defaultFunc,
  blur = defaultFunc,
  value = defaultStr,
  description = defaultStr,
  error = defaultStr,
  type = 'text'
}) => (
  <div className="f1y-basic-field">
    <label htmlFor={id}>{label}</label>
    <input 
      id={id}
      type={type}
      value={value}
      aria-describedby={describedBy(id, description, error)}
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