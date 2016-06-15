/*
  functions exported from this file are used in
  *  methods
  *  tests
  *  ui/components
*/

import { Meteor } from 'meteor/meteor';
import { collectionsSubscribe } from '../helpers/subscriptions.js';

const all = (filter)=> collectionsSubscribe('taskLists', filter);

export const TaskListSubs = {find: { all }};
