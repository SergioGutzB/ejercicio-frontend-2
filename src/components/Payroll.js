import React, { Component } from 'react'

const PayrollContext = React.createContext()
export { PayrollContext }

class PayrollProvider extends Component {
  render () {
    return (
      <PayrollContext.Provider value={{ ...this.props }}>
        {this.props.children}
      </PayrollContext.Provider>
    )
  }
}

export default PayrollProvider
