import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

import { Lists } from './collections.js';
import { ListModels } from './models.js';

// TODO: add check() where appropriate;
Meteor.methods({
  // Pub/Sub
  'tasks.count'(target) {
    const search = Lists.find().count();
    if(target && typeof(target) === 'object'){
      return Lists.find(target).count();
    } else {
      return Lists.find().count();
    }
  },
  'tasks.find.public'() {
    const target = {private: { $ne: true } };
    return Lists.find(target);
  },
  'tasks.find.owned'() {
    const target = {owner: this.userId };
    return Lists.find(target);
  },

});
