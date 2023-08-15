import React, { Component } from "react";

class FormTopRight extends Component {
  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
          <label>Mã dự án </label>
          <br></br>
          <label>Tên khách hàng </label>
          <br></br>
          <label>Ghi chú </label>
        </div>

        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
          <input style={{ width: "300px" }} placeholder="Nhập mã dự án"></input>
          <br></br>
          <input
            style={{ width: "300px" }}
            placeholder="Nhập tên khách hàng"
          ></input>
          <br></br>
          <input
            style={{ width: "300px", height: "40px" }}
            placeholder="Ghi chú"
          ></input>
        </div>
      </div>
    );
  }
}

export default FormTopRight;
