import React, { Component } from "react";
import Person2 from "./Person2";

class Question2 extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#05f73e" }} className="row">
        <h2>Question 2+3:</h2>
        <Person2 name="Nguyen Van A" age={15} />
        <Person2 name="Nguyen Van B" age={20} slogan="Sống để ăn" />
        <Person2 name="Nguyen Van C" age={25} slogan="Làm để tiêu" />
      </div>
    );
  }
}

export default Question2;
