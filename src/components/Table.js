import React, { Component } from 'react'
import TableRow from './TableRow';
import { PayrollContext } from './Payroll';

export default class TableComponent extends Component {

  state = {
    editabled: false,
    adding: false
  }

  handleEdit = (evt, callback) => {
    this.setState({editabled: !this.state.editabled})
  }

  render() {
    return (
      <PayrollContext.Consumer>
        {(ctx) => {
          return (
            <div >
              {Object.keys(ctx.dataSource).map(key => <TableRow {...ctx.dataSource[key]} editabled={this.state.editabled} ></TableRow>) }
              <button onClick={(e) => this.handleEdit(e, () => console.log('callback edit'))}>{!this.state.editabled ? 'Editar' : 'Guardar'}</button>
            </div>
          );
        }}
      </PayrollContext.Consumer>
    );
  }
}
