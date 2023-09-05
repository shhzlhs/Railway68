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
  return (dispath) => {
    return getTeamsAPI().then((res) => {
      dispath(getAllTeamsRedux(res));
    });
  };
};
const getTeamsByCompetition = (competitionId) => {
  return (dispath) => {
    return getTeamsByCompetitionAPI(competitionId).then((res) => {
      dispath(getTeamsByCompetitionRedux(res));
    });
  };
};

const deleteTeams = (ids) => {
  return (dispath) => {
    deleteTeamsAPI(ids).then(() => {
      return getTeamsAPI().then((res) => {
        dispath(getAllTeamsRedux(res));
        getPlayersAPI().then((ress) => {
          dispath(getAllPlayersRedux(ress));
        });
      });
    });
  };
};
const addTeam = (team) => {
  return (dispath) => {
    addTeamAPI(team).then(() => {
      return getTeamsAPI().then((res) => {
        dispath(getAllTeamsRedux(res));
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
