import React, { Component, PropTypes } from 'react';
import './forma11y.css';

const propTypes = {
  handleSubmit: PropTypes.func
}
const defaultProps = {
  handleSubmit: () => {}
}

class FormA11y extends Component {

  render() {
    return (
      <form 
        className="forma11y"
        onSubmit={this.props.handleSubmit}
      >
        {this.props.children}
      </form>
    );
  }
}

FormA11y.propTypes = propTypes;
FormA11y.defaultProps = defaultProps;

export default FormA11y;