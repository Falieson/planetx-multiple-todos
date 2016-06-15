import { Factory }  from 'meteor/dburles:factory';
import faker        from 'faker';
import { Random }   from 'meteor/random'

import Lists        from './collections.js'

import './factories.js';

export default Factory.define('taskList', Lists, {
  createdAt:  new Date(),
  title:      ()=> faker.company.companyName(),
  taskIds:    [],
});

// const newTask = (listId, options)=> {
//   // [newTask({listId: this._id, options: completedTask})]
//   console.log("listId> ", listId);
//
//
//   if(listId || options){
//     const object = {listId, ...options};
//     console.log("object> ", object);
//     return insertTask.call( Factory.build('taskItem', object) );
//   } else {
//     return insertTask.call( Factory.build('taskItem') );
//   }
// };
