import React, { Component } from "react";

class Hello extends Component {
  constructor(props) {
    super(props);
    console.log("B1");
    this.state = { content: "VTI" };
  }
  handleClick = () => {
    this.setState({ content: "IsMe" });
  };
  clickAgain = () => {
    this.setState({ content: "VTI" });
  };
  //Để hiển thị
  render() {
    console.log("B2");
    return (
      <div>
        <h1>{this.state.content}</h1>
        <button onClick={this.handleClick}>Click me</button>
        <button onClick={this.clickAgain}>Click me again</button>
      </div>
    );
  }
  componentDidMount() {
    console.log("B3");
  }
}

export default Hello;
