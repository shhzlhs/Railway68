import React from "react";

function FullImage(props) {
  let { avatar } = props;
  let src = "/imgs/players/" + avatar + ".jpg";
  return (
    <div>
      <img
        style={{
          width: "450px",
          height: "563px",
          objectFit: "cover",
          border: "1px solid red",
        }}
        src={src}
        alt="Player"
      ></img>
    </div>
  );
}

export default FullImage;
