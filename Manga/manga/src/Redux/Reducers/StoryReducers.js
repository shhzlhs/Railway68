import { GET_STORIES } from "../Contants/ActionsType";

var initialState = [];

const storyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STORIES:
      state = action.payload;
      return [...state];
    default:
      return [...state];
  }
};
export { storyReducer };
