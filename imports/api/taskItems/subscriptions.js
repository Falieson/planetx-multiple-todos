/*
  functions exported from this file are used in
  *  methods.js
  *  server/publications.js
  *  *.tests.js
  *  ui/components
*/

import { Meteor } from 'meteor/meteor';
import { collectionsSubscribe } from '../helpers/subscriptions.js'

const all = (filters)=> collectionsSubscribe('taskItems', filters);
const select = (filters, target)=> collectionsSubscribe('taskItemsForList', filters, target);

export const TaskItemSubs = {find: { all, select }};
