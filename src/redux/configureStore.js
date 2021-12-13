import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import ThunkMiddleware from 'redux-thunk';
import missionsReducer from './Missions/missions';
import rocketReducer from './Rockets/rockets';

const reducer = combineReducers({
  missionsReducer,
  rocketReducer,
});

const store = createStore(reducer, applyMiddleware(ThunkMiddleware, logger));

export default store;
