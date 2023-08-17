import React, { Component } from "react";

class Question1a extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: new Date().getHours(),
      mins: new Date().getMinutes(),
      senconds: new Date().getSeconds(),
    };
  }
  onUpdate = () => {
    this.setState({
      hours: new Date().getHours(),
      mins: new Date().getMinutes(),
      senconds: new Date().getSeconds(),
    });
  };

  render() {
    return (
      <>
        <h2>Question 1:</h2>
        <div style={{ background: "#98f207" }} className="row">
          <h3>a:</h3>
          <h1 style={{ border: "black solid 3px", textAlign: "center" }}>
            Bây giờ là: {this.state.hours}:{this.state.mins}:
            {this.state.senconds}
          </h1>

          <button
            style={{ width: "100px", marginLeft: "300px" }}
            onClick={this.onUpdate}
            type="button"
            className="btn btn-success"
          >
            Update Time
          </button>
        </div>
      </>
    );
  }
}

export default Question1a;
