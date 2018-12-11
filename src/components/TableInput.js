import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { PayrollContext } from './Payroll';

const currency  = (n) => {
  n = parseFloat(n);
  return isNaN(n) ? false : n.toFixed(2)
}

const formatCurrency = (x, locale, mxm) => {
  if (locale === 'USD') {
    x = x/mxm;
  }
  return currency(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default class TableInputComponent extends Component {

  render() {
    return (
      <PayrollContext.Consumer>
        { (ctx) => {
          if (this.props.editabled) {
            return (
              <input
                id={ this.props.id }
                className={`table__row__input ${this.props.className}`}
                value={ this.props.value }
                placeholder={ this.props.placeholder }
                type={ this.props.type? this.props.type : 'text' }
                onChange={ (e) => {console.log(e.target.value)}}
                name={ this.props.name }
                disabled={ this.props.disabled }
              />
            )
          } else {
            return (
              <p className={`table__row__text ${this.props.className}`}>{ this.props.name === 'salary' ? '$ ' + formatCurrency(this.props.value, ctx.currency, ctx.mxm) : this.props.value}</p>
            )
          }
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
