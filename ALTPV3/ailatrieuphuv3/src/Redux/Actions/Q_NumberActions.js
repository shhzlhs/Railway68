import { SET_Q_NUMBER } from "../Contants/ActionsType";

export const setQNumber = (qNumber) => {
  return {
    type: SET_Q_NUMBER,
    payload: qNumber,
  };
};
