import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { PayrollContext } from './Payroll';

export default class TableInputComponent extends Component {

  render() {
    return (
      <PayrollContext.Consumer>
        { (ctx) => {
          return (
            <input
              id={ this.props.id }
              className={`row-input ${this.props.className}`}
              value={ this.props.value }
              placeholder={ this.props.placeholder }
              type={ this.props.type? this.props.type : 'text' }
              onChange={ (e) => {console.log(e.target.value)}}
              name={ this.props.name }
              disabled={ this.props.disabled }
            />
          )
        }
        }
      </PayrollContext.Consumer>
    );
  }
}

TableInputComponent.propTypes = {
  id: PropTypes.PropTypes.number.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool
}
