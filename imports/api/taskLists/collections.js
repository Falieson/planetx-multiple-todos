import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Lists = new Mongo.Collection('taskLists');
