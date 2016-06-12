import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter.js';
// import pageSkip from './pageSkip';

const rootReducer = combineReducers({
  visibilityFilter,
});

export default rootReducer;
