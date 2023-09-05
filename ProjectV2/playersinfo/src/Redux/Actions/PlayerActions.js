import {
  addPlayerAPI,
  deletePlayersAPI,
  editPlayerAPI,
  getPlayersAPI,
  getPlayersByTeamsAPI,
} from "../../API/PlayerAPIs";
import {
  GET_ALL_PLAYERS,
  GET_PLAYERS_BY_TEAM,
  SET_PLAYER_EDIT,
} from "../Contants/ActionTypes";

const getAllPlayersRedux = (players) => {
  return {
    type: GET_ALL_PLAYERS,
    payload: players,
  };
};
const getPlayersByTeamRedux = (players) => {
  return {
    type: GET_PLAYERS_BY_TEAM,
    payload: players,
  };
};
const setPlayerEdit = (playerEdit) => {
  return {
    type: SET_PLAYER_EDIT,
    payload: playerEdit,
  };
};
const getAllPlayers = () => {
  return (dispath) => {
    return getPlayersAPI().then((res) => {
      dispath(getAllPlayersRedux(res));
    });
  };
};
const getPlayersByTeams = (teamIds) => {
  return (dispath) => {
    return getPlayersByTeamsAPI(teamIds).then((res) => {
      dispath(getPlayersByTeamRedux(res));
    });
  };
};
const addPlayer = (player) => {
  return (dispath) => {
    addPlayerAPI(player).then(() => {
      return getPlayersAPI().then((res) => {
        dispath(getAllPlayersRedux(res));
      });
    });
  };
};
const deletePlayers = (ids) => {
  return (dispath) => {
    deletePlayersAPI(ids).then(() => {
      return getPlayersAPI().then((res) => {
        dispath(getAllPlayersRedux(res));
      });
    });
  };
};
const editPlayer = (player) => {
  return (dispath) => {
    editPlayerAPI(player).then(() => {
      return getPlayersAPI().then((res) => {
        dispath(getAllPlayersRedux(res));
      });
    });
  };
};
export {
  getAllPlayersRedux,
  getAllPlayers,
  getPlayersByTeams,
  getPlayersByTeamRedux,
  addPlayer,
  deletePlayers,
  editPlayer,
  setPlayerEdit,
};
