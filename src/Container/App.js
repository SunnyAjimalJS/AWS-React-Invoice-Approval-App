import React, { Component } from "react";
import InvoiceTable from "../Components/InvoiceTable";
import Header from "../Components/Header";

class App extends Component {
  render() {
    const styling = {
      textAlign: "center",
    };

    return (
      <div styles={styling}>
        <Header />
        <InvoiceTable />
      </div>
    );
  }
}

export default App;
