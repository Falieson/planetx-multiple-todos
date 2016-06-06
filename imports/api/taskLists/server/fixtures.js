import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import { Lists } from '../collections.js';

import '../factories.js';

if( Meteor.isServer ){
  const firstLoad = Lists.find({_id: "init"}).count() === 0;
  if( firstLoad ){
    Lists.insert({_id: "init", createdAt: new Date()});

    const list = ()=> {
      return {
        createdAt: new Date(),
        tasks: [
          Factory.build('taskItem'),
          Factory.build('taskItem', {checked: true}),
          Factory.build('taskItem')
        ],
      }
    };

    const defaultLists = [list(), list()];

    defaultLists.map( (list)=> { Lists.insert(list) } );
  }
}
