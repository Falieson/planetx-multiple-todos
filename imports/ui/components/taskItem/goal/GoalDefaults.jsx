import React, { Component, PropTypes } from 'react';

import HalfBright from 'material-ui/svg-icons/device/brightness-medium';
import LowBright from 'material-ui/svg-icons/device/brightness-low';
import Weekend from 'material-ui/svg-icons/content/weekend';
import NextWeek from 'material-ui/svg-icons/content/next-week';

import MenuItem from 'material-ui/MenuItem';

// TaskItem_Goal: Set CompleteBy Goal
export default class DefaultGoals extends Component {
  render() {
    return (
      <div>
        <MenuItem primaryText="Later Today" secondaryText="5:00 PM" leftIcon={<HalfBright />}/>
        <MenuItem primaryText="Tomorrow" secondaryText="Tue, 10:00 AM" leftIcon={<LowBright />}/>
        <MenuItem primaryText="This Weekend" secondaryText="Fri, 5:00 PM" leftIcon={<Weekend />}/>
        <MenuItem primaryText="Next Week" secondaryText="Mon, 10:00 AM" leftIcon={<NextWeek />}/>
      </div>
    );
  }
}
