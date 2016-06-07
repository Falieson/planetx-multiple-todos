import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import { Lists } from '../collections.js';
import { insertList, updateList } from '/imports/api/taskLists/methods.js';
import { insertTask } from '/imports/api/taskItems/methods.js';

import '../factories.js'; // #Factory.build('taskList')
import '/imports/api/taskItems/factories.js'; // #Factory.build('taskItem')

if( Meteor.isServer ){
  const firstLoad = Lists.find({_id: "init"}).count() === 0;
  if( firstLoad ){
    Lists.insert({_id: "init"});

    const generatedTasks = (listId)=> {
      let newTask = Factory.build('taskItem', {listId});
      console.log("New Task: ", newTask);
      const newTaskId = insertTask.call(newTask);
      newTask = Object.assign(newTask, {_id: newTaskId});

      let completedTask = Factory.build('taskItem', {listId, checked: true});
      console.log("New Completed Task: ", completedTask);
      const completedTaskId = insertTask.call(completedTask);
      completedTask = Object.assign(completedTask, {_id: completedTaskId});

      return [newTask, completedTask];
    };

    const createList = ()=> {
      let list = Factory.build('taskList');
      insertList.call(list, (err, res)=> {
        const listId = res;
        list.tasks = generatedTasks(listId);

        updateList.call({listId, tasks: list.tasks});

        list._id = listId;
        return list;
      });
    };
    createList(); // Generates first List
    createList(); // Generates second List
  }
}
