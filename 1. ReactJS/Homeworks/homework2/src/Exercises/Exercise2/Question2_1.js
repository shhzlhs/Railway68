import React, { Component } from "react";
import Question2_1a from "./Question2_1a";
import Question2_1b from "./Question2_1b";
import Question2_1c from "./Question2_1c/Question2_1c";
import Question2_1d from "./Question2_1d/Question2_1d";
import Question2_1e from "./Question2_1e/Question2_1e";
import Table from "./Question2_1f/Table";

class Question2_1 extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <h2>Question 1:</h2>
          <h3>a:</h3>
          <Question2_1a />
          <Question2_1a />
          <Question2_1a />

          <div className="row">
            <h3>b:</h3>
            <Question2_1b />
          </div>

          <div className="row">
            <h3>c:</h3>
            <Question2_1c />
          </div>

          <div className="row">
            <h3>d:</h3>
            <Question2_1d />
          </div>
        </div>

        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="row">
            <h3>e:</h3>
            <Question2_1e />
          </div>

          <div className="row">
            <h3>f:</h3>
            <Table />
          </div>
        </div>
      </div>
    );
  }
}

export default Question2_1;
