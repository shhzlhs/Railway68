import React, { useEffect, useState } from "react";
import CreateButton from "../Components/UIPlayer/CreateButton";
import ResultForm from "../Components/UIPlayer/ResultForm";
import ModalCreateNewPlayer from "../Components/UIPlayer/CreateNewPlayer/ModalCreateNewPlayer";
import {
  addPlayerAPI,
  deletePlayerAPI,
  editPlayerAPI,
  getPlayersAPI,
} from "../API/PlayerAPI";
import { getTeamsAPI } from "../API/TeamAPI";

function PlayerContainer(props) {
  let [showForm, setShowForm] = useState(false);
  let onHandleCreateButton = () => {
    setShowForm(true);
  };

  let onHandleCloseModal = () => {
    setShowForm(false);
  };
  let [players, setPlayers] = useState([]);
  let [teams, setTeams] = useState([]);
  let onHandleCreatePlayer = (player) => {
    // players.push(player);
    // setPlayers(players);
    // localStorage.setItem("players", JSON.stringify(players));
    // setShowForm(false);
    // console.log(localStorage.getItem("players"));

    addPlayerAPI(player).then((response) => {
      console.log(response);
      fetchPlayers();
    });
    console.log(player);
    setShowForm(false);
  };
  let onHandleEditPlayer = (player) => {
    console.log(player);
    editPlayerAPI(player).then((response) => {
      fetchPlayers();
    });
  };
  let onHandleDeletePlayer = (player) => {
    console.log(player);
    deletePlayerAPI(player).then((response) => {
      fetchPlayers();
    });
  };

  let fetchPlayers = () => {
    getPlayersAPI().then((response) => {
      setPlayers(response);
    });
  };
  let fetchTeams = function () {
    getTeamsAPI().then((response) => {
      setTeams(response);
    });
  };
  useEffect(() => {
    fetchPlayers();
    fetchTeams();
  }, []);
  return (
    <div style={{ border: "solid 3px black" }}>
      <CreateButton onHandleCreateButton={onHandleCreateButton} />
      <ModalCreateNewPlayer
        showForm={showForm}
        onHandleCloseModal={onHandleCloseModal}
        onHandleCreatePlayer={onHandleCreatePlayer}
        teams={teams}
      />
      <ResultForm
        onHandleEditPlayer={onHandleEditPlayer}
        onHandleDeletePlayer={onHandleDeletePlayer}
        teams={teams}
        players={players}
      />
      <CreateButton onHandleCreateButton={onHandleCreateButton} />
    </div>
  );
}

export default PlayerContainer;
