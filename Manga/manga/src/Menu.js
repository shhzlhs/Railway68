import React from "react";
import { Link } from "react-router-dom";

function Menu(props) {
  return (
    <div>
      <nav className="navbar navbar-default" role="navigation">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-ex1-collapse"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand">
            <Link to={"/home"}>Trang chủ</Link>
          </a>
        </div>

        <div className="collapse navbar-collapse navbar-ex1-collapse">
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="#">Tác giả</a>
            </li>
            <li>
              <a href="#">Tải truyện lên</a>
            </li>
          </ul>
          <form className="navbar-form navbar-left" role="search">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Tên truyện, tác giả..."
              />
            </div>
            <button type="submit" className="btn btn-default">
              Tìm kiếm
            </button>
          </form>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#">Đăng ký</a>
            </li>
            <li>
              <a href="#">Admin</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
