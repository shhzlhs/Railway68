import React, { Component } from "react";
import Componentd1 from "./Component1d";
import Component2d from "./Component2d";
import Component3d from "./Component3d";
import Component4d from "./Component4d";

class Question2_1d extends Component {
  render() {
    return (
      <div className="container">
        <Componentd1 />
        <Component2d />
        <Component3d />
        <Component4d />
      </div>
    );
  }
}

export default Question2_1d;
