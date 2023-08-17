import React, { Component } from "react";
import Question1a from "./Question1a";
import Question1b from "./Question1b";
import Question1c from "./Question1c";

class Exercise5 extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#25f7f7",
          border: "3px solid #00f214",
          marginTop: "10px",
          padding: "10px",
        }}
        className="col-xs-6 col-sm-6 col-md-6 col-lg-6"
      >
        <h1>Exercise 5:</h1>
        <Question1a />
        <Question1b />
        <Question1c />
      </div>
    );
  }
}

export default Exercise5;
