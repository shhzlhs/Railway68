import { api } from "./api";

const getCompetitionsAPI = () => {
  return api("GET", "competitions/", null);
};

// export
export { getCompetitionsAPI };
