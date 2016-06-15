import React, { Component, PropTypes } from 'react';

import CalendarEvent from 'material-ui/svg-icons/action/event';

import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';

// TaskItem_Goal: Set CompleteBy Goal
export default class CustomGoal extends Component {
  handleDPopen() {
    this.props.onCloseMenu();
    // Triggers: ./TaskGoal.jsx:43
    // function handleIMclose(){
    //   if(this){
    //     this.setState({openMenu: false})
    //   }
    // }
    this.openDatePicker.openDialog();
  };

  render() {

    return (
      <div>
        <MenuItem
          onTouchTap={this.handleDPopen.bind(this)}
          primaryText="Pick date & time"
          leftIcon={<CalendarEvent />}
        />
        <DatePicker
          ref={(ref) => this.openDatePicker = ref}
          style={{display: 'none'}}
          name="name"
        />
      </div>
    );
  }
}

CustomGoal.propTypes = {
  onCloseMenu: PropTypes.func.isRequired,
};
