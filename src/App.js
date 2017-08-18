import React, { Component } from 'react'
import autoBind from 'react-autobind'
import { 
    F1yForm, 
    F1yFieldset, 
    F1yField,
    F1yTextArea,
    F1ySelect,
    F1ySelectOption,
    F1yRadio,
    F1yCheckbox,
    F1yConfirm,
    F1ySubmit 
  } from './components/F1yForms/'
import * as fields from './utility/fields'

class App extends Component {

  constructor() {
    super()
    autoBind(this)
    this.state = {
      values: {...fields.demoFields},
      errors: {...fields.demoErrors},
      display: 'form'
    }
  }

  // Individual field value validation
  _validateField(tar) {
    if (!tar) return false
    const field = this.state.values[tar.id]
    const errors = {...this.state.errors, [tar.id]: ''}

    // Blanket check for value on requred field
    if (tar.getAttribute('aria-required')) {
      if (field === '') errors[tar.id] = 'Field is required!'
    }

    this.setState({ errors })
  }

  // Field value updates
  _onChangeField(e) {
    const values = {...this.state.values},
          tar = e.currentTarget

    const key = (tar.type === 'radio' || tar.type === 'checkbox') ? tar.name : tar.id

    if (tar.id === 'confirm') values[key] = !values[key]
    else if (tar.type === 'checkbox') {
      const index = values[key].indexOf(tar.value)
      if (index > -1) values[key].splice(index, 1)
      else values[key].push(tar.value)
    }
    else values[key] = tar.value

    // Update value in state, then send to validation
    this.setState({ values }, () => this._validateField(tar))
  }

  // Handle field blur with send through validation
  _onBlurField(e) {
    const tar = e.currentTarget
    this._validateField(tar)
  }

  _onSubmitForm(e) {
    if (e) e.preventDefault();
    this.setState({
      display: 'success',
      values: {...fields.demoFields},
      errors: {...fields.demoErrors}
    });
  }

  render() {
    const { values, errors, display } = this.state

    return (
      <div className="App">
        <h1>F1yForms</h1>
        <p>Accessible, styleable form and field React components</p>
        {display === 'success' &&
          <p className="success">Form successfully submitted!</p>
        }
        {display === 'form' &&
          <F1yForm submit={this._onSubmitForm}>
            <F1yFieldset legend="Your Name">
              <div className="row row--halves">
                {fields.nameFields.map((field, index) => {
                  return (
                    <F1yField 
                      key={index}
                      id={field.id}
                      type={field.type}
                      label={field.label}
                      change={this._onChangeField}
                      blur={this._onBlurField}
                      value={values[field.id]}
                      error={errors[field.id]}
                      description={field.desc}
                      required={field.required}
                    />
                  )
                })}
              </div>
            </F1yFieldset>
            <div className="row row--halves">
              {fields.contactFields.map((field, index) => {
                return (
                  <F1yField 
                    key={index}
                    id={field.id}
                    type={field.type}
                    label={field.label}
                    change={this._onChangeField}
                    blur={this._onBlurField}
                    value={values[field.id]}
                    error={errors[field.id]}
                    description={field.desc}
                    required={field.required}
                  />
                )
              })}
            </div>
            <div className="row row--halves">
              <F1yField 
                id="city"
                label="City"
                change={this._onChangeField}
                blur={this._onBlurField}
                value={values.city}
              />
              <F1ySelect 
                id="province"
                label="Province*"
                change={this._onChangeField}
                blur={this._onBlurField}
                value={values.province}
                error={errors.province}
                required={true}
              >
                <F1ySelectOption 
                  label="Select your province"
                  change={this._onChangeField}
                  blur={this._onBlurField}
                  selected={values.province}
                />
                {fields.provinceOptions.map((prov, index) => {
                  return (
                    <F1ySelectOption 
                      key={index}
                      label={prov.label}
                      value={prov.value}
                    />
                  )
                })}
              </F1ySelect>
            </div>
            <F1yFieldset legend="Type of residence">
              {fields.residenceOptions.map((res, index) => {
                return (
                  <F1yRadio
                    key={index}
                    id={`residence-${res.value}`}
                    name="residence"
                    label={res.label}
                    value={res.value}
                    change={this._onChangeField}
                    blur={this._onBlurField}
                    checked={values.residence === res.value}
                  />
                )
              })}
            </F1yFieldset>
            <F1yFieldset legend="Amenities included">
              {fields.amenityOptions.map((amenity, index) => {
                return (
                  <F1yCheckbox
                    key={index}
                    id={`amenity-${amenity.value}`}
                    name="amenity"
                    label={amenity.label}
                    value={amenity.value}
                    change={this._onChangeField}
                    blur={this._onBlurField}
                    checked={values.amenities.indexOf(amenity.value) > -1}
                  />
                )
              })}
            </F1yFieldset>
            <F1yTextArea 
              id="instructions"
              label="Special Instructions"
              change={this._onChangeField}
              blur={this._onBlurField}
              value={values.instructions}
            />
            <F1yFieldset legend="Your Birthday">
              <div className="row row--start">
                <F1yField 
                  id="birthyear"
                  label="Full Year"
                  type="number"
                  change={this._onChangeField}
                  blur={this._onBlurField}
                  value={values.birthyear}
                />
                <F1ySelect 
                  id="birthmonth"
                  label="Month"
                  change={this._onChangeField}
                  blur={this._onBlurField}
                  value={values.birthmonth}
                >
                  {fields.monthOptions.map((month, index) => {
                    return (
                      <F1ySelectOption 
                        key={index}
                        label={month}
                        value={index}
                      />
                    );
                  })}
                </F1ySelect>
                <F1ySelect 
                  id="birthday"
                  label="Day"
                  change={this._onChangeField}
                  blur={this._onBlurField}
                  value={values.birthday}
                >
                  {fields.dayOptions.map((day, index) => {
                    return (
                      <F1ySelectOption 
                        key={index}
                        label={day}
                        value={day}
                      />
                    );
                  })}
                </F1ySelect>
              </div>
            </F1yFieldset>
            <F1yConfirm
              id="confirm"
              label={fields.confirmLabel}
              value={values.confirm}
              change={this._onChangeField}
            />
            <F1ySubmit 
              label="Register"
              submit={this._onSubmitForm}
            />
          </F1yForm>
        }
      </div>
    );
  }
}

export default App;