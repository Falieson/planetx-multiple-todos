import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { Random }   from 'meteor/random'
import TextField from 'material-ui/TextField';

// NewTaskItem component - Inserts a new task for list
class TaskHeader extends Component {
  render() {
    return (
      <TextField name={`newTaskForm_${this.props.listId}`} id={`newTask_${this.props.listId}`} ref="textInput" onKeyDown={this.props.onNewTask.bind(this)} hintText="Input the task name" floatingLabelText="New Task Name" />
    );
  }
}

TaskHeader.propTypes = {
  listId: PropTypes.string.isRequired,
  onNewTask: PropTypes.func.isRequired,
};

export default TaskHeader;
