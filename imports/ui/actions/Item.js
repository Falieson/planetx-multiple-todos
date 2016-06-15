export const TASK_ITEMS_FETCH_WAITING = 'TASK_ITEMS_FETCH_WAITING';
export function taskItemsSubscriptionPending(listId) {
  return dispatch => {
    dispatch(waitingForTaskItemSubscription(listId));
  }
}
function waitingForTaskItemSubscription(listId) {
  return {
    type: TASK_ITEMS_FETCH_WAITING,
    listId
  }
}


import { TaskItemViews } from '../../api/taskItems/views.js';
export const TASK_ITEMS_FETCH_SUCCESS = 'TASK_ITEMS_FETCH_SUCCESS';
export function fetchTaskItems(listId) {
  return dispatch => {
    const Items = TaskItemViews.find.select(null, listId);
    dispatch(receiveTaskItems(Items, listId));
  }
}
function receiveTaskItems(data, listId) {
  return {
    type: TASK_ITEMS_FETCH_SUCCESS,
    listId,
    taskItems: data,
    receivedAt: Date.now()
  }
}


export const TASK_ITEMS_SHOW_COMPLETED = 'TASK_ITEMS_SHOW_COMPLETED';
export const TASK_ITEMS_HIDE_COMPLETED = 'TASK_ITEMS_HIDE_COMPLETED';
export function setTaskItemsCompletedFilter(listId, showCompleted) {
  if(showCompleted){
    return dispatch => {
      dispatch(showCompletedTaskItems(listId))
    }
  } else {
    return dispatch => {
      dispatch(hideCompletedTaskItems(listId))
    }
  }
}
function showCompletedTaskItems(listId){
  return {
    type: TASK_ITEMS_SHOW_COMPLETED,
    listId
  }
}
function hideCompletedTaskItems(listId){
  return {
    type: TASK_ITEMS_HIDE_COMPLETED,
    listId
  }
}


import { insertTask } from '../../api/taskItems/methods.js';
export const TASK_ITEM_CREATE_OPTIMISTIC = 'TASK_ITEM_CREATE_OPTIMISTIC';
export function addTaskItemToList(listId, title) {
  return (dispatch, getState) => {
    dispatch(newItemOptimist(listId, title, getState()));

    insertTask.call({listId, title}
      // ,(err, res) => {
      // if (res) {
      //   dispatch(fetchTaskItems(listId));
      // }
      // }
    );
  }
}
function newItemOptimist(listId, title, state){
  const {TaskItems} = state;

  TaskItems[listId].items.push({id:"optimist", title});

  return {
    type: TASK_ITEM_CREATE_OPTIMISTIC,
    listId,
    taskItems: TaskItems[listId].items
  };
};


import { updateTask } from '../../api/taskItems/methods.js';
import { addGetIndexBy } from '../../lib/javascript.js';
export const TASK_ITEM_COMPLETE_OPTIMISTIC = 'TASK_ITEM_COMPLETE_OPTIMISTIC';
export function completeTaskItem(listId, taskId, completed) {
  return (dispatch, getState) => {
    dispatch( completeItemOptimist(listId, taskId, completed, getState()) );

    updateTask.call({taskId, completed});
  }
}
function completeItemOptimist(listId, taskId, completed, state){
  const {TaskItems} = state;

  let tasks = TaskItems[listId].items
  const selector = {_id: taskId};
  let task = _.find(tasks, selector);
  task.completed = completed;

  addGetIndexBy();
  const idx = tasks.getIndexBy("_id", taskId);

  tasks.splice(idx, 1, task);

  return {
    type: TASK_ITEM_COMPLETE_OPTIMISTIC,
    taskItems: tasks
  };
};
