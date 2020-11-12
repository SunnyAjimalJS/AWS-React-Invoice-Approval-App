import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsDown,
  faThumbsUp,
  faSearchDollar,
  faMoneyCheckAlt,
} from "@fortawesome/free-solid-svg-icons";

export default class InvoiceTable extends Component {
  state = {
    isLoading: false,
    invoices: [],
  };

  remove(Id) {
    let updatedInvoices = [...this.state.invoices].filter((i) => i.Id !== Id);
    this.setState({ invoices: updatedInvoices });
  }

  async componentDidMount() {
    const response = await fetch(
      "https://pnmj332sl1.execute-api.us-east-2.amazonaws.com/Dev"
    );
    const body = await response.json();
    this.setState({ invoices: body, isLoading: false });
  }

  render() {
    const isLoading = this.state.isLoading;
    const invoices = this.state.invoices;

    if (isLoading) return <div>Loading...</div>;

    let invoice_rows = invoices.map((invoice) => (
      <tr key={invoice.Id}>
        <td>{invoice.Vendor}</td>
        <td>£{invoice.Amount}</td>
        <td>{invoice.Invoice}</td>
        <td>{invoice.Date}</td>
        <td>
          <Button
            className="btn btn lg btn-success"
            onClick={() => this.remove(invoice.Id)}
          >
            <FontAwesomeIcon icon={faThumbsUp} />
            OK
          </Button>
        </td>
        <td>
          <Button
            className="btn btn lg btn-danger"
            onClick={() => this.remove(invoice.Id)}
          >
            <FontAwesomeIcon icon={faThumbsDown} />
            NO
          </Button>
        </td>
        <td>
          <Button
            className="btn btn lg btn-info"
            onClick={() => this.remove(invoice.Id)}
          >
            <FontAwesomeIcon icon={faMoneyCheckAlt} />
            50%
          </Button>
        </td>
        <td>
          <Button
            className="btn btn lg btn-warning"
            onClick={() => this.remove(invoice.Id)}
          >
            <FontAwesomeIcon icon={faSearchDollar} />
            ??
          </Button>
        </td>
      </tr>
    ));

    return (
      <div className="container">
        {/* Table for data */}
        <div className="row">
          <div className=".col-xs-12 center text-center">
            <Table dark responsive striped bordered hover>
              <thead>
                <tr>
                  <th scope="row">Vendor</th>
                  <th scope="row">Amount</th>
                  <th scope="row">Invoice #</th>
                  <th scope="row">Date</th>
                  <th colSpan="4" scope="row">
                    Actions
                  </th>
                </tr>
              </thead>
              {/* Table Body */}
              <tbody>
                {this.state.invoices.length === 0 ? (
                  <td colSpan="4"> You're all caught up!</td>
                ) : (
                  invoice_rows
                )}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}
