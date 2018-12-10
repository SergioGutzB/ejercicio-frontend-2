import React, { Component } from 'react';
import employees from './employees';
import PayrollProvider from './components/Payroll';
import ToggleCurrency from './components/ToggleCurrency';

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
  }

  render() {
    console.log('update last version state: ', this.state);
    return (
      <div id='employees'>
        <PayrollProvider {...this.state}>
          <h1>Table</h1>
          <ToggleCurrency/>
        </PayrollProvider>
      </div>
    );
  }
}

export default App;
