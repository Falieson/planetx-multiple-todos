import { Factory }  from 'meteor/dburles:factory';
import faker        from 'faker';
import { Random }   from 'meteor/random';

import Tasks        from './collections.js';

export default Factory.define('taskItem', Tasks, {
  createdAt: new Date(),
  listId:()=> Random.id(),
  title:()=> faker.commerce.productName(),
  completed: ()=> false,
  completeBy: ()=> new Date(),
});
