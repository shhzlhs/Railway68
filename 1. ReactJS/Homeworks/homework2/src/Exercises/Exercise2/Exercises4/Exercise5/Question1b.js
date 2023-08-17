import React, { Component } from "react";

class Question1b extends Component {
  t1 = "Read More";
  t2 = "Show Less";
  t3 =
    "JavaTpoint is a Noida based IT Company. we deals in Training | Development | SEO. JavaTpoint provides easy and point to point learning of various online tutorials such as Java Tutorial, Core Java Tutorial, Android, Design Pattern, JavaScript, AJAX, SQL, Cloud Computing, Python etc.";
  constructor(props) {
    super(props);
    this.state = {
      conten: this.t3,
      buttonContent: this.t1,
    };
  }
  onClick = () => {
    if (this.state.conten === null) {
      this.setState({ conten: this.t3, buttonContent: this.t1 });
    } else {
      this.setState({
        conten: null,
        buttonContent: this.t2,
      });
    }
  };

  render() {
    return (
      <div
        style={{ backgroundColor: "grey", marginTop: "10px" }}
        className="row"
      >
        <h3>b:</h3>
        <h1>WELCOM TO JAVATPOINT</h1>
        <p>{this.state.conten}</p>

        <button
          onClick={this.onClick}
          style={{ width: "100px", margin: "10px" }}
          type="button"
          className="btn btn-danger"
        >
          {this.state.buttonContent}
        </button>
      </div>
    );
  }
}

export default Question1b;
