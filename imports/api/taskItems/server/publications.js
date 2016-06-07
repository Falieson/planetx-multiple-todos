import { Meteor } from 'meteor/meteor';
import { TaskItemViews } from '../views.js';

if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish tasks that are public or belong to the current user
  Meteor.publish('taskItems', ()=> {
    return TaskItemViews.find.all();
  });
  Meteor.publish('taskItemsForList', (listId)=> {
    return TaskItemViews.find.select({listId: listId});
  });
}
