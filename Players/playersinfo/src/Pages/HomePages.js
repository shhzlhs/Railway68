import React from "react";
import { bottomBar, iconMail, imgHomePage, imgIcons } from "../Styles";

HomePages.propTypes = {};

function HomePages(props) {
  return (
    <div>
      <img style={imgHomePage} src="/imgs/icons/all.jpg" alt="Home"></img>

      <div style={bottomBar} className="row">
        <img style={imgIcons} alt="info" src="/imgs/icons/info.png"></img>
        <b>Hoàng Sơn Lê </b>{" "}
        <img style={iconMail} alt="mail" src="/imgs/icons/mail.png"></img>
        <b> hoangsonshhz@gmail.com</b>
      </div>
    </div>
  );
}

export default HomePages;
