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
  SET_SEARCH,
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
const getAllPlayers = (search) => {
  return (dispatch) => {
    return getPlayersAPI(search).then((res) => {
      dispatch(getAllPlayersRedux(res));
    });
  };
};
const getPlayersByTeams = (teamIds) => {
  return (dispatch) => {
    return getPlayersByTeamsAPI(teamIds).then((res) => {
      dispatch(getPlayersByTeamRedux(res));
    });
  };
};
const addPlayer = (player) => {
  return (dispatch) => {
    addPlayerAPI(player).then(() => {
      return getPlayersAPI("").then((res) => {
        dispatch(getAllPlayersRedux(res));
      });
    });
  };
};
const deletePlayers = (ids) => {
  return (dispatch) => {
    deletePlayersAPI(ids).then(() => {
      return getPlayersAPI("").then((res) => {
        dispatch(getAllPlayersRedux(res));
      });
    });
  };
};
const editPlayer = (player) => {
  return (dispatch) => {
    editPlayerAPI(player).then(() => {
      return getPlayersAPI("").then((res) => {
        dispatch(getAllPlayersRedux(res));
      });
    });
  };
};
const setSearch = (search) => {
  return {
    type: SET_SEARCH,
    payload: search,
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
  setSearch,
};
