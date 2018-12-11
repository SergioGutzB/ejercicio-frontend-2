import React, { Component } from 'react'
import TableInputComponent from './TableInput';

export default class TableRow extends Component {

  setupInputProps = (key) => {
    const values = {
      id: key + this.props.id,
      name: key,
      value: this.props[key],
      type: 'text',
      disabled: false,
    };

    switch (key) {
      case 'name':
        return { ...values, placeholder: 'Nombre', className: 'name' }

      case 'company':
        return { ...values, placeholder: 'Empresa', disabled: true, className: 'company' }

      case 'salary':
        return { ...values, type: 'number', placeholder: 'Salario', className: 'salary' }

      case 'age':
        return { ...values, type: 'number', placeholder: 'Edad', className: 'age' }

      case 'phone':
        return { ...values, placeholder: 'Teléfono', className: 'phone' }

      case 'email':
        return { ...values, placeholder: 'E-mail', className: 'email' }

      default:
        return {...values};
    }
  }

  render() {
    const keys = Object.keys(this.props);
    console.log('row props: ', this.props)
    return (
      <div className={`table__row ${this.props.salary <= 1000 ? 'error' : ''}`} >
        {
          keys.map( (key, index) => {
            if (key !== 'id') {
              return (
                <TableInputComponent {...this.setupInputProps(key)} key={index}/>
              );
            }
          })
        }
      </div>
    );
  }
}
