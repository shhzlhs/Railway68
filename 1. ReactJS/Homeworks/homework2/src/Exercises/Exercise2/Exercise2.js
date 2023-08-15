import React, { Component } from "react";
import Question2_1 from "./Question2_1";
import Question2_2 from "./Question2_2";

class Exercise2 extends Component {
  render() {
    return (
      <div style={{ border: "3px solid red", padding: "10px" }} className="row">
        <h1>Exercise 2:</h1>
        <Question2_1 />
        <Question2_2 />
      </div>
    );
  }
}

export default Exercise2;
