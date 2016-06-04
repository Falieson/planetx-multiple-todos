import React from 'react';

import { shallow } from 'enzyme';
import { chai } from 'meteor/practicalmeteor:chai';
import { Factory } from 'meteor/dburles:factory';
import faker from 'faker';

import TaskItem from './Item.jsx';

Factory.define('taskItem', TaskItem, {
    text:()=> faker.lorem.sentence(),
});

if( Meteor.isClient ) {
  describe('Task Item', () => {

    it('should render', () => {
      const task = Factory.build('taskItem');
      const item = shallow(<TaskItem task={task} />);
      chai.assert(item.text(task.text));
    });
  });

}
