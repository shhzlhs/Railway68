import React, { Component } from "react";

class Body1 extends Component {
  render() {
    return (
      <div style={{ padding: "0px" }} className="row">
        <div
          style={{ backgroundColor: "red", height: "300px" }}
          className="col-xs-4 col-sm-4 col-md-4 col-lg-4"
        >
          <h2>Column 1</h2>
        </div>
        <div
          style={{ backgroundColor: "orange", height: "300px" }}
          className="col-xs-4 col-sm-4 col-md-4 col-lg-4"
        >
          <h2>Column 2</h2>
        </div>
        <div
          style={{ backgroundColor: "yellow", height: "300px" }}
          className="col-xs-4 col-sm-4 col-md-4 col-lg-4"
        >
          <h2>Column 3</h2>
        </div>
      </div>
    );
  }
}

export default Body1;
