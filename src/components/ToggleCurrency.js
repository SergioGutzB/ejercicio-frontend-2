import React, { Component } from 'react';
import { PayrollContext } from './Payroll';

export default class ToggleCurrency extends Component {
  render() {
    return (
      <PayrollContext.Consumer>
        { (ctx) => {
          const { handleToggleCurrency, currency } = ctx;
          return (
            <button onClick={ handleToggleCurrency }>Cambiar a { currency === 'MXM' ? 'USD' : 'MXM' }</button>
          )
        }}
      </PayrollContext.Consumer>
    );
  }
}
