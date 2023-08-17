import React, { Component } from "react";

class Middle extends Component {
  render() {
    return (
      <div
        style={{ padding: "20px" }}
        className="col-xs-12 col-sm-12 col-md-12 col-lg-12"
      >
        <h3>Sản phẩm</h3>

        <div
          style={{ border: "1px solid black", padding: "10px" }}
          className="col-xs-12 col-sm-12 col-md-12 col-lg-12"
        >
          <input
            style={{ width: "400px" }}
            type="text"
            placeholder="Nhập mã sản phẩm"
          ></input>
          <input
            style={{ width: "400px" }}
            type="text"
            placeholder="Nhập tên sản phẩm"
          ></input>
          <input
            style={{ width: "400px" }}
            type="text"
            placeholder="Nhập số lượng"
          ></input>
          <button>Thêm</button>
          <button>Sửa</button>
          <button>Xoá sản phẩm</button>
        </div>

        <table class="table table-hover">
          <thead>
            <tr>
              <th>MÃ</th>
              <th>TÊN</th>
              <th>SỐ LƯỢNG</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sanpham1</td>
              <td>sp1</td>
              <td>100</td>
            </tr>
            <tr>
              <td>Sanpham2</td>
              <td>Sp2</td>
              <td>200</td>
            </tr>
            <tr>
              <td>Sanpham3</td>
              <td>Sp3</td>
              <td>2000</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Middle;
