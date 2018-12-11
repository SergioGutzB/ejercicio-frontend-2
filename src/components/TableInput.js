import React from 'react'
import PropTypes from 'prop-types';
import { PayrollContext } from './Payroll';

const currency  = (n) => {
  n = parseFloat(n);
  return isNaN(n) ? false : n.toFixed(2)
}

const formatCurrency = (x, locale, mxm) => {
  if (locale === 'USD') {
    x /= mxm;
  }
  return currency(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export const TableInput = (props) => {
  return (
    <PayrollContext.Consumer>
      { (ctx) => {
        const classError = ((props.name === 'salary') && props.value < 1000) ? props.className + ' table__row__input--error' : props.className;
        if (props.editabled) {
          return (
            <input
              id={ props.id }
              className={`table__row__input ${classError}` }
              value={ props.value }
              placeholder={ props.placeholder }
              type={ props.type? props.type : 'text' }
              onChange={ (e) => {
                const key = e.target.name;
                const employees = ctx.dataSource.map((employee) => {
                  if (employee.id === props.employeeId) {
                    employee[key] = ['salary', 'age'].includes(key) ? parseFloat(e.target.value) : e.target.value;
                  }
                  return employee;
                })
                ctx.handleUpdateDataSource(employees);
              }}
              name={ props.name }
              disabled={ props.disabled }
            />
          )
        } else {
          return (
            <p className={`table__row__text ${classError}`}>{ props.name === 'salary' ? '$ ' + formatCurrency(props.value, ctx.currency, ctx.mxm) : props.value}</p>
          )
        }
      }
      }
    </PayrollContext.Consumer>
  );
}

TableInput.propTypes = {
  employeeId: PropTypes.number,
  id: PropTypes.PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool
}
