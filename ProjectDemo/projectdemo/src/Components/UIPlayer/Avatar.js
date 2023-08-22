import React from "react";

function Avatar(props) {
  let { avatar } = props;
  let src = "/imgs/players/" + avatar;
  return (
    <div style={{ width: "75px" }}>
      <img
        style={{
          width: "75px",
          height: "75px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "1px solid red",
        }}
        src={src}
        alt="Player"
      ></img>
    </div>
  );
}

export default Avatar;
