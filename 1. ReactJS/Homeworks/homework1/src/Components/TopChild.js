import React, { Component } from "react";

class TopChild extends Component {
  render() {
    let keyss = this.props.keyss;
    console.log(keyss);
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <p>Ông truyền cho cháu: {keyss}</p>
      </div>
    );
  }
}

export default TopChild;
