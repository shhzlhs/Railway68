import React, { Component } from "react";

class Body2 extends Component {
  render() {
    return (
      <div style={{ padding: "0px" }} className="row">
        <div
          style={{ backgroundColor: "red", height: "100px" }}
          className="col-xs-12 col-sm-12 col-md-12 col-lg-12"
        >
          <h2>Column 1</h2>
        </div>
        <div
          style={{ backgroundColor: "orange", height: "100px" }}
          className="col-xs-12 col-sm-12 col-md-12 col-lg-12"
        >
          <h2>Column 2</h2>
        </div>
        <div
          style={{ backgroundColor: "yellow", height: "100px" }}
          className="col-xs-12 col-sm-12 col-md-12 col-lg-12"
        >
          <h2>Column 3</h2>
        </div>
      </div>
    );
  }
}

export default Body2;
