import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

class Bot extends Component {
  render() {
    let { keyss, varPara } = this.props;
    console.log(keyss);
    return (
      <div>
        <div
          style={{
            backgroundColor: "orange",
            color: "white",
            height: "30px",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
          className="row"
        >
          <h3
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Component_Bottom
          </h3>
        </div>

        <div style={{ height: "50px" }} className="row">
          <div className="row"></div>

          <textarea
            value={varPara}
            name=""
            id="input"
            class="form-control"
            rows="3"
            required="required"
          ></textarea>
        </div>
      </div>
    );
  }
}

export default Bot;
