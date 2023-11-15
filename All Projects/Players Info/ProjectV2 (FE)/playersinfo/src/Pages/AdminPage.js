import React from "react";
import CompetitionsBar from "../Components/CompetitionsBar";
import TeamsAdmin from "../Components/TeamsAdmin";
import PlayersAdmin from "../Components/PlayersAdmin";
function AdminPage(props) {
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
