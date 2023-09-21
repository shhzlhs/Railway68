import { getPlayersAPI } from "../../API/PlayerAPIs";
import {
  addTeamAPI,
  deleteTeamsAPI,
  getTeamsAPI,
  getTeamsByCompetitionAPI,
} from "../../API/TeamAPIs";
import {
  GET_ALL_TEAMS,
  GET_TEAM_BY_COMPETITION,
} from "../Contants/ActionTypes";
import { getAllPlayersRedux } from "./PlayerActions";

const getAllTeamsRedux = (teams) => {
  return {
    type: GET_ALL_TEAMS,
    payload: teams,
  };
};
const getTeamsByCompetitionRedux = (teams) => {
  return {
    type: GET_TEAM_BY_COMPETITION,
    payload: teams,
  };
};
const getAllTeams = () => {
  return (dispatch) => {
    return getTeamsAPI().then((res) => {
      dispatch(getAllTeamsRedux(res));
    });
  };
};
const getTeamsByCompetition = (competitionId) => {
  return (dispatch) => {
    return getTeamsByCompetitionAPI(competitionId).then((res) => {
      dispatch(getTeamsByCompetitionRedux(res));
    });
  };
};

const deleteTeams = (ids) => {
  return (dispatch) => {
    deleteTeamsAPI(ids).then(() => {
      return getTeamsAPI().then((res) => {
        dispatch(getAllTeamsRedux(res));
        getPlayersAPI().then((ress) => {
          dispatch(getAllPlayersRedux(ress));
        });
      });
    });
  };
};
const addTeam = (team) => {
  return (dispatch) => {
    addTeamAPI(team).then(() => {
      return getTeamsAPI().then((res) => {
        dispatch(getAllTeamsRedux(res));
      });
    });
  };
};
export {
  getAllTeams,
  getAllTeamsRedux,
  getTeamsByCompetition,
  getTeamsByCompetitionRedux,
  deleteTeams,
  addTeam,
};
