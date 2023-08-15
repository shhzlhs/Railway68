import React, { Component } from "react";
import FormTopLeft from "./FormTopLeft";
import FormTopRight from "./FormTopRight";

class FormTop extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <FormTopLeft />
        <FormTopRight />
      </div>
    );
  }
}

export default FormTop;
