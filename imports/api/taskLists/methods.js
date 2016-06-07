import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Lists } from './collections.js';
import './factories.js';
// import { ListViews} from './views.js';
// import { ListActions } from './actions.js';

// https://github.com/aldeed/meteor-simple-schema#the-object-to-validate
export const insertList = new ValidatedMethod({
  name: 'taskLists.insert',
  validate: new SimpleSchema({
    _id:        {type: String, optional: true },
    createdAt:  {type: Date, optional: true },
    owner:      {type: String, optional: true },
    username:   {type: String, optional: true },
    title:      {type: String },
    tasks:      {type: [Object], optional: true },
    "tasks.$.createdAt": {type: Date, optional: true },
    "tasks.$.owner":     {type: String, optional: true },
    "tasks.$.username":  {type: String, optional: true },
    "tasks.$.listId":    {type: String },
    "tasks.$.text":      {type: String },
    "tasks.$.checked":   {type: Boolean, optional: true },
  }).validator(),
  run({title, tasks}) {
    // Make sure the user is logged in before inserting a task
    // if (! this.userId) {
    //   throw new Meteor.Error('not-authorized');
    // }

    return Lists.insert({
      createdAt: new Date(),
      owner: this.userId? this.userId : undefined,
      username: this.username? this.username : Meteor.users.findOne(this.userId)? Meteor.users.findOne(this.userId).username : undefined,
      title,
      tasks,
    });

  }
});

// [SimpleSchema Array](https://github.com/aldeed/meteor-simple-schema#schema-keys)
// export const updateList = new ValidatedMethod({
//   name: 'taskLists.update',
//   validate: new SimpleSchema({
//     listId:     {type: String},
//     tasks:      {type: [Object]},
//   }).validator(),
//   run({ listId, tasks }) {
//     // Make sure the user is logged in before inserting a task
//     // if (! this.userId) {
//     //   throw new Meteor.Error('not-authorized');
//     // }
//     console.log("Arguments: ", arguments);
//
//     Lists.update(listId, {$set: {tasks}});
//   }
// });


// NOTE: **weird : Received type error on 'taskLists.insert' until I explicitly defined the arrays of objects.
export const updateList = new ValidatedMethod({
  name: 'taskLists.update',
  validate: new SimpleSchema({
    listId: {type: String },
    tasks:  {type: [Object] },
    "tasks.$._id":       {type: String, optional: true },
    "tasks.$.createdAt": {type: Date,   optional: true },
    "tasks.$.owner":     {type: String, optional: true },
    "tasks.$.username":  {type: String, optional: true },
    "tasks.$.listId":    {type: String },
    "tasks.$.text":      {type: String },
    "tasks.$.checked":   {type: Boolean, optional: true },
  }).validator(),
  run({ listId, tasks }) {
    Lists.update(listId, {
      $set: { tasks: tasks }
    });
  }
});
