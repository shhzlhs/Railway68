import {
  GET_ALL_PLAYERS,
  GET_PLAYERS_BY_TEAM,
  SET_PLAYER_EDIT,
  SET_SEARCH,
} from "../Contants/ActionTypes";

var initialState = [];
var iinitialState = { id: "1", name: "NA", teamId: "1" };
const playerReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PLAYERS:
      state = action.payload;
      return [...state];

    case GET_PLAYERS_BY_TEAM:
      state = action.payload;
      return [...state];
    default:
      return [...state];
  }
};
const setPlayerEditReducers = (state = iinitialState, action) => {
  switch (action.type) {
    case SET_PLAYER_EDIT:
      state = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};
const setSearchReducer = (state = "", action) => {
  switch (action.type) {
    case SET_SEARCH:
      state = action.payload;
      return state;
    default:
      return state;
  }
};
export { playerReducers, setPlayerEditReducers, setSearchReducer };
