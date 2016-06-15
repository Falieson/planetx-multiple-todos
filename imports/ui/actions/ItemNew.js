import { insertTask } from '../../api/taskItems/methods.js';

const newItemOptimist = (title, listId) => {
  return {
    type: 'ADD_ITEM_OPTMISTIC',
    title,
    listId,
  };
};

const newItemConfirmed = (title, listId) => {
  return {
    type: 'ADD_ITEM_CONFIRM',
    title,
    listId,
  }
};

export default function addTaskItem(dispatch, getState) {
  const title = getState().title;
  const listId = getState().listId;

  dispatch(newItemOptimist(title, listId));

  return insertTask.call({listId, title}, (err, res) => {
    if (res) {
      dispatch(newItemConfirmed(res.title, res.listId));
    }
  });
};
