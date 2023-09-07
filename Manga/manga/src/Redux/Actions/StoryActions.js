import { getStoriesAPI } from "../../API/StoryAPIs";
import { GET_STORIES } from "../Contants/ActionsType";

const getStoriesRedux = (stories) => {
  return {
    type: GET_STORIES,
    payload: stories,
  };
};
const getStories = (search) => {
  return (dispath) => {
    return getStoriesAPI(search).then((res) => {
      dispath(getStoriesRedux(res));
    });
  };
};
export { getStories, getStoriesRedux };
