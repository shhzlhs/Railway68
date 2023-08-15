import React, { Component } from "react";
class TableHeader extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>No</th>
            <th>Language</th>
            <th>Framwork</th>
          </tr>
        </thead>
      </table>
    );
  }
}

export default TableHeader;
