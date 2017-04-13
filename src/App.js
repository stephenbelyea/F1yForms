import React, { Component } from 'react';
import { F1yForm, F1yBasicField } from './components/F1yForms/';

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
          <F1yBasicField 
            id="fname"
            label="First Name"
          />
        </F1yForm>
      </div>
    );
  }
}

export default App;
