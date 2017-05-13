import React, { Component } from 'react'
import autoBind from 'react-autobind'
import { 
    F1yForm, 
    F1yFieldset, 
    F1yField,
    F1yTextArea,
    F1ySelect,
    F1ySelectOption 
  } from './components/F1yForms/'

class App extends Component {

  constructor() {
    super()
    autoBind(this)
    this.state = {
      values: {
        fname: '',
        lname: '',
        email: '',
        phone: ''
      },
      errors: {
        fname: '',
        lname: '',
        email: '',
        phone: ''
      }
    }
  }

  _onChangeField(e) {
    const values = { ...this.state.values },
          errors = { ...this.state.errors },
          tar = e.currentTarget

    values[tar.id] = tar.value

    if (tar.getAttribute('aria-required')) {
      if (tar.value !== '') errors[tar.id] = ''
      else errors[tar.id] = 'Field must not be left empty'
    }

    this.setState({ values, errors })
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
                value={values.fname}
                error={errors.fname}
                required={true}
              />
              <F1yField 
                id="lname"
                label="Last*"
                change={this._onChangeField}
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
              value={values.email}
              error={errors.email}
              required={true}
            />
            <F1yField 
              id="phone"
              type="tel"
              label="Phone"
              change={this._onChangeField}
              value={values.phone}
              description="Format (555) 123-4567"
            />
          </div>
          <div className="row row--halves">
            <F1yField 
              id="city"
              label="City"
            />
            <F1ySelect 
              id="province"
              label="Province"
            >
              <F1ySelectOption 
                label="Select an option"
              />
            </F1ySelect>
          </div>
          <F1yTextArea 
            id="instructions"
            label="Special Instructions"
          />
        </F1yForm>
      </div>
    );
  }
}

export default App;