import React, { Component, PropTypes } from 'react';

import IconButton from 'material-ui/IconButton/IconButton';
import Schedule from 'material-ui/svg-icons/action/schedule';
import { blue200, blue700 } from 'material-ui/styles/colors';

export default class GoalIcon extends Component {
  render() {
    return (
      <IconButton
        style={{padding:0, width:24, height:24}}>
        <Schedule
          color =       {blue200}
          hoverColor =  {blue700}
          />
      </IconButton>
    );
  }
}
