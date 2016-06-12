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

const getQuery = (filter, options)=> {
  let query = {
    _id: {$ne: "init"},
    $or: [
      { private: { $ne: true } },
      { owner: this && this.userId? this.userId : undefined },
    ],
  };

  if(typeof(options) === 'string'){
    query = {_id: options, ...query};
  } else {
    query = {...options, ...query};
  }

  switch (filter) {
    case 'SHOW_COMPLETED':
      query.completed = true;
      break;
    case 'SHOW_ACTIVE':
      query.completed = false;
      break;
    default:
      break;
  }

  return query;
}

const taskItemFields = {_id: 1, title: 1};
const all = (filter)=> {
  // console.log("ITEMVIEW: all");

  if(Meteor.isClient){
    const results = Tasks.find(getQuery(filter)).fetch();
    return results;
  } else {
    const results= Tasks.find(getQuery(filter));
    // console.log(`Publishing All (${results.count()}) Tasks: `, results.fetch());
    return results;
  }
};
const one = (filter, target) => {
  // console.log("ITEMVIEW: one");

  const options = {_id: target};
  if(Meteor.isClient){
    return Tasks.findOne(getQuery(filter, options), taskItemFields).fetch();
  } else {
    return Tasks.find(getQuery(filter, options), taskItemFields);
  }
};
const select = (filter, target) => {
  // console.log("ITEMVIEW: select");

  const options = {listId: target};
  // console.log("OPTIONS 0> ", options);

  if(Meteor.isClient){
    const result = Tasks.find(getQuery(filter, options), taskItemFields).fetch();
    return result;
  } else {
    const results = Tasks.find(getQuery(filter, options), taskItemFields);
    // console.log(`Publishing Select (${results.count()}) Tasks: `, results.fetch());
    return results;
  }
};

export const TaskItemViews = {find: {all, one, select}};
