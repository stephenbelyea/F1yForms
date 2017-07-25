import React from 'react'
import './f1yforms-simple.css'
import './f1yforms-slick.css'


const defaultStr = '',
      defaultBool = false,
      defaultStyling = 'simple',
      defaultFunc = () => null,
      defaultFieldType = 'text'

const defaultRequired = (field, prop) => {
  console.error(`${field} requires '${prop}' prop!`)
  return defaultStr
}


const describedBy = (id, desc, err) => {
  let describedby = defaultStr
  if (err !== defaultStr && desc !== defaultStr) {
    describedby = `${id}_error ${id}_description`
  }
  else if (err !== defaultStr) describedby = `${id}_error`
  else if (desc !== defaultStr) describedby = `${id}_description`
  return describedby
}

const showDescription = (id, text, type = 'description') => {
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
  styling = defaultStyling,
  children
}) => (
  <form 
    className={`f1y-form f1y-form--${styling}`}
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
  disabled = defaultBool
}) => (
  <div className={`f1y-field f1y-field--basic`}>
    <div className="f1y-field__wrap">
      <input 
        id={id}
        type={type}
        value={value}
        className="f1y-field__input"
        aria-describedby={describedBy(id, description, error)}
        aria-required={required}
        aria-invalid={error === '' ? false : true}
        disabled={disabled}
        onChange={change}
        onFocus={focus}
        onBlur={blur}
      />
      <label 
        htmlFor={id}
        className="f1y-field__label"
      >
        {label}
      </label>
    </div>
    {showDescription(id, error, 'error')}
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
  disabled = defaultBool
}) => (
  <div className={`f1y-field f1y-field--textarea`}>
    <div className="f1y-field__wrap">
      <textarea 
        id={id}
        value={value}
        className="f1y-field__input"
        aria-describedby={describedBy(id, description, error)}
        aria-required={required}
        aria-invalid={error === '' ? false : true}
        disabled={disabled}
        onChange={change}
        onFocus={focus}
        onBlur={blur}
      />
      <label 
        htmlFor={id}
        className="f1y-field__label"
      >
        {label}
      </label>
    </div>
    {showDescription(id, error, 'error')}
    {showDescription(id, description)}
  </div>
)


const F1ySelect = ({
  label = defaultRequired('F1yTextArea', 'label'),
  id = defaultRequired('F1yTextArea', 'id'),
  change = defaultFunc,
  focus = defaultFunc,
  blur = defaultFunc,
  value = defaultStr,
  description = defaultStr,
  error = defaultStr,
  required = defaultBool,
  disabled = defaultBool,
  children
}) => (
  <div className={`f1y-field f1y-field--select`}>
    <div className="f1y-field__wrap">
      <select 
        id={id}
        value={value}
        className="f1y-field__input"
        aria-describedby={describedBy(id, description, error)}
        aria-required={required}
        aria-invalid={error === '' ? false : true}
        disabled={disabled}
        onChange={change}
        onFocus={focus}
        onBlur={blur}
      >
        {children}
      </select>
      <label 
        htmlFor={id}
        className="f1y-field__label"
      >
        {label}
      </label>
    </div>
    {showDescription(id, error, 'error')}
    {showDescription(id, description)}
  </div>
)


const F1ySelectOption = ({
  value = defaultStr,
  label = defaultStr,
  disabled = defaultBool
}) => (
  <option 
    value={value}
    disabled={disabled}
  >
    {label}
  </option>
)

const F1yRadio = ({
  label = defaultRequired('F1yRadio', 'label'),
  name = defaultRequired('F1yRadio', 'name'),
  id = defaultRequired('F1yRadio', 'id'),
  change = defaultFunc,
  focus = defaultFunc,
  blur = defaultFunc,
  value = defaultStr,
  description = defaultStr,
  error = defaultStr,
  required = defaultBool,
  disabled = defaultBool,
  checked = defaultBool
}) => (
  <div className={`f1y-field f1y-field--radio`}>
    <div className="f1y-field__wrap--radio">
      <input 
        id={id}
        type="radio"
        name={name}
        value={value}
        className="f1y-field__input--radio"
        aria-describedby={describedBy(id, description, error)}
        aria-required={required}
        aria-invalid={error === '' ? false : true}
        disabled={disabled}
        checked={checked}
        onChange={change}
        onFocus={focus}
        onBlur={blur}
      />
      <label 
        htmlFor={id}
        className="f1y-field__label--radio"
      >
        {label}
      </label>
    </div>
    {showDescription(id, error, 'error')}
    {showDescription(id, description)}
  </div>
)

const F1ySubmit = ({
  label = defaultRequired('F1yRadio', 'label'),
  submit = defaultFunc,
  disabled = defaultBool
}) => (
  <div className="f1y-submit">
    <button 
      className="f1y-submit__action"
      type="submit"
      disabled={disabled}
      onClick={submit}
    >
      {label}
    </button>
  </div>
)

export {
  F1yForm,
  F1yFieldset,
  F1yField,
  F1yTextArea,
  F1ySelect,
  F1ySelectOption,
  F1yRadio,
  F1ySubmit
}