import { getCompetitionsAPI } from "../../API/CompetitionAPIs";
import { GET_ALL_COMPETITIONS } from "../Contants/ActionTypes";

const getAllCompetitionsRedux = (competitions) => {
  return {
    type: GET_ALL_COMPETITIONS,
    payload: competitions,
  };
};

const getAllCompetitions = () => {
  return (dispath) => {
    return getCompetitionsAPI().then((res) => {
      dispath(getAllCompetitionsRedux(res));
    });
  };
};
export { getAllCompetitions, getAllCompetitionsRedux };
