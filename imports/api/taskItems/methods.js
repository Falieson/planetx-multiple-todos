import { Meteor } from 'meteor/meteor';
import { Mongo }  from 'meteor/mongo';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Tasks }  from './collections.js';
import './factories.js';

export const insertTask = new ValidatedMethod({
  name: 'taskItems.insert',
  validate: new SimpleSchema({
    _id: {type: String, optional: true },
    createdAt: {type: Date, optional: true },
    owner: {type: String, optional: true },
    username: {type: String, optional: true },
    listId: {type: String, optional: true },
    text: { type: String, optional: true },
    completed: { type: Boolean, optional: true },
  }).validator(),
  run({ text , listId, completed}) {

    // Make sure the user is logged in before inserting a task
    // if (! this.userId) {
    //   throw new Meteor.Error('not-authorized');
    // }

    return Tasks.insert({
      createdAt: new Date(),
      owner: this.userId? this.userId : undefined,
      username: this.username? this.username : Meteor.users.findOne(this.userId)? Meteor.users.findOne(this.userId).username : undefined,
      listId,
      text,
      completed,
    });

  }
});

export const updateTask = new ValidatedMethod({
  name: 'taskItems.update',
  validate: new SimpleSchema({
    taskId:   {type: String },
    text:     {type: String, optional: true },
    completed:  {type: Boolean, optional: true },
  }).validator(),
  run({taskId, text, completed }) {
    console.log(`[API:TaskUpdate]: ${taskId} => completed: ${completed}`);

    let thisTask = Tasks.findOne(taskId);
    if(text != undefined){ thisTask.text = text; }
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
