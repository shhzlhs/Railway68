import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div
        style={{ border: "1px solid blue", padding: "10px" }}
        className="col-xs-12 col-sm-12 col-md-12 col-lg-12"
      >
        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10"></div>

        <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
          <button
            style={{ marginRight: "10px" }}
            type="button"
            class="btn btn-primary"
          >
            Huỷ
          </button>
          <button type="button" class="btn btn-primary">
            Thêm mới
          </button>
        </div>
      </div>
    );
  }
}

export default Footer;
