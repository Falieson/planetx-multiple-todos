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
  const getdocs = (type, options)=> {
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

    return Lists.find(query);
  };
  const all = ()=> {
    if(Meteor.isClient){
      return getdocs("all").fetch();
    } else {
      return getdocs("all");
    }
  };
  const one = (target) => {
    if(Meteor.isClient){
      return Lists.findOne(target);
    } else {
      return getdocs("one", target);
    }
  };

  return {find: {all, one}};
};
