import {
  GET_STORIES,
  SET_SEARCH,
  SET_STORIES_AWAIT,
} from "../Contants/ActionsType";

var initialState = [];
var initialSearch = "";
const searchReducer = (state = initialSearch, action) => {
  switch (action.type) {
    case SET_SEARCH:
      state = action.payload;
      return state;

    default:
      return state;
  }
};
const storyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STORIES:
      state = action.payload;
      return [...state];
    default:
      return [...state];
  }
};
const storyAwaitReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STORIES_AWAIT:
      state = action.payload;
      return [...state];
    default:
      return [...state];
  }
};
export { storyReducer, storyAwaitReducer, searchReducer };
