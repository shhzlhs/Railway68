
import { rootReducers } from "../Reducers/RootReducers";
import { applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
const { createStore } = require("redux");
const middleware = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const reduxStore = createStore(rootReducers, middleware);

export { reduxStore };
