import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import { Lists } from '../collections.js';
import { insertList, updateList } from '../methods.js';
import { insertTask } from '../../taskItems/methods.js';

import '../factories.js'; // #Factory.build('taskList')
import '../../taskItems/factories.js'; // #Factory.build('taskItem')

const generatedTasks = (listId)=> {
  let newTask = Factory.build('taskItem', {listId});
  const newTaskId = insertTask.call(newTask);
  // newTask = Object.assign(newTask, {_id: newTaskId});

  let completedTask = Factory.build('taskItem', {listId, completed: true});
  const completedTaskId = insertTask.call(completedTask);
  // completedTask = Object.assign(completedTask, {_id: completedTaskId});


  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  let goaledTask = Factory.build('taskItem', {listId, completeBy: tomorrow});
  const goaledTaskId = insertTask.call(goaledTask);

  return [newTaskId, completedTaskId, goaledTaskId];

  // goaledTask = Object.assign(goaledTask, {_id: goaledTaskId});
  // list.taskIds = newTasks.map( (task)=> task._id );
  // return [newTask, completedTask, goaledTask];
};

const createList = ()=> {
  let list = Factory.build('taskList');
  const listId = insertList.call(list);

  const newTasks = generatedTasks(listId);

  updateList.call({listId, taskIds: list.taskIds});

  list._id = listId;
  return list;
};

if( Meteor.isServer ){
  const firstLoad = Lists.find({_id: "init"}).count() === 0;
  if( firstLoad ){

    createList(); // Generates first List
    createList(); // Generates second List
    createList(); // Generates third List

    Lists.insert({_id: "init"});
  }
}
