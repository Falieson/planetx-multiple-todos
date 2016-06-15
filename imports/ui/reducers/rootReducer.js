import { combineReducers } from 'redux';
import TaskLists from './TaskLists.js';
import TaskItemsByList from './TaskItems.js';

const rootReducer = combineReducers({
  TaskLists,
  TaskItems: TaskItemsByList,
});

export default rootReducer;
