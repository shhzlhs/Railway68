import { GET_ALL_COMPETITIONS } from "../Contants/ActionTypes";

var initialState = [];

const competitionReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COMPETITIONS:
      state = action.payload;
      return [...state];

    default:
      return [...state];
  }
};
export { competitionReducers };
