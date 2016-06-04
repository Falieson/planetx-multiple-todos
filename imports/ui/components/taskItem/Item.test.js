import React from 'react';
import { shallow } from 'enzyme';
import { chai } from 'meteor/practicalmeteor:chai';

import TaskItem from './Item.jsx';

if( Meteor.isClient ) {
  describe('Task Item', () => {

    it('should render', () => {
      const task = { text: 'This is task 1' };
      const item = shallow(<TaskItem task={task} />);
      chai.assert(item.text(task.text));
    });
  });

}
