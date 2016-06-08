/*
  functions exported from this file are used in
  *  methods.js
  *  server/publications.js
  *  *.tests.js
  *  ui/components
*/

import { Meteor } from 'meteor/meteor';
import { collectionsSubscribe } from '../helpers/subscriptions.js'

const all = collectionsSubscribe('taskItems');
const select = (listId)=> collectionsSubscribe('taskItemsForList', listId);

export const TaskItemSubs = {find: { all, select }};
