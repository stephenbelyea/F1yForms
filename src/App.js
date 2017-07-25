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

    if (tar.type === 'checkbox') {
      const index = values[key].indexOf(tar.value);
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
          <F1yForm
            submit={this._onSubmitForm}
          >
            <F1yFieldset 
              legend="Your Name"
            >
              <div className="row row--halves">
                <F1yField 
                  id="fname"
                  label="First*"
                  change={this._onChangeField}
                  blur={this._onBlurField}
                  value={values.fname}
                  error={errors.fname}
                  required={true}
                />
                <F1yField 
                  id="lname"
                  label="Last*"
                  change={this._onChangeField}
                  blur={this._onBlurField}
                  value={values.lname}
                  error={errors.lname}
                  required={true}
                />
              </div>
            </F1yFieldset>
            <div className="row row--halves">
              <F1yField 
                id="email"
                type="email"
                label="Email*"
                change={this._onChangeField}
                blur={this._onBlurField}
                value={values.email}
                error={errors.email}
                required={true}
              />
              <F1yField 
                id="phone"
                type="tel"
                label="Phone"
                change={this._onChangeField}
                blur={this._onBlurField}
                value={values.phone}
                description="Format (555) 123-4567"
              />
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
                {fields.provinceOptions.map(prov => {
                  return (
                    <F1ySelectOption 
                      key={prov.id}
                      label={prov.label}
                      value={prov.value}
                    />
                  )
                })}
              </F1ySelect>
            </div>
            <F1yFieldset 
              legend="Type of residence"
            >
              <F1yRadio
                id="residence-apartment"
                name="residence"
                label="Apartment"
                value="apartment"
                change={this._onChangeField}
                blur={this._onBlurField}
                checked={values.residence === 'apartment'}
              />
              <F1yRadio
                id="residence-condo"
                name="residence"
                label="Condo"
                value="condo"
                change={this._onChangeField}
                blur={this._onBlurField}
                checked={values.residence === 'condo'}
              />
              <F1yRadio
                id="residence-house"
                name="residence"
                label="House"
                value="house"
                change={this._onChangeField}
                blur={this._onBlurField}
                checked={values.residence === 'house'}
              />
            </F1yFieldset>
            <F1yFieldset 
              legend="Amenities included"
            >
              <F1yCheckbox
                id="amenities-laundry"
                name="amenities"
                label="Laundry"
                value="laundry"
                change={this._onChangeField}
                blur={this._onBlurField}
                checked={values.amenities.indexOf('laundry') > -1}
              />
              <F1yCheckbox
                id="amenities-pets"
                name="amenities"
                label="Pets allowed"
                value="pets"
                change={this._onChangeField}
                blur={this._onBlurField}
                checked={values.amenities.indexOf('pets') > -1}
              />
              <F1yCheckbox
                id="amenities-parking"
                name="amenities"
                label="Parking"
                value="parking"
                change={this._onChangeField}
                blur={this._onBlurField}
                checked={values.amenities.indexOf('parking') > -1}
              />
              <F1yCheckbox
                id="amenities-balcony"
                name="amenities"
                label="Balcony"
                value="balcony"
                change={this._onChangeField}
                blur={this._onBlurField}
                checked={values.amenities.indexOf('balcony') > -1}
              />
            </F1yFieldset>
            <F1yTextArea 
              id="instructions"
              label="Special Instructions"
              change={this._onChangeField}
              blur={this._onBlurField}
              value={values.instructions}
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