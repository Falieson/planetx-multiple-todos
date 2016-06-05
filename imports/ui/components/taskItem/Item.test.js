import React        from 'react';
import { chai }     from 'meteor/practicalmeteor:chai';
import { Factory }  from 'meteor/dburles:factory';
import faker        from 'faker';
import { shallow, mount }  from 'enzyme';

import TaskItem     from './Item.jsx';
import '/imports/api/factories/taskItem.js'

if( Meteor.isClient ) {
  describe('Task Item', ()=> {
    it('should render', ()=> {
      const task = Factory.build('taskItem');
      const item = shallow( <TaskItem task={task} /> );
      chai.assert(item.text(task.text));
    });

  });
}
