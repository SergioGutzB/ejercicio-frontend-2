import React, { Component } from 'react';
import { PayrollContext } from './Payroll';

export default class ToggleCurrency extends Component {
  render() {
    return (
      <PayrollContext.Consumer>
        { (ctx) => {
          const { handleToggleCurrency, currency } = ctx;
          return (
            <div className="currency">
              <p className="currency__info">USD $1 = MXM ${ctx.mxm} </p>
              <button className="button button--currency" onClick={ handleToggleCurrency }>Cambiar a { currency === 'MXM' ? 'USD' : 'MXM' }</button>
            </div>
          )
        }}
      </PayrollContext.Consumer>
    );
  }
}
