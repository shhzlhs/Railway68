import {
  ADD_PLAYER,
  DELETE_PLAYERS,
  GET_ALL_PLAYERS,
  GET_PLAYERS_BY_TEAM,
  SET_PLAYER_EDIT,
  SET_SEARCH,
  UPDATE_PLAYER,
} from "../Contants/ActionTypes";

var initialState = [];
var iinitialState = { id: "1", name: "NA", teamId: "1" };
const playerReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PLAYERS:
      return [...action.payload];
    case GET_PLAYERS_BY_TEAM:
      return [...action.payload];
    case ADD_PLAYER:
      return [...state, action.payload];
    case UPDATE_PLAYER:
      const playersUpdated = state.map((p) =>
        p.id === action.payload.id ? action.payload : p
      );
      return [...playersUpdated];
    case DELETE_PLAYERS:
      const ids = action.payload.map((a) => parseInt(a));
      const newPlayers = state.filter((p) => !ids.includes(p.id));
      return [...newPlayers];
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
