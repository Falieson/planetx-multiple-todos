import { Meteor } from 'meteor/meteor';
import { TaskListViews } from '../views.js';

if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish tasks that are public or belong to the current user
  Meteor.publish('taskLists', (filter)=> {
    return TaskListViews.find.all(filter);
  });
}
