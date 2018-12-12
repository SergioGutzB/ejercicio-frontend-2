import React, { Component } from 'react'
import { TableRow } from './TableRow';
import { PayrollContext } from './Payroll';

const TableRowHeader = (props) => {
  return (
    <div className="table__row table__row--header ">
      {Object.keys(props).map(column => <p key={column} className={`table__row__text ${column}`}>{props[column]}</p> )}
    </div>
  )
}

export default class TableComponent extends Component {

  state = {
    editabled: false,
    adding: false
  }

  handleEdit = () => {
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
          const {adding, editabled} = this.state;
          return (
            <div >
              <div className="table">
                <TableRowHeader {...ctx.columns}/>
                {Object.keys(ctx.dataSource).map(key => <TableRow key={key} {...ctx.dataSource[key]} editabled={editabled} handleDelete={ctx.handleDeleteEmployee}/>) }
              </div>
              <button className="button button--add" onClick={(e) => this.handleAdd(e, ctx )} disabled={editabled && (editabled && adding === false )}>{!adding? 'Añadir Nuevo' : 'Guardar'}</button>
              <button className="button button--edit" onClick={this.handleEdit} disabled={adding}>{!editabled ? 'Editar' : 'Guardar'}</button>
            </div>
          );
        }}
      </PayrollContext.Consumer>
    );
  }
}
