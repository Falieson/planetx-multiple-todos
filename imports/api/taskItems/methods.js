import { Meteor } from 'meteor/meteor';
import { Mongo }  from 'meteor/mongo';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Tasks }  from './collections.js';
import './factories.js';

export const insertTask = new ValidatedMethod({
  name: 'taskItems.insert',
  validate: new SimpleSchema({
    title:      {type: String, optional: true }, //has to be optional to get "New Task" default
    listId:     {type: String },
    completed:  {type: Boolean, optional: true },
    completeBy: {type: Date, optional: true},
    _id:        {type: String, optional: true },
    createdAt:  {type: Date, optional: true },
    owner:      {type: String, optional: true },
    username:   {type: String, optional: true }
  }).validator(),
  run({ title="New Task", listId, completed=false, completeBy}) {

    // Make sure the user is logged in before inserting a task
    // if (! this.userId) {
    //   throw new Meteor.Error('not-authorized');
    // }

    return Tasks.insert({
      title,
      listId,
      completed,
      completeBy,
      createdAt: new Date(),
      owner: this.userId? this.userId : undefined,
      username: this.username? this.username : Meteor.users.findOne(this.userId)? Meteor.users.findOne(this.userId).username : undefined,
    });

  }
});

export const updateTask = new ValidatedMethod({
  name: 'taskItems.update',
  validate: new SimpleSchema({
    taskId:     {type: String },
    title:      {type: String, optional: true },
    completed:  {type: Boolean, optional: true },
    completeBy: {type: Date, optional: true },
  }).validator(),
  run({taskId, title, completed }) {
    // console.log(`[API:TaskUpdate]: ${taskId} => completed: ${completed}`);

    let thisTask = Tasks.findOne(taskId);
    if(title != undefined){ thisTask.title = title; }
    if(completed != undefined){ thisTask.completed = completed; }
    delete thisTask._id;

    Tasks.update({_id: taskId}, {
      $set: thisTask
    });
  }
});

export const deleteTask = new ValidatedMethod({
  name: 'taskItems.delete',
  validate: new SimpleSchema({
    taskId:   {type: String },
  }).validator(),
  run({ taskId }) {
    console.log(`Deleting ${taskId}`);

    Tasks.remove({_id: taskId});
  }
});
