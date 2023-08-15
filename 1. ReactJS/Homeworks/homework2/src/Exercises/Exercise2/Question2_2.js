import React, { Component } from "react";
import Question2_2a from "./Question2_2a/Question2_2a";

class Question2_2 extends Component {
  render() {
    return (
      <div
        style={{ padding: "20px", backgroundColor: "#05f0e4" }}
        className="col-xs-12 col-sm-12 col-md-12 col-lg-12"
      >
        <h2>Question 2:</h2>
        <h3>a:</h3>
        <Question2_2a />
      </div>
    );
  }
}

export default Question2_2;
