import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import { Lists } from '../collections.js';

// import { insertList } from '/imports/api/taskLists/methods.js';
import '/imports/api/taskItems/factories.js';

if( Meteor.isServer ){
  const firstLoad = Lists.find({_id: "init"}).count() === 0;
  if( firstLoad ){
    const initTask = Factory.build('taskItem', {_id: "init"});

    // insertList.call(initTask);
    Lists.insert(initTask);

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

    // defaultLists.map( (list)=> { insertList.call(list) } );
    defaultLists.map( (list)=> { Lists.insert(list) } );
  }
}
