import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import common from './common';

export default combineReducers({
  common,
  user,
  runtime,
});
