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

var initialState = false;
const showDeleteTeamFormReducers = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_DELETE_TEAMS_FORM:
      return true;
    case CLOSE_DELETE_TEAMS_FORM:
      return false;
    default:
      return state;
  }
};
const showTeamInfoReducers = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_TEAMINFO:
      return true;
    case CLOSE_TEAMINFO:
      return false;
    default:
      return false;
  }
};
const showAddTeamReducers = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ADD_TEAM:
      return true;
    case CLOSE_ADD_TEAM:
      return false;
    default:
      return false;
  }
};
const showSingleDeleteTeamReducers = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SINGLE_DELETE_TEAM:
      return true;
    case CLOSE_SINGLE_DELETE_TEAM:
      return false;
    default:
      return false;
  }
};
const showAddPlayerReducers = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ADD_PLAYER:
      return true;
    case CLOSE_ADD_PLAYER:
      return false;
    default:
      return false;
  }
};
const showEditPlayerReducers = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_EDIT_PLAYER:
      return true;
    case CLOSE_EDIT_PLAYER:
      return false;
    default:
      return false;
  }
};
const showDeletePlayersReducers = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_DELETE_PLAYERS:
      return true;
    case CLOSE_DELETE_PLAYERS:
      return false;
    default:
      return false;
  }
};
const showSingleDeletePlayerReducers = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SINGLE_DELETE_PLAYER:
      return true;
    case CLOSE_SINGLE_DELETE_PLAYER:
      return false;
    default:
      return false;
  }
};
export {
  showDeleteTeamFormReducers,
  showTeamInfoReducers,
  showAddTeamReducers,
  showSingleDeleteTeamReducers,
  showAddPlayerReducers,
  showDeletePlayersReducers,
  showEditPlayerReducers,
  showSingleDeletePlayerReducers,
};
