//# SUBSCRIBE TO TASK LISTS VIA METEOR MONGO API
import { TaskListSubs } from '../../api/taskLists/subscriptions.js';
import { TaskListViews } from '../../api/taskLists/views.js';

export const TASK_LISTS_SUBSCRIBE_CREATE = 'TASK_LISTS_SUBSCRIBE_CREATE';
export const TASK_LISTS_SUBSCRIBE_PENDING = 'TASK_LISTS_SUBSCRIBE_PENDING';
export const TASK_LISTS_FETCH_SUCCESS = 'TASK_LISTS_FETCH_SUCCESS';

export function subscribeAndFetchTaskLists(){
  return (dispatch, getState) => {
    const state = getState();
    const startSubscription = startSubscriptionToTaskLists(state);
    const subscriptionReady = subscriptionToTaskListsReady(state);

    if(startSubscription){
      console.log("if startSubscription -> createSubscription");

      return createTaskListSubscription();
    }
    // else, subscription exists so ...
    else if( subscriptionReady ){
      console.log("if subscriptionReady -> fetchCollection");

      return fetchTaskList();
    }
    // subscription exists but not ready
    else {
      console.log("subscription exists but not ready");
      return waitingForSubscription();
    }
  }
}

function startSubscriptionToTaskLists(state) {
  const { TaskLists } = state;
  if(TaskLists && TaskLists.subscription){
    return false
  } else {
    return true
  }
}
function createTaskListSubscription() {
  return dispatch => {
    const subscription = TaskListSubs.find.all();
    return dispatch( subscribedToTaskLists(subscription) );
  }
}
function subscribedToTaskLists(subscription) {
  return {
    type: TASK_LISTS_SUBSCRIBE_CREATE,
    subscription,
    receivedAt: Date.now()
  }
}

function subscriptionToTaskListsReady(state) {
  const { TaskLists } = state;
  const subscriptionReady = TaskLists && TaskLists.subscription.ready();
  if(subscriptionReady){
    return true
  } else {
    return false
  }
}
function fetchTaskList() {
  return dispatch => {
    const collection = TaskListViews.find.all();
    return dispatch( receiveTaskLists(collection) );
  }
}
function receiveTaskLists(data) {
  return {
    type: TASK_LISTS_FETCH_SUCCESS,
    taskLists: data,
    receivedAt: Date.now()
  }
}

function waitingForSubscription() {
  return dispatch => {
    const collection = TaskListViews.find.all();
    return dispatch( taskListsSubscriptionPending() );
  }
}
function taskListsSubscriptionPending() {
  return {
    type: TASK_LISTS_SUBSCRIBE_PENDING,
  }
}
