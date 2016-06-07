import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Lists } from './collections.js';
import './factories.js';

export const insertList = new ValidatedMethod({
  name: 'taskLists.insert',
  validate: new SimpleSchema({
    _id:        {type: String, optional: true },
    createdAt:  {type: Date, optional: true },
    owner:      {type: String, optional: true },
    username:   {type: String, optional: true },
    title:      {type: String },
    taskIds:    {type: [String], optional: true },
  }).validator(),
  run({title, taskIds}) {
    // Make sure the user is logged in before inserting a task
    // if (! this.userId) {
    //   throw new Meteor.Error('not-authorized');
    // }

    return Lists.insert({
      createdAt: new Date(),
      owner: this.userId? this.userId : undefined,
      username: this.username? this.username : Meteor.users.findOne(this.userId)? Meteor.users.findOne(this.userId).username : undefined,
      title,
      taskIds,
    });

  }
});

// NOTE: **weird : Received type error on 'taskLists.insert' until I explicitly defined the arrays of objects.
export const updateList = new ValidatedMethod({
  name: 'taskLists.update',
  validate: new SimpleSchema({
    listId:     {type: String },
    taskIds:    {type: [String], optional: true },
  }).validator(),
  run({ listId, taskIds }) {
    Lists.update(listId, {
      $set: { taskIds: taskIds }
    });
  }
});
