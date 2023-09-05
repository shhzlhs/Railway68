import React from "react";
import { Link } from "react-router-dom";

function Menu(props) {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div class="navbar-header">
          <li>
            <Link to={"/VTI"}>VTI Academy</Link>
          </li>
        </div>
        <ul class="nav navbar-nav">
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/account"}>Account Management</Link>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="#">
              <span class="glyphicon glyphicon-user"></span> Sign Up
            </a>
          </li>
          <li>
            <a href="#">
              <span class="glyphicon glyphicon-log-in"></span> Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
