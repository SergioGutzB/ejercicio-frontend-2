import React, { Component } from 'react';
import { PayrollContext } from './Payroll';

export default class SearchComponent extends Component {

  handleChange = (e, handle) => {
    const value = e.target.value;
    const filter = {
      name: value,
      company: value
    }
    const dataSource = [...handle.employees];
    handle.handleUpdateDataSource(this.applyFilters(dataSource, filter));
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
            <input className="input input--search" onChange={(e) => this.handleChange(e, ctx)} />
          )
        }}
      </PayrollContext.Consumer>
    );
  }
}
