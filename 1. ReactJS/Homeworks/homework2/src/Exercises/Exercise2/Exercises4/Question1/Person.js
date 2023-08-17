import React, { Component } from "react";

class Person extends Component {
  render() {
    let { name, age } = this.props;
    return (
      <div
        style={{ border: "solid 1px black" }}
        className="col-xs-4 col-sm-4 col-md-4 col-lg-4"
      >
        <h3>Full Name: {name}</h3>
        <p>Age: {age}</p>
      </div>
    );
  }
}

export default Person;
