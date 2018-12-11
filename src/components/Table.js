import React, { Component } from 'react'
import { TableRow } from './TableRow';
import { PayrollContext } from './Payroll';

const TableRowHeader = (props) => {
  console.log('props.column: ', props);
  return (
    <div className="table__row table__row--header">
      {Object.keys(props).map(column => <p key={column} className="table__row__text">{props[column]}</p> )}
    </div>
  )
}

export default class TableComponent extends Component {

  state = {
    editabled: false,
    adding: false
  }

  handleEdit = (evt, callback) => {
    if (this.state.editabled ) {
      callback();
    }
    this.setState({editabled: !this.state.editabled})
  }

  /*
   * Added a new employee
   * @param {event} evt
   * @param {context} ctx that containt handleSaveDatasource and handleUpdateDataSource functions
   */
  handleAdd = (evt, ctx) => {
    if (this.state.adding ) {
      ctx.handleSaveDataSource();
    } else {
      ctx.handleUpdateDataSource([...ctx.dataSource, {
        id: undefined,
        name: '',
        company: '',
        salary: '',
        age: '',
        phone: '',
        email: ''
      }]);
    }
    this.setState({adding: !this.state.adding, editabled: !this.state.editabled})
  }

  render() {
    return (
      <PayrollContext.Consumer>
        {(ctx) => {
          return (
            <div >
              <div className="table">
                <TableRowHeader {...ctx.columns}/>
                {Object.keys(ctx.dataSource).map(key => <TableRow key={key} {...ctx.dataSource[key]} editabled={this.state.editabled}/>) }
              </div>
              <button className="button button--add" onClick={(e) => this.handleAdd(e, ctx )}>{!this.state.adding? 'Añadir Nuevo' : 'Guardar'}</button>
              { !this.state.adding ?
              <button className="button button--edit" onClick={(e) => this.handleEdit(e, () => console.log('callback edit'))}>{!this.state.editabled ? 'Editar' : 'Guardar'}</button>
                  : null}
            </div>
          );
        }}
      </PayrollContext.Consumer>
    );
  }
}
