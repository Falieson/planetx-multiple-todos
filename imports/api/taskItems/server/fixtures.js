// Task Item Factory
// import { Factory }  from 'meteor/dburles:factory';
// import faker        from 'faker';
// import TaskItem     from '/imports/ui/components/taskItem/Item.jsx';
//
// export default Factory.define('taskItem', TaskItem, {
//   text:()=> faker.lorem.sentence(),
//   checked: ()=> false,
// });

// Task List Factory
// // import { Factory }  from 'meteor/dburles:factory';
// import faker  from 'faker';
// import './taskItem.js'
//
// const genTaskList = ()=> {
//  const newItem = ()=> Factory.build('taskItem');
//  const checkedItem =  Factory.build('taskItem', {checked: true});
//  return [newItem(), checkedItem, newItem()]
// };
//
// export default genTaskList;
//
//

import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import { Tasks } from '../collections.js';
import { TaskModels } from '../models.js';

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

    defaultTasks.map( (task)=> {
      Tasks.insert(task)
    } );
  }
}
