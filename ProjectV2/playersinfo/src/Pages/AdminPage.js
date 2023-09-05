import React, { useEffect } from "react";
import CompetitionsBar from "../Components/CompetitionsBar";
import TeamsAdmin from "../Components/TeamsAdmin";
import PlayersAdmin from "../Components/PlayersAdmin";
import { getAllCompetitions } from "../Redux/Actions/CompetitionActions";
import { getAllTeams } from "../Redux/Actions/TeamActions";
import { getAllPlayers } from "../Redux/Actions/PlayerActions";
import { useDispatch } from "react-redux";

function AdminPage(props) {
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
        <TeamsAdmin />
        <PlayersAdmin />
      </div>
    </div>
  );
}

export default AdminPage;
