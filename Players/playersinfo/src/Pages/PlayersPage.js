import React from "react";
import CompetitionsBar from "../Components/CompetitionsBar";
import TeamsColumn from "../Components/TeamsColumn";
import PlayerTable from "../Components/PlayerTable";
import Ads from "../Components/Ads";

function PlayersPage(props) {
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

export default PlayersPage;
