import React, { Component } from 'react';
import FormA11y from './components/FormA11y/';

class App extends Component {

  handleFormSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <FormA11y
          handleSubmit={this.handleFormSubmit}
        >

        </FormA11y>
      </div>
    );
  }
}

export default App;
