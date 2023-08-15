import React, { Component } from "react";

class FormTopLeft extends Component {
  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <label>Tên dự án</label>
        <br></br>
        <input
          type="text"
          placeholder="Nhập tên dự án"
          style={{ width: "500px" }}
        ></input>
        <br></br>
        <label>Ngày bắt đầu</label>
        <br></br>
        <input type="date"></input>
        <br></br>
        <label>Ngày kết thúc</label>
        <br></br>
        <input type="date"></input>
      </div>
    );
  }
}

export default FormTopLeft;
