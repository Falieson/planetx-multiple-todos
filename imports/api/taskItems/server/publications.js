import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

import { Tasks } from '../collections.js';
// import { TaskViews } from './views.js';

// export const TaskPubs = {};
// if (Meteor.isServer) {
//   // This code only runs on the server
//   // Only publish tasks that are public or belong to the current user
//   Meteor.publish('tasks', function tasksPublication() {
//     return Tasks.find({
//       $or: [
//         { private: { $ne: true } },
//         { owner: this.userId },
//       ],
//     });
//   });
// }
