import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import {
  buttonStyle1,
  competitionButtonStyle,
  imgButtonStyle1,
  midStyle,
} from "../Styles";
import {
  getAllTeams,
  getTeamsByCompetition,
} from "../Redux/Actions/TeamActions";
import { getAllPlayers } from "../Redux/Actions/PlayerActions";
function CompetitionsBar(props) {
  let reduxState = useSelector((state) => state);
  let dispathRedux = useDispatch();

  let competitions = reduxState.competitions;

  const items = competitions.map((competition, index) => {
    const src = `/imgs/logoes/${competition.logo}`;
    return (
      <div
        key={index}
        style={competitionButtonStyle}
        className="col-xs-2 col-sm-2 col-md-2 col-lg-2"
      >
        <Button
          onClick={() => {
            dispathRedux(getTeamsByCompetition(competition.id));
          }}
          style={buttonStyle1}
        >
          <img style={imgButtonStyle1} alt={competition.name} src={src}></img>
        </Button>
      </div>
    );
  });

  return (
    <div style={midStyle} className="row">
      <div
        style={competitionButtonStyle}
        className="col-xs-2 col-sm-2 col-md-2 col-lg-2"
      >
        <Button
          onClick={() => {
            dispathRedux(getAllTeams());
            dispathRedux(getAllPlayers(""));
          }}
          style={buttonStyle1}
        >
          <img
            style={imgButtonStyle1}
            alt="all"
            src="/imgs/logoes/all.png"
          ></img>
        </Button>
      </div>
      {items}
    </div>
  );
}

export default CompetitionsBar;
