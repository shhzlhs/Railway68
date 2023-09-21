import { combineReducers } from "redux";
import { categoriesReducer } from "./CategoryReducers";
import {
  searchReducer,
  storyAwaitReducer,
  storyReducer,
} from "./StoryReducers";
import { authorReducer } from "./AuthorReducers";
const rootReducers = combineReducers({
  categories: categoriesReducer,
  stories: storyReducer,
  storyAwaits: storyAwaitReducer,
  authors: authorReducer,
  search: searchReducer,
});
export { rootReducers };
