import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import { Tasks } from '../collections.js';

import '../factories.js';

if( Meteor.isServer ){
  const firstLoad = Tasks.find({_id: "init"}).count() === 0;
  if( firstLoad ){
    Tasks.insert({_id: "init", createdAt: new Date()});

    const defaultTasks = [
      Factory.build('taskItem'),
      Factory.build('taskItem', {checked: true}),
      Factory.build('taskItem')
    ];

    defaultTasks.map( (task)=> { Tasks.insert(task) } );
  }
}
