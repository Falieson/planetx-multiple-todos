import { Meteor } from 'meteor/meteor';
import { TaskItemViews } from '../views.js';

if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish tasks that are public or belong to the current user
  Meteor.publish('taskItems', (filter)=> {
    return TaskItemViews.find.all(filter);
  });
  Meteor.publish('taskItemsForList', (filter, listId)=> {
    return TaskItemViews.find.select(filter, listId);
  });
}
