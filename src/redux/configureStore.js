import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import ThunkMiddleware from "redux-thunk";

const reducer = combineReducers({
  redicerslist,
});

const store = createStore(reducer, applyMiddleware(ThunkMiddleware, logger));

export default store;
