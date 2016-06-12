import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';

import TextField from 'material-ui/TextField';

// NewTaskItem component - Inserts a new task for list
class TaskHeader extends Component {
  render() {
    return (
      <TextField ref="textInput" onKeyDown={this.props.onNewTask.bind(this)} hintText="Input the task name" floatingLabelText="New Task Name" />
    );
  }
}

TaskHeader.propTypes = {
  onNewTask: PropTypes.func.isRequired,
};

export default TaskHeader;
