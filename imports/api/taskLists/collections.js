import { Mongo } from 'meteor/mongo';

export const Lists = new Mongo.Collection('taskLists');

// Deny all client-side updates since we will be using methods to manage this collection
// Lists.deny({
//   insert() { return true; },
//   update() { return true; },
//   remove() { return true; },
// });
