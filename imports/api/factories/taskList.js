// import { Factory }  from 'meteor/dburles:factory';
import faker  from 'faker';
import './taskItem.js'

const genTaskList = ()=> {
 const newItem = ()=> Factory.build('taskItem');
 const checkedItem =  Factory.build('taskItem', {checked: true});
 return [newItem(), checkedItem, newItem()]
};

export default genTaskList;
