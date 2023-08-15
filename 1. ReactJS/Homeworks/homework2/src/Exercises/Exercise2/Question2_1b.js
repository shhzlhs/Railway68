import React, { Component } from "react";

class Question2_1b extends Component {
  render() {
    let firstName = "Nguyen Van";
    let lastName = "A";
    let getFullName = () => {
      return "Full Name: " + firstName + " " + lastName;
    };
    return (
      <div>
        <div
          style={{ border: "1px solid gray" }}
          class="col-xs-4 col-sm-4 col-md-4 col-lg-4"
        >
          <h3>{getFullName()}</h3>
          <p>Age: 25</p>
        </div>
      </div>
    );
  }
}

export default Question2_1b;
