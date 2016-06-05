import React        from 'react';
import { chai }     from 'meteor/practicalmeteor:chai';
import { Factory }  from 'meteor/dburles:factory';
import faker        from 'faker';
import { shallow, mount }  from 'enzyme';

import TaskItem     from './Item.jsx';

Factory.define('taskItem', TaskItem, {
    text:()=> faker.lorem.sentence(),
    setCompleted: ()=> false,
});

if( Meteor.isClient ) {
  describe('Task Item', ()=> {
    it('should render', ()=> {
      const task = Factory.build('taskItem');
      const item = shallow( <TaskItem task={task} /> );
      chai.assert(item.text(task.text));
    });

    it('should be checked', ()=> {
      const task = Factory.build('taskItem', {setCompleted: true});
      const item = mount( <TaskItem task={task} /> );

      const query = 'input[type="checkbox"]';
      const toggler = item.find(query);

      chai.assert.equal( toggler.length, 1, "No Toggler");

      console.log("Toggler> ", toggler.get(0));
      console.log("Toggler> ", toggler.get(0).checked );

      chai.assert( toggler.get(0).checked );
    });


  });
}
