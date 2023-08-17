import React, { Component } from "react";
import Question1 from "./Question1/Question1";
import Question2 from "./Question2/Question2";
import Question4 from "./Question4/Question4";

class Exercise4 extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#a8d46a",
          border: "3px solid black",
          marginTop: "10px",
        }}
        className="col-xs-6 col-sm-6 col-md-6 col-lg-6"
      >
        <h1>Exercise 4:</h1>
        <Question1 />
        <Question2 />
        <Question4 />
      </div>
    );
  }
}

export default Exercise4;
