import React, { Component } from "react";
import Section from "./Section";
import Article from "./Article";
import Aside from "./Aside";

class Temporary extends Component {
  render() {
    return (
      <div
        style={{ padding: "0px" }}
        className="col-xs-12 col-sm-12 col-md-12 col-lg-12"
      >
        <div
          style={{ padding: "0px" }}
          className="col-xs-8 col-sm-8 col-md-8 col-lg-8"
        >
          <Section />
          <Article />
        </div>

        <Aside />
      </div>
    );
  }
}

export default Temporary;
