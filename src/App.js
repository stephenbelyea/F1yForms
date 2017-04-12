import React, { Component } from 'react';
import { F1yForm, F1yBasicField } from './components/FormA11y/';

class App extends Component {

  render() {

    const handleDefaultFunc = e => e.preventDefault();

    return (
      <div className="App">
        <h1>FormA11y -- Accessible, Styleable Form Components</h1>
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
