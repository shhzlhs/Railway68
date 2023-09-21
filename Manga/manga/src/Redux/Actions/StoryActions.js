import { addStoryAPI, getStoriesAPI } from "../../API/StoryAPIs";
import {
  GET_STORIES,
  SET_SEARCH,
  SET_STORIES_AWAIT,
} from "../Contants/ActionsType";

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
const addStory = (story) => {
  return (dispath) => {
    addStoryAPI(story).then(() => {
      return getStoriesAPI().then((res) => {
        dispath(getStoriesRedux(res));
      });
    });
  };
};
const setStoryAwait = (stories) => {
  return { type: SET_STORIES_AWAIT, payload: stories };
};
const setSearchRedux = (search) => {
  return { type: SET_SEARCH, payload: search };
};
export { getStories, getStoriesRedux, setStoryAwait, addStory, setSearchRedux };
