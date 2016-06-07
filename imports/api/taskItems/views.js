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

const all = ()=> {
  if(Meteor.isClient){
    const results = Tasks.find().fetch();
    return results;
  } else {
    const results= Tasks.find();
    console.log(`Publishing All (${results.count()}) Tasks: `, results.fetch());
    return results;
  }
};
const select = (target) => {
  if(Meteor.isClient){
    return Tasks.find(target).fetch();
  } else {
    const results = Tasks.find(target);
    console.log(`Publishing Select (${results.count()}) Tasks: `, results.fetch());
    return results;
  }
};
const one = (target) => {
  if(Meteor.isClient){
    return Tasks.findOne(target);
  } else {
    return Tasks.find(target);
  }
};

export const TaskItemViews = {find: {all, one, select}};
