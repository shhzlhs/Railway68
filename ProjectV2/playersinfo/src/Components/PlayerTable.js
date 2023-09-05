import React from "react";
import { useSelector } from "react-redux";
import { midStyle, playerAvatarStyle, playerInfoRow } from "../Styles";
import { Link } from "react-router-dom";

function PlayerTable(props) {
  let reduxState = useSelector((state) => state);
  let players = reduxState.players;

  const items = players.map((player, index) => {
    const src = "/imgs/players/" + player.avatar;
    const url = "/player/" + player.id;
    return (
      <div key={index} style={midStyle} className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <Link to={url}>
            {" "}
            <img style={playerAvatarStyle} alt={player.name} src={src}></img>
          </Link>
        </div>

        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <div style={playerInfoRow} className="row">
            <b>Name: {player.name}</b>
          </div>
          <div style={playerInfoRow} className="row">
            <b>Nation: {player.nation}</b>
          </div>
          <div style={playerInfoRow} className="row">
            <b>Position: {player.position}</b>
          </div>
          <div style={playerInfoRow} className="row">
            <b>Team: {player.teamName}</b>
          </div>
          <div style={playerInfoRow} className="row">
            <b>Joined Year: {player.joinedYear}</b>
          </div>
        </div>
      </div>
    );
  });
  return <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">{items}</div>;
}

export default PlayerTable;
