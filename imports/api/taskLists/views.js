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

export const TaskListViews = ()=> {
  const queries = {
    all: {
      _id: {$ne: "init"},
      $or: [
        { private: { $ne: true } },
        { owner: this.userId },
      ],
    },


  };

  // const getdocs =()=> Lists.find({}).fetch();
  const getdocs =(query)=> {
    const cursor =  Lists.find(query);
    return cursor;
  };

  const all = getdocs(queries.all);
  const find = {all}

  return {find};
};
