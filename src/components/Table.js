import React, { Component } from 'react'
import TableRow from './TableRow';
import { PayrollContext } from './Payroll';

export default class TableComponent extends Component {

  render() {
    return (
      <PayrollContext.Consumer>
        {(ctx) => {
          return Object.keys(ctx.dataSource).map(key => <TableRow {...ctx.dataSource[key]}></TableRow>);
        }}
      </PayrollContext.Consumer>
    );
  }
}
