import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import { Lists } from '../collections.js';
import { insertList, updateList } from '/imports/api/taskLists/methods.js';
import { insertTask } from '/imports/api/taskItems/methods.js';

import '../factories.js'; // #Factory.build('taskList')
import '/imports/api/taskItems/factories.js'; // #Factory.build('taskItem')

const generatedTasks = (listId)=> {
  let newTask = Factory.build('taskItem', {listId});
  const newTaskId = insertTask.call(newTask);

  newTask = Object.assign(newTask, {_id: newTaskId});
  let completedTask = Factory.build('taskItem', {listId, checked: true});

  const completedTaskId = insertTask.call(completedTask);
  completedTask = Object.assign(completedTask, {_id: completedTaskId});

  return [newTask, completedTask];
};

const createList = ()=> {
  let list = Factory.build('taskList');
  const listId = insertList.call(list);

  const newTasks = generatedTasks(listId);
  list.taskIds = newTasks.map( (task)=> task._id );

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
