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
const debug = false;

const getQuery = (filters, options)=> {
  let query = {
    _id: {$ne: "init"},
    $or: [
      { private: { $ne: true } },
      { owner: this && this.userId? this.userId : null },
    ],
  };

  if(typeof(options) === 'string'){
    query = {_id: options, ...query};
  } else {
    query = {...options, ...query};
  }

  switch (filters) {
    case 'SHOW_ACTIVE':
      query.completed = false;
      break;
    case 'SHOW_COMPLETED':
      query.completed = true;
      break;
    case 'SHOW_ALL':
      if(query.completed){
        delete query.completed;
      }
    default:
      break;
  }

  if(debug){
    console.log("QUERY 0-> ", query);
  }

  return query;
}

const taskItemFields = {_id: 1, title: 1};
const all = (filters)=> {
  if(debug){
    console.log("ITEMVIEW: all");
  }

  if(Meteor.isClient){
    const results = Tasks.find(getQuery(filters)).fetch();
    return results;
  } else {
    const results= Tasks.find(getQuery(filters));
    // console.log(`Publishing All (${results.count()}) Tasks: `, results.fetch());
    return results;
  }
};
const one = (filters, target) => {
  if(debug){
    console.log("ITEMVIEW: one");
  }

  const options = {_id: target};
  if(Meteor.isClient){
    return Tasks.findOne(getQuery(filters, options), taskItemFields).fetch();
  } else {
    return Tasks.find(getQuery(filters, options), taskItemFields);
  }
};
const select = (filters, target) => {
  if(debug){
    console.log("ITEMVIEW: select");
  }

  const options = {listId: target};
  // console.log("OPTIONS 0> ", options);

  if(Meteor.isClient){
    const results = Tasks.find(getQuery(filters, options), taskItemFields).fetch();

    if(debug){
      console.log(`Retrieved ${results.length} Tasks`);
    }

    return results;
  } else {
    const results = Tasks.find(getQuery(filters, options), taskItemFields);

    if(debug){
      console.log(`Publishing Select (${results.count()}) Tasks: `, results.fetch());
    }

    return results;
  }
};

export const TaskItemViews = {find: {all, one, select}};
