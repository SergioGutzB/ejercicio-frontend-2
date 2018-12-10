import React, { Component } from 'react';
import { PayrollContext } from './Payroll';

export default class SearchComponent extends Component {

  handleChange = (e, handle) => {
    //e.preventDefault;
    console.log(e, handle);
  }

  render() {
    return (
      <PayrollContext.Consumer>
        {(ctx) => {
          return (
            <input onChange={(e) => this.handleChange(e, ctx)} />
          )
        }}
      </PayrollContext.Consumer>
    );
  }
}
