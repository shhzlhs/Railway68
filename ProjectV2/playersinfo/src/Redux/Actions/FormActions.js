import {
  CLOSE_ADD_PLAYER,
  CLOSE_ADD_TEAM,
  CLOSE_DELETE_PLAYERS,
  CLOSE_DELETE_TEAMS_FORM,
  CLOSE_EDIT_PLAYER,
  CLOSE_SINGLE_DELETE_PLAYER,
  CLOSE_SINGLE_DELETE_TEAM,
  CLOSE_TEAMINFO,
  SHOW_ADD_PLAYER,
  SHOW_ADD_TEAM,
  SHOW_DELETE_PLAYERS,
  SHOW_DELETE_TEAMS_FORM,
  SHOW_EDIT_PLAYER,
  SHOW_SINGLE_DELETE_PLAYER,
  SHOW_SINGLE_DELETE_TEAM,
  SHOW_TEAMINFO,
} from "../Contants/ActionTypes";

const showDeleteTeamsForm = () => {
  return {
    type: SHOW_DELETE_TEAMS_FORM,
  };
};
const closeDeleteTeamsForm = () => {
  return {
    type: CLOSE_DELETE_TEAMS_FORM,
  };
};
const showTeamInfo = () => {
  return {
    type: SHOW_TEAMINFO,
  };
};
const closeTeamInfo = () => {
  return {
    type: CLOSE_TEAMINFO,
  };
};
const showAddTeam = () => {
  return {
    type: SHOW_ADD_TEAM,
  };
};
const closeAddTeam = () => {
  return {
    type: CLOSE_ADD_TEAM,
  };
};
const showSingleDeleteTeam = () => {
  return {
    type: SHOW_SINGLE_DELETE_TEAM,
  };
};
const closeSingleDeleteTeam = () => {
  return {
    type: CLOSE_SINGLE_DELETE_TEAM,
  };
};
const showAddPlayer = () => {
  return {
    type: SHOW_ADD_PLAYER,
  };
};
const closeAddPlayer = () => {
  return {
    type: CLOSE_ADD_PLAYER,
  };
};
const showEditPlayer = () => {
  return {
    type: SHOW_EDIT_PLAYER,
  };
};
const closeEditPlayer = () => {
  return {
    type: CLOSE_EDIT_PLAYER,
  };
};
const showDeletePlayers = () => {
  return {
    type: SHOW_DELETE_PLAYERS,
  };
};
const closeDeletePlayers = () => {
  return {
    type: CLOSE_DELETE_PLAYERS,
  };
};
const showSingleDeletePlayer = () => {
  return {
    type: SHOW_SINGLE_DELETE_PLAYER,
  };
};
const closeSingleDeletePlayer = () => {
  return {
    type: CLOSE_SINGLE_DELETE_PLAYER,
  };
};
export {
  showDeleteTeamsForm,
  closeDeleteTeamsForm,
  showTeamInfo,
  closeTeamInfo,
  showAddTeam,
  closeAddTeam,
  showSingleDeleteTeam,
  closeSingleDeleteTeam,
  showAddPlayer,
  closeAddPlayer,
  showDeletePlayers,
  showEditPlayer,
  showSingleDeletePlayer,
  closeDeletePlayers,
  closeEditPlayer,
  closeSingleDeletePlayer,
};
