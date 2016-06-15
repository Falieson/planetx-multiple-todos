import {
  TASK_LISTS_FETCH_WAITING,
  TASK_LISTS_FETCH_SUCCESS,
} from '../actions/List.js';

export default function TaskLists(state = {
  items: [],
  subscriptionReady: false,
}, action) {
  switch (action.type) {
    case TASK_LISTS_FETCH_WAITING:
      return Object.assign({}, state, {
        subscriptionReady: false
      })

    case TASK_LISTS_FETCH_SUCCESS:
      return Object.assign({}, state, {
        items: action.taskLists,
        lastUpdated: action.receivedAt,
        subscriptionReady: true
      })

    default:
      return state
  }
};
