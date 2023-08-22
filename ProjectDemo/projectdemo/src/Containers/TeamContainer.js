import React from "react";
import CreateTeamButton from "../Components/UITeam/CreateTeamButton";
import ResultTeamFormItem from "../Components/UITeam/ResultTeamFormItem";
import ResultTeamForm from "../Components/UITeam/ResultTeamForm";

function TeamContainer(props) {
  return (
    <div>
      <CreateTeamButton />
      <ResultTeamForm />
      <ResultTeamFormItem />
    </div>
  );
}

export default TeamContainer;
