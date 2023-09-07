import { combineReducers } from "redux";
import { categoriesReducer } from "./CategoryReducers";
import { storyReducer } from "./StoryReducers";
const rootReducers = combineReducers({
  categories: categoriesReducer,
  stories: storyReducer,
});
export { rootReducers };
