/*
  functions exported from this file are used in
  *  methods.js
  *  server/publications.js
  *  *.tests.js
  *  ui/components
*/

import { Meteor } from 'meteor/meteor';
import { collectionsSubscribe } from '../helpers/subscriptions.js'

const all = (filter)=> collectionsSubscribe('taskItems', filter);
const select = (filter, target)=> collectionsSubscribe('taskItemsForList', filter, target);

export const TaskItemSubs = {find: { all, select }};
