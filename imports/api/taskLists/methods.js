import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

import { Lists } from './collections.js';
import { ListViews} from './views.js';
// import { ListActions } from './actions.js';

// TODO: add check() where appropriate;
Meteor.methods({
  'taskLists.insert'(text) {
    check(text, String);

    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    return Lists.insert({
      text,
      createdAt: new Date(),
      owner: this.userId,
      username: this.username? this.username: Meteor.users.findOne(this.userId).username,
    });
  },
  // 'taskLists.remove'(taskId) {
  //   check(taskId, String);
  //
  //   const task = Lists.findOne(taskId);
  //   if (task.private && task.owner !== this.userId) {
  //     // If the task is private, make sure only the owner can delete it
  //     throw new Meteor.Error('not-authorized');
  //   }
  //
  //   Lists.remove(taskId);
  // },
  // 'taskLists.setChecked'(taskId, setChecked) {
  //   check(taskId, String);
  //   check(setChecked, Boolean);
  //
  //   const task = Lists.findOne(taskId);
  //   if (task.private && task.owner !== this.userId) {
  //     // If the task is private, make sure only the owner can check it off
  //     throw new Meteor.Error('not-authorized');
  //   }
  //
  //   Lists.update(taskId, { $set: { checked: setChecked } });
  // },
  // 'taskLists.setPrivate'(taskId, setToPrivate) {
  //   check(taskId, String);
  //   check(setToPrivate, Boolean);
  //   // console.log("args> ", arguments);
  //
  //   const task = Lists.findOne(taskId);
  //   // console.log("task> ", task);
  //
  //   // Make sure only the task owner can make a task private
  //   if (task.owner !== this.userId) {
  //     throw new Meteor.Error('not-authorized');
  //   }
  //
  //   Lists.update(taskId, { $set: { private: setToPrivate } });
  // },
});
