//# SUBSCRIBE TO TASK LISTS VIA METEOR MONGO API
import { TaskListViews } from '../../api/taskLists/views.js';

export const TASK_LISTS_FETCH_WAITING = 'TASK_LISTS_FETCH_WAITING';
export const TASK_LISTS_FETCH_SUCCESS = 'TASK_LISTS_FETCH_SUCCESS';

// ## Deliver Task Lists
export function fetchTaskLists() {
  return dispatch => {
    const Lists = TaskListViews.find.all();

    dispatch(receiveTaskLists(Lists));
  }
}

function receiveTaskLists(data) {
  return {
    type: TASK_LISTS_FETCH_SUCCESS,
    taskLists: data,
    receivedAt: Date.now()
  }
}


// ## Waiting for Subscription
export function taskListSubscriptionPending() {
  return dispatch => {
    dispatch(waitingForTaskListSubscription());
  }
}

function waitingForTaskListSubscription() {
  return {
    type: TASK_LISTS_FETCH_WAITING
  }
}
