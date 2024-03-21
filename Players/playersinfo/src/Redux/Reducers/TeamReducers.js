import {
  GET_ALL_TEAMS,
  GET_TEAM_BY_COMPETITION,
} from "../Contants/ActionTypes";

var initialState = [];

const teamReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TEAMS:
      state = action.payload;
      return [...state];
    case GET_TEAM_BY_COMPETITION:
      state = action.payload;
      return [...state];
    default:
      return [...state];
  }
};
export { teamReducers };
