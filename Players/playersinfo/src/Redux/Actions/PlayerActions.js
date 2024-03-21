import {
  addPlayerAPI,
  deletePlayersAPI,
  editPlayerAPI,
  getPlayersAPI,
  getPlayersByTeamsAPI,
} from "../../API/PlayerAPIs";
import {
  ADD_PLAYER,
  DELETE_PLAYERS,
  GET_ALL_PLAYERS,
  GET_PLAYERS_BY_TEAM,
  SET_PLAYER_EDIT,
  SET_SEARCH,
  UPDATE_PLAYER,
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
const getAllPlayers = (search, ids) => {
  return (dispatch) => {
    return getPlayersAPI(search, ids).then((res) => {
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
const addPlayerRedux = (player) => {
  return { type: ADD_PLAYER, payload: player };
};
const addPlayer = (player) => {
  return (dispatch) => {
    addPlayerAPI(player).then((res) => {
      dispatch(addPlayerRedux(res));
    });
  };
};
const deletePlayersRedux = (ids) => {
  return { type: DELETE_PLAYERS, payload: ids };
};
const deletePlayers = (ids) => {
  return (dispatch) => {
    deletePlayersAPI(ids).then(() => {
      dispatch(deletePlayersRedux(ids));
    });
  };
};
const editPlayerRedux = (player) => {
  return { type: UPDATE_PLAYER, payload: player };
};
const editPlayer = (player) => {
  return (dispatch) => {
    editPlayerAPI(player).then((res) => {
      dispatch(editPlayerRedux(res));
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
