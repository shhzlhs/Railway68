import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div
        style={{ height: "110px", background: "red", color: "white" }}
        class="col-xs-12 col-sm-12 col-md-12 col-lg-12"
      >
        <h3>Header</h3>
      </div>
    );
  }
}

export default Header;
