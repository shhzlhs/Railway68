import React, { Component } from "react";
import Body from "./Body";
import Body1 from "./Body1";
import Body2 from "./Body2";

class Question4 extends Component {
  constructor(props) {
    super(props);
    this.state = { body: <Body1 /> };
  }
  onClick1 = () => {
    this.setState({ body: <Body1 /> });
  };
  onClick2 = () => {
    this.setState({ body: <Body2 /> });
  };

  render() {
    return (
      <div
        style={{ backgroundColor: "#f0c9aa", padding: "10px" }}
        className="row"
      >
        <h2>Question 4:</h2>
        <button
          onClick={this.onClick1}
          style={{ width: "100px", marginRight: "20px" }}
          type="button"
          className="btn btn-primary"
        >
          Display 1
        </button>
        <button
          onClick={this.onClick2}
          style={{ width: "100px", backgroundColor: "red" }}
          type="button"
          className="btn btn-primary"
        >
          Display 2
        </button>

        <div
          style={{ backgroundColor: "grey", marginTop: "20px" }}
          className="row"
        >
          <h1>Header</h1>
        </div>

        <Body body={this.state.body} />
        <div
          style={{
            backgroundColor: "black",
            color: "white",
          }}
          className="row"
        >
          <h1>Footer</h1>
        </div>
      </div>
    );
  }
}

export default Question4;
