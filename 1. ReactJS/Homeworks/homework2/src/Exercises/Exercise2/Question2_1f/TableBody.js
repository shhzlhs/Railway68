import React, { Component } from "react";

class TableBody extends Component {
  render() {
    return (
      <table className="table table-hover">
        <tbody>
          <tr>
            <td>1</td>
            <td>PHP</td>
            <td>Laravel</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Android</td>
            <td>Webkit</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Java</td>
            <td>Meteor</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default TableBody;
