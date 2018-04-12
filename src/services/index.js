import { combineReducers } from 'redux';

import app from './App/appReducer';

const combinedReducer = combineReducers({
  app
});

export default combinedReducer;
