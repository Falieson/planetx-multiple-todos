/*
  functions exported from this file are used in
  *  methods.js
  *  server/publications.js
  *  *.tests.js
*/

import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

import { Lists } from './collections.js';
import { TaskItemViews } from '../taskItems/views.js';

const queryType = (type, options)=> {
  let query;
  if(type =="all"){
    query = {
      _id: {$ne: "init"},
      $or: [
        { private: { $ne: true } },
        { owner: this.userId },
      ],
    };
  } else if(type == "one") {
    query = {
      options,
      $or: [
        { private: { $ne: true } },
        { owner: this.userId },
      ],
    };
  }

  return query;
};

const all = (fields)=> {
  if(Meteor.isClient){
    return Lists.find(queryType("all"), fields).fetch();
  } else {
    return Lists.find(queryType("all"));
  }
};
const one = (target) => {
  if(Meteor.isClient){
    return Lists.findOne(target);
  } else {
    return Lists.find(queryType("one", target));
  }
};
const tasksFor = (listId)=> {
  if(Meteor.isClient){
    const results = TaskItemViews.find.select({listId: listId});
    console.log("results", results);
    return results;
  } else {
    return Tasks.find({listId: listId});
  }
}

export const TaskListViews = {find: {all, one, tasksFor}};
