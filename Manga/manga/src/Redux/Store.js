import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { rootReducers } from "./Reducers/RootReducer";
const { createStore } = require("redux");
const middleware = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducers, middleware);

export { store };
