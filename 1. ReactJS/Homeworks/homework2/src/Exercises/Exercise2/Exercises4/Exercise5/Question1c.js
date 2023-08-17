import React, { Component } from "react";

class Question1c extends Component {
  style1 = {
    backgroundColor: "black",
    color: "green",
    width: "100px",
    textAlign: "left",
  };
  style2 = {
    backgroundColor: "black",
    color: "red",
    width: "100px",
    textAlign: "right",
  };
  constructor(props) {
    super(props);
    this.state = { but: "ON", style: this.style1 };
  }
  onClick = () => {
    if (this.state.style === this.style1) {
      this.setState({ style: this.style2, but: "OFF" });
    } else {
      this.setState({ style: this.style1, but: "ON" });
    }
  };
  render() {
    return (
      <div
        style={{ backgroundColor: "white", marginTop: "10px" }}
        className="col-xs-3 col-sm-3 col-md-3 col-lg-3"
      >
        <h3>c:</h3>
        <button onClick={this.onClick}>
          <div style={this.state.style}>
            <h2>{this.state.but}</h2>
          </div>
        </button>
      </div>
    );
  }
}

export default Question1c;
