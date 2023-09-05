import React from "react";
import { linkStyle, menuStyle } from "../Styles";
import { Link } from "react-router-dom";

function Menu(props) {
  return (
    <div style={menuStyle} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
        <Link style={linkStyle} to={"/home"}>
          <h4>Home</h4>
        </Link>
      </div>
      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
        <Link style={linkStyle} to={"/players"}>
          <h4>All Players</h4>
        </Link>
      </div>
      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
        <Link style={linkStyle} to={"/about"}>
          <h4>About Us?</h4>
        </Link>
      </div>

      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
        <Link style={linkStyle} to={"/admin"}>
          <h4>ADMIN</h4>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
