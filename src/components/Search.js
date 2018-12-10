import React, { Component } from 'react';
import { PayrollContext } from './Payroll';

export default class SearchComponent extends Component {

  handleChange = (e, handle) => {
    console.log(e, handle);
    const value = e.target.value;
    const filter = {
      name: value,
      company: value
    }
    const dataSource = [...handle.employees];
    console.log('filter employees:  ', this.applyFilters(dataSource, filter));
  }

  applyFilters = (data, filters) => {
    return data.filter(item => Object.keys(filters)
      .map(keyToFilterOn =>
        item[keyToFilterOn].includes(filters[keyToFilterOn]),
      ).reduce((x, y) => x || y)
    );
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
