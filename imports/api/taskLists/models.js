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

export const TaskListModels = ()=> {
  // const getdocs =()=> Lists.find({}).fetch();
  const getdocs =()=> {
    const cursor =  Lists.find({_id: {$ne: "init"}});
    return cursor.fetch();
  };

  const all = {getdocs}
  const find = {all}

  return {find};
};
