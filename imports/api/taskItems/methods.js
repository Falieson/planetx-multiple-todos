import { Meteor } from 'meteor/meteor';
import { Mongo }  from 'meteor/mongo';
import { check } from 'meteor/check';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Tasks }  from './collections.js';
import './factories.js';

export const insertTask = new ValidatedMethod({
  name: 'taskItems.insert',
  validate: new SimpleSchema({
    _id: {type: String },
    text: { type: String },
    checked: { type: Boolean },
    createdAt: {type: Date },
    owner: {type: String, optional: true },
    username: {type: String, optional: true },
  }).validator(),
  run({ text , checked}) {

    // Make sure the user is logged in before inserting a task
    // if (! this.userId) {
    //   throw new Meteor.Error('not-authorized');
    // }

    Tasks.insert({
      text,
      checked,
      createdAt: new Date(),
      owner: this.userId? this.userId : undefined,
      username: this.username? this.username : Meteor.users.findOne(this.userId)? Meteor.users.findOne(this.userId).username : undefined,
    });

  }
});
