import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCompetitions } from "./Redux/Actions/CompetitionActions";
import CompetitionsBar from "./Components/CompetitionsBar";
import { getAllTeams } from "./Redux/Actions/TeamActions";
import TeamsColumn from "./Components/TeamsColumn";
import { getAllPlayers } from "./Redux/Actions/PlayerActions";
import PlayerTable from "./Components/PlayerTable";
import Ads from "./Components/Ads";

function AppContainer(props) {
  let dispathRedux = useDispatch();
  useEffect(() => {
    dispathRedux(getAllCompetitions());
    dispathRedux(getAllTeams());
    dispathRedux(getAllPlayers());
  }, []);
  return (
    <div className="row">
      <CompetitionsBar />

      <div className="row">
        <TeamsColumn />
        <PlayerTable />
        <Ads />
      </div>
    </div>
  );
}

export default AppContainer;
