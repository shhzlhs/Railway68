import React, { Component } from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";

class Question2_1c extends Component {
  render() {
    return (
      <div className="row">
        <Component1 />
        <Component2 />
        <Component3 />
      </div>
    );
  }
}

export default Question2_1c;
