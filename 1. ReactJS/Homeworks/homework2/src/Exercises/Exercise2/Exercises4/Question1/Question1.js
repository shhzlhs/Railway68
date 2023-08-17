import React, { Component } from "react";
import Person from "./Person";

class Question1 extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#f062d8" }} className="row">
        <h2>Question 1:</h2>
        <Person name="Nguyen Van A" age={15} />
        <Person name="Nguyen Van B" age={20} />
        <Person name="Nguyen Van C" age={25} />
      </div>
    );
  }
}

export default Question1;
