import React from 'react'
import './f1yforms.css'


const defaultStr = '',
      defaultBool = false,
      defaultStyle = 'simple',
      defaultFunc = () => null,
      defaultFieldType = 'text'

const defaultRequired = (field, prop) => {
  console.error(`${field} requires '${prop}' prop!`)
  return defaultStr
}


const describedBy = (id, desc, err) => {
  let describedby = defaultStr
  if (err !== defaultStr && desc !== defaultStr) {
    describedby = `${id}_err ${id}_desc`
  }
  else if (err !== defaultStr) describedby = `${id}_err`
  else if (desc !== defaultStr) describedby = `${id}_desc`
  return describedby
}

const showDescription = (id, text, type = 'desc') => {
  if (text === defaultStr) return null
  return (
    <span 
      id={`${id}_${type}`} 
      className={`f1y-field__${type}`}
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


const F1yFieldset = ({
  legend = defaultStr,
  children
}) => (
  <fieldset className="f1y-fieldset">
    {legend !== '' &&
      <legend className="f1y-fieldset__legend">
        {legend}
      </legend>
    }
    {children}
  </fieldset>
)


const F1yField = ({
  label = defaultRequired('F1yField', 'label'),
  id = defaultRequired('F1yField', 'id'),
  change = defaultFunc,
  focus = defaultFunc,
  blur = defaultFunc,
  value = defaultStr,
  description = defaultStr,
  error = defaultStr,
  type = defaultFieldType,
  required = defaultBool,
  styling = defaultStyle
}) => (
  <div className={`f1y-field f1y-field--${styling}`}>
    <div className="f1y-field__wrap">
      {styling === 'simple' &&
        <label htmlFor={id}>{label}</label>
      }
      <input 
        id={id}
        type={type}
        value={value}
        aria-describedby={describedBy(id, description, error)}
        aria-required={required}
        onChange={change}
        onFocus={focus}
        onBlur={blur}
      />
      {styling === 'slick' &&
        <label htmlFor={id}>{label}</label>
      }
    </div>
    {showDescription(id, error, 'err')}
    {showDescription(id, description)}
  </div>
)

const F1yTextArea = ({
  label = defaultRequired('F1yTextArea', 'label'),
  id = defaultRequired('F1yTextArea', 'id'),
  change = defaultFunc,
  focus = defaultFunc,
  blur = defaultFunc,
  value = defaultStr,
  description = defaultStr,
  error = defaultStr,
  required = defaultBool,
  styling = defaultStyle
}) => (
  <div className={`f1y-field f1y-field--textarea f1y-field--${styling}`}>
    <div className="f1y-field__wrap">
      {styling === 'simple' &&
        <label htmlFor={id}>{label}</label>
      }
      <textarea 
        id={id}
        value={value}
        aria-describedby={describedBy(id, description, error)}
        aria-required={required}
        onChange={change}
        onFocus={focus}
        onBlur={blur}
      />
      {styling === 'slick' &&
        <label htmlFor={id}>{label}</label>
      }
    </div>
    {showDescription(id, error, 'err')}
    {showDescription(id, description)}
  </div>
)


export {
  F1yForm,
  F1yFieldset,
  F1yField,
  F1yTextArea
}