import React from "react";
import FullImage from "./FullImage";
import Flag from "./Flag";

function MorePlayerInfo(props) {
  let { player } = props;
  return (
    <div
      style={{
        width: "400px",
        padding: "10px",
      }}
    >
      <FullImage avatar={player.avatar} />

      <Flag nation={player.nation} />

      <h4>
        <b>
          <i>{player.name}</i>
        </b>{" "}
        is a professional footballer who plays as a {player.position} for{" "}
        {player.teamName}, He joined {player.teamName} in {player.joinedYear}
      </h4>
    </div>
  );
}

export default MorePlayerInfo;
