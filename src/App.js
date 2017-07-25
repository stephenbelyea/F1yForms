import React, { Component } from 'react'
import autoBind from 'react-autobind'
import { 
    F1yForm, 
    F1yFieldset, 
    F1yField,
    F1yTextArea,
    F1ySelect,
    F1ySelectOption,
    F1yRadio 
  } from './components/F1yForms/'

const provinceOptions = [
  { id: 1, value: 'AB', label: 'Alberta' },
  { id: 2, value: 'BC', label: 'British Columbia' },
  { id: 3, value: 'MB', label: 'Manitoba' },
  { id: 4, value: 'NB', label: 'New Brunswick' },
  { id: 5, value: 'NL', label: 'Newfoundland and Labrador' },
  { id: 6, value: 'NW', label: 'Northwest Territories' },
  { id: 7, value: 'NS', label: 'Nova Scotia' },
  { id: 8, value: 'NU', label: 'Nunavut' },
  { id: 9, value: 'ON', label: 'Ontario' },
  { id: 10, value: 'SK', label: 'Saskatchewan' },
  { id: 11, value: 'QC', label: 'Quebec' },
  { id: 12, value: 'YU', label: 'Yukon' }
]

const demoFields = {
  fname: '',
  lname: '',
  email: '',
  phone: '',
  city: '',
  province: '',
  residence: '',
  instructions: ''
}

class App extends Component {

  constructor() {
    super()
    autoBind(this)
    this.state = {
      values: {...demoFields},
      errors: {...demoFields}
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

    let key = tar.id
    if (tar.type && tar.type === 'radio') key = tar.name
    values[key] = tar.value

    // Update value in state, then send to validation
    this.setState({ values }, () => this._validateField(tar))
  }

  // Handle field blur with send through validation
  _onBlurField(e) {
    const tar = e.currentTarget
    this._validateField(tar)
  }

  render() {
    const handleDefaultFunc = e => e.preventDefault()
    const { values, errors } = this.state

    return (
      <div className="App">
        <h1>F1yForms</h1>
        <p>Accessible, styleable form and field React components</p>
        <F1yForm
          submit={handleDefaultFunc}
          styling="simple"
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
                selected={values.province}
              />
              {provinceOptions.length > 0 && provinceOptions.map(prov => {
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
          <F1yTextArea 
            id="instructions"
            label="Special Instructions"
            change={this._onChangeField}
            blur={this._onBlurField}
            value={values.instructions}
          />
        </F1yForm>
      </div>
    );
  }
}

export default App;