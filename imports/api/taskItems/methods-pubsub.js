import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

import { Tasks } from './collections.js';
import { TaskModels } from './models.js';
// import { TaskActions } from './actions.js';

// TODO: add check() where appropriate;
Meteor.methods({
  // Pub/Sub
  'tasks.count'(target) {
    const search = Tasks.find().count();
    if(target && typeof(target) === 'object'){
      return Tasks.find(target).count();
    } else {
      return Tasks.find().count();
    }
  },
  'tasks.find.public'() {
    const target = {private: { $ne: true } };
    return Tasks.find(target);
  },
  'tasks.find.owned'() {
    const target = {owner: this.userId };
    return Tasks.find(target);
  },

});
