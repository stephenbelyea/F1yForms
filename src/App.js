import React, { Component } from 'react';
import { 
    F1yForm, 
    F1yFieldset, 
    F1yField 
  } from './components/F1yForms/';

class App extends Component {

  render() {

    const handleDefaultFunc = e => e.preventDefault();

    return (
      <div className="App">
        <h1>F1yForms</h1>
        <p>Accessible, styleable form and field React components</p>
        <F1yForm
          submit={handleDefaultFunc}
        >
          <F1yFieldset 
            legend="Your Name"
          >
            <F1yField 
              id="fname"
              label="First"
            />
            <F1yField 
              id="lname"
              label="Last"
            />
          </F1yFieldset>
          <F1yField 
            id="email"
            label="Email*"
            type="email"
            required={true}
          />
          <F1yField 
            id="phone"
            label="Phone"
            type="tel"
            styling="slick"
          />
        </F1yForm>
      </div>
    );
  }
}

export default App;