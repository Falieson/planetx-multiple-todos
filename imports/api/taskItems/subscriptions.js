import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import Tasks from './collections.js';
import { TaskModels } from './models.js';

// export const TaskSubs = {};

// This code only runs on the client
// if (Meteor.isClient) {
//   // Only publish tasks that are
//   //  public or belong to the current user
//   Meteor.subscribe('tasks');
// }
