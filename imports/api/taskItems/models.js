/*
  functions exported from this file are used in
  *  methods.js
  *  server/publications.js
  *  *.tests.js
*/

import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

import { Tasks } from './collections.js';

export const TaskModels = ()=> {
  'find.all': true,
};
