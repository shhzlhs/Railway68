import React, { Component } from "react";

class Aside extends Component {
  render() {
    return (
      <div
        style={{ backgroundColor: "gray", height: "400px", color: "white" }}
        className="col-xs-4 col-sm-4 col-md-4 col-lg-4"
      >
        <h3>Aside</h3>
      </div>
    );
  }
}

export default Aside;
