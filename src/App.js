import React, { Component } from 'react';
import employees from './employees';
import PayrollProvider from './components/Payroll';
import ToggleCurrency from './components/ToggleCurrency';
import SearchComponent from './components/Search';
import Table from './components/Table';

const locale = {
  MXM: 'MXM',
  USD: 'USD'
}

class App extends Component {

  state = {
    employees,
    dataSource: employees,
    columns: {name: 'Nombre', company: 'Empresa', salary: 'Salario', age: 'Edad', phone: 'Teléfono', email: 'Correo', actions: ''},
    currency: locale.MXM,
    mxm: 21.50,
    handleToggleCurrency: (e) => {
      const value = this.state.currency === locale.MXM ? locale.USD : locale.MXM;
      this.setState({currency: value})
    },
    handleUpdateDataSource: (dataSource) => {
      this.setState({dataSource});
    },
    handleSaveDataSource: () => {
      let employees = [...this.state.employees];
      this.state.dataSource.map(dt => {
        if (dt.id === undefined && dt.name && dt.company && dt.salary && dt.age) {
          employees = [...employees, {...dt, id: employees.length + 1}];
        } else {
          this.state.employees.map((employee) => {
            if (employee.id === dt.id) {
              employees[employee.id] = {...employee, ...dt};
            }
          })
        }
      });
      this.setState({employees, dataSource: employees});
    },
    handleDeleteEmployee: (evt, employeeId) => {
      const employees =  this.state.employees.filter(employee => employee.id !== employeeId);
      this.setState({
        employees,
        dataSource: employees
      });
    }
  }

  render() {
    return (
      <div id='employees'>
        <PayrollProvider {...this.state}>
          <div className="filter-currency">
            <SearchComponent/>
            <ToggleCurrency/>
          </div>
          <Table>Table</Table>
        </PayrollProvider>
      </div>
    );
  }
}

export default App;
