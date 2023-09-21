import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { buttonStyle1, imgButtonStyle2, teamRowStyle } from "../Styles";
import {
  getAllPlayers,
  getPlayersByTeams,
} from "../Redux/Actions/PlayerActions";
import { showTeamInfo } from "../Redux/Actions/FormActions";
import TeamInfoModal from "../Modals/TeamInfoModal";
import { defaultTeam } from "../DefaltPars";

function TeamsColumn(props) {
  let dispathRedux = useDispatch();
  let [team, setTeam] = useState(defaultTeam);
  let reduxState = useSelector((state) => state);
  let teams = reduxState.teams;

  const items = teams.map((team, index) => {
    const src = "/imgs/logoes/" + team.logo;

    return (
      <div key={index} style={teamRowStyle} className="row">
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <Button
            onClick={() => {
              setTeam(team);
              dispathRedux(showTeamInfo());
            }}
            style={buttonStyle1}
          >
            <img alt={team.name} src={src} style={imgButtonStyle2}></img>
          </Button>
        </div>

        <div
          onClick={() => {
            dispathRedux(getPlayersByTeams([team.id]));
          }}
          className="col-xs-9 col-sm-9 col-md-9 col-lg-9"
        >
          <Button style={buttonStyle1}>{team.name}</Button>
        </div>
      </div>
    );
  });

  return (
    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
      <div style={teamRowStyle} className="row">
        <Button
          onClick={() => {
            dispathRedux(getAllPlayers(""));
          }}
          style={buttonStyle1}
        >
          <img style={imgButtonStyle2} alt="Re" src="/imgs/icons/Re.png"></img>
        </Button>
      </div>
      {items}
      <TeamInfoModal team={team} />
    </div>
  );
}

export default TeamsColumn;
