import React from "react";
import { logoWelcomeStyle, topMidStyle } from "../../CSS/Styles";

function Welcome(props) {
  return (
    <div style={topMidStyle} class="row">
      <img style={logoWelcomeStyle} src="/imgs/logo.png" alt="WELCOME!!!"></img>
    </div>
  );
}

export default Welcome;
