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
    currency: locale.MXM,
    mxm: 21.50,
    handleToggleCurrency: (e) => {
      const value = this.state.currency === locale.MXM ? locale.USD : locale.MXM;
      this.setState({currency: value})
    },
    handleUpdateDataSource: (dataSource) => {
      this.setState({dataSource});
    },
    //handleSaveDataSource: () => {
      //let employees = [...this.state.employees];
      //console.log('enployees: ', this.state.employees);
      //this.state.dataSource.map((dt) => {
        //// if it's a new employee  and validated filed of employee object
        //if (dt.id === undefined && dt.name && dt.company && dt.salary && dt.age) {
          //employees = [...employees, {...dt, id: employees.length + 1}];
        //} else {
          //this.state.employees.map((employee) => {
            //if (employee.id === dt.id) {
              //employees[employee.id] = {...employee, ...dt};
            //}
          //})
        //}
      //});
      //console.log(employees);
      //this.setState({employees, dataSource: employees});
    //}
  }

  render() {
    console.log('update last version state: ', this.state);
    return (
      <div id='employees'>
        <PayrollProvider {...this.state}>
          <Table>Table</Table>
          <SearchComponent/>
          <ToggleCurrency/>
        </PayrollProvider>
      </div>
    );
  }
}

export default App;
