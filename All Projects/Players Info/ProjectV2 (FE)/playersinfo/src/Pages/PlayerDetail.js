import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { divDetail, flag, imgDetail, logoDetail } from "../Styles";

function PlayerDetail(props) {
  const reduxState = useSelector((state) => state);
  const players = reduxState.players;

  const para = useParams();
  const pId = parseInt(para.id);

  const player = players.find((player) => player.id === pId);
  const src = "/imgs/players/player_" + player.id + ".jpg";
  const src1 = "/imgs/flags/" + player.nation + ".png";
  const src2 = "/imgs/logoes/" + player.teamName + ".png";

  return (
    <div className="row" style={divDetail}>
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="row">
          <img alt={player.name} src={src} style={imgDetail}></img>
        </div>

        <div className="row"></div>

        <img alt={player.nation} src={src1} style={flag} />
        <img alt={player.teamName} src={src2} style={logoDetail} />
      </div>

      <div
        style={{
          textAlign: "justify",
        }}
        className="col-xs-4 col-sm-4 col-md-4 col-lg-4"
      >
        <b>
          <h1>{player.name}</h1>
        </b>
        <h3>
          Position: {player.position};<br></br>
          Joined {player.teamName}: {player.joinedYear};<br></br>
          <br></br>
          <i>{player.info}</i>
        </h3>
      </div>
    </div>
  );
}

export default PlayerDetail;
