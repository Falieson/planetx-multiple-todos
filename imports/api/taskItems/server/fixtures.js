// import { Meteor } from 'meteor/meteor';
// import { Mongo } from 'meteor/mongo';
//
// import { Tasks } from '../collections.js';
//
// import '../factories.js';
// import { insertTask } from '../imports/api/taskItems/methods.js';

// Tasks are created in `taskLists/server/fixtures.js`
// if( Meteor.isServer ){
//   const firstLoad = Tasks.find({_id: "init"}).count() === 0;
//   if( firstLoad ){
//     const initTask = Factory.build('taskItem', {_id: "init"});
//     insertTask.call(initTask);
//
//     const defaultTasks = [
//       Factory.build('taskItem'),
//       Factory.build('taskItem', {checked: true}),
//       Factory.build('taskItem')
//     ];
//
//     defaultTasks.map( (task)=> { insertTask.call(task) } );
//   }
// }
