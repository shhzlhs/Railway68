import { SET_ASK_STATE, SET_IMG_ASK } from "../Contants/ActionsType";

const setAskImg = (imgAsk) => {
  return { type: SET_IMG_ASK, payload: imgAsk };
};
const setAskState = (askState) => {
  return { type: SET_ASK_STATE, payload: askState };
};
export { setAskState, setAskImg };
