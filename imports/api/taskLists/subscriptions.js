/*
  functions exported from this file are used in
  *  methods.js
  *  server/publications.js
  *  *.tests.js
  *  ui/components
*/

import { Meteor } from 'meteor/meteor';
import { collectionsSubscribe } from '/imports/api/helpers/subscriptions.js';

const all = collectionsSubscribe('taskLists');

export const TaskListSubs = {find: { all }};
