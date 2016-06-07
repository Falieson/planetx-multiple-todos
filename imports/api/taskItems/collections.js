import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Tasks = new Mongo.Collection('taskItems');

// Deny all client-side updates since we will be using methods to manage this collection
// Tasks.deny({
//   insert() { return true; },
//   update() { return true; },
//   remove() { return true; },
// });
