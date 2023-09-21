import { getCompetitionsAPI } from "../../API/CompetitionAPIs";
import { GET_ALL_COMPETITIONS } from "../Contants/ActionTypes";

const getAllCompetitionsRedux = (competitions) => {
  return {
    type: GET_ALL_COMPETITIONS,
    payload: competitions,
  };
};

const getAllCompetitions = () => {
  return (dispatch) => {
    return getCompetitionsAPI().then((res) => {
      dispatch(getAllCompetitionsRedux(res));
    });
  };
};
export { getAllCompetitions, getAllCompetitionsRedux };
