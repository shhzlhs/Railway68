import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { setSearchRedux } from "./Redux/Actions/StoryActions";
function Menu(props) {
  let dispathRedux = useDispatch();
  let reduxSate = useSelector((state) => state);
  let search = reduxSate.search;
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
            <li>
              <a>Tác giả</a>
            </li>
            <li>
              <Link to={"/upload"}>
                <a>Tải truyện lên</a>
              </Link>
            </li>
          </ul>
          <form className="navbar-form navbar-left" role="search">
            <div className="form-group">
              <Input
                type="text"
                placeholder="Tên truyện, tác giả..."
                value={search}
                onChange={(event) => {
                  dispathRedux(setSearchRedux(event.target.value));
                }}
              />
            </div>
          </form>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#">Đăng ký</a>
            </li>
            <li>
              <Link to="/admin">
                <a>Admin</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
