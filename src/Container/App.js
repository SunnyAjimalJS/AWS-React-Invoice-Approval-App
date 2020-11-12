import React, { Component } from "react";
import InvoiceTable from "../Components/InvoiceTable";
import Header from "../Components/Header";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <InvoiceTable />
      </>
    );
  }
}

export default App;
