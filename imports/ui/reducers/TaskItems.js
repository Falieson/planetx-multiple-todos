import {
  TASK_ITEMS_FETCH_WAITING, TASK_ITEMS_FETCH_SUCCESS,
  TASK_ITEMS_SHOW_COMPLETED, TASK_ITEMS_HIDE_COMPLETED,
  TASK_ITEM_CREATE_OPTIMISTIC,
  TASK_ITEM_COMPLETE_OPTIMISTIC
} from '../actions/Item.js';


export function TaskItems(state = {
  items: [],
  subscriptionReady: false,
  showCompleted: true,
}, action) {
  switch (action.type) {
    case TASK_ITEMS_FETCH_WAITING:
      return Object.assign({}, state, {
        listId: action.listId,
        subscriptionReady: false,
      })
    case TASK_ITEMS_FETCH_SUCCESS:
      return Object.assign({}, state, {
        listId: action.listId,
        items: action.taskItems,
        lastUpdated: action.receivedAt,
        subscriptionReady: true,
      })


    case TASK_ITEMS_SHOW_COMPLETED:
      return Object.assign({}, state, {
        showCompleted: true,
      })
    case TASK_ITEMS_HIDE_COMPLETED:
      return Object.assign({}, state, {
        showCompleted: false,
      })

    case TASK_ITEM_COMPLETE_OPTIMISTIC:
    case TASK_ITEM_CREATE_OPTIMISTIC:
      return Object.assign({}, state, {
        items: action.taskItems,
      })

    default:
      return state;
  }
};

export default function TaskItemsByList(state = { }, action) {
  switch (action.type) {
    case TASK_ITEMS_FETCH_WAITING:
    case TASK_ITEMS_FETCH_SUCCESS:
    case TASK_ITEMS_SHOW_COMPLETED:
    case TASK_ITEMS_HIDE_COMPLETED:
    case TASK_ITEM_CREATE_OPTIMISTIC:
    case TASK_ITEM_COMPLETE_OPTIMISTIC:
      return Object.assign({}, state, {
        [action.listId]: TaskItems(state[action.listId], action)
      })

    default:
      return state
  }
}
