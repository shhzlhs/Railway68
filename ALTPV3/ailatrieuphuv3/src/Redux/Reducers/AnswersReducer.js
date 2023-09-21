import { SET_ANSWERS } from "../Contants/ActionsType";

const initialState = [
  { isTrue: "N", content: "NA" },
  { isTrue: "N", content: "NA" },
  { isTrue: "N", content: "NA" },
  { isTrue: "Y", content: "NA" },
];
const answersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ANSWERS:
      state = action.payload;
      return state;
    default:
      return state;
  }
};
export { answersReducer };
