import React from "react";

function Logo(props) {
  let { teamName } = props;
  let src = "/imgs/teams/" + teamName + ".png";
  return (
    <div>
      <img
        style={{
          width: "75px",
          height: "75px",
          objectFit: "cover",
        }}
        src={src}
        alt="Team Logo"
      ></img>
    </div>
  );
}

export default Logo;
