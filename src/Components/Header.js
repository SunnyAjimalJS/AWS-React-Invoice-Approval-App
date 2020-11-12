import React, { Component } from "react";

export default class Header extends Component {
  render() {
    const styling = {
      backgroundColor: "#555579",
      color: "white",
      textAlign: "left",
      padding: "40px",
      fontSize: "30px",
    };
    return <h4 style={styling}>Pending Invoices </h4>;
  }
}
