import { Factory }  from 'meteor/dburles:factory';
import faker        from 'faker';
import TaskItem     from '/imports/ui/components/taskItem/Item.jsx';

export default Factory.define('taskItem', 'taskItems', {
  text:()=> faker.lorem.sentence(),
  checked: ()=> false,
  createdAt: new Date(),
});
