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
    case 'SHOW_ONE':
      query.completed = false;
      query._id = options.listId;
      break;
    default:
      break; // no changes to query
  }

  return query;
}

const taskListFields = {_id: 1, title: 1};
const all = (filter)=> {
  if(Meteor.isClient){
    return Lists.find(getQuery(filter), taskListFields).fetch();
  } else {
    return Lists.find(getQuery(filter), taskListFields);
  }
};
const one = (filter, target) => {
  const options = {_id: target};
  if(Meteor.isClient){
    return Lists.findOne(getQuery(filter, options), taskListFields);
  } else {
    return Lists.find(getQuery(filter, options), taskListFields);
  }
};
const tasksFor = (filter, listId)=> {
  const options = {listId};
  if(Meteor.isClient){
    return TaskItemViews.find.select(filter, options);
  } else {
    return Tasks.find({listId: listId});
  }
}

export const TaskListViews = {find: {all, one, tasksFor}};


// const queryType = (type, options)=> {
//   let query;
//   if(type =="all"){
//     query = {
//       _id: {$ne: "init"},
//       $or: [
//         { private: { $ne: true } },
//         { owner: this && this.userId? this.userId : undefined },
//       ],
//     };
//   } else if(type == "one") {
//     query = {
//       options,
//       $or: [
//         { private: { $ne: true } },
//         { owner: this && this.userId? this.userId : undefined },
//       ],
//     };
//   }
//
//   return query;
// };
