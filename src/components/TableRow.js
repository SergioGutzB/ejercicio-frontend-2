import React, { Component}  from 'react';
import TableInputComponent from './TableInput';

const setupInputProps = (key, props) => {
  const values = {
    id: key + props.id,
    employeeId: props.id,
    name: key,
    value: props[key],
    type: 'text',
    disabled: false,
    editabled: props.editabled
  };

  switch (key) {
    case 'name':
      return { ...values, placeholder: 'Nombre', className: 'name' }

    case 'company':
      return { ...values, placeholder: 'Empresa', disabled: props.id !== undefined && true? true : false, className: 'company' }

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

export const TableRow = (props) => {
  return <div className={`table__row ${props.salary < 1000 ? 'table__row--error' : ''}`} >
    {
      Object.keys(props).map( (key, index) => {
        if (key !== 'id' && key !== 'editabled') {
          return (
            <TableInputComponent {...setupInputProps(key, props)} key={index}/>
          );
        }
      })
    }
  </div>
}
