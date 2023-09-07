import { api } from "./API";

const getStoriesAPI = (search) => {
  const url = "stories?search=" + search;
  return api("GET", url, null);
};

const addStoryAPI = (story) => {
  return api("POST", "stories/", story);
};

const editStories = (story) => {
  return api("PUT", "stories/", story);
};

const deleteStoriesAPI = (ids) => {
  const url = `stories/${ids}`;
  return api("DELETE", url, null);
};

export { deleteStoriesAPI, editStories, addStoryAPI, getStoriesAPI };
