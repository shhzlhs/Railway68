import React from "react";

function Flag(props) {
  let { nation } = props;
  let src = "/imgs/flags/" + nation + ".png";
  return (
    <div>
      <img
        style={{
          width: "50px",
          height: "25px",
          objectFit: "cover",
        }}
        src={src}
        alt="Flag"
      ></img>
    </div>
  );
}

export default Flag;
