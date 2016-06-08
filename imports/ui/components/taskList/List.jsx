import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash'

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import { TaskListViews } from '../../../api/taskLists/views.js';
import { Lists } from '../../../api/taskLists/collections.js';

import TaskItem from '../taskItem/Item.jsx';
import { TaskItemSubs } from '../../../api/taskItems/subscriptions.js';
import { insertTask, deleteTask } from '../../../api/taskItems/methods.js';


// Task List component - Lists out all the tasks
export default class TaskList extends Component {
  constructor(props) {
    super(props);
    this.tasks = [];
    this.state = {
      newTaskText: '',
    };
  }

  render() {
    TaskItemSubs.find.select(this.props.listId);

    const style = {
      height: "100%",
      maxHeight: "500px",
      padding: "10px",
      width: "300px",
      margin: "10px",
      textAlign: 'center',
      display: 'inline-block',
      verticalAlign: 'top',
    };

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)} className="container">
         <Paper style={style} zDepth={2} rounded={false} children={this.renderList()}/>
      </MuiThemeProvider>
    );
  }

  renderList() {
    return (
      <List>
        <Subheader>{this.props.title}</Subheader>
        {this.renderTaskList()}
        {this.renderTaskForm()}
      </List>
    );
  }

  getTasks() {
    return TaskListViews.find.tasksFor(this.props.listId);
  }
  renderTaskList() {
    return this.getTasks().map( (task) => (<TaskItem key={task._id} task={task} onDelete={this.onDeleteTaskItem} />) );
  }
  onDeleteTaskItem = taskId => {
    deleteTask.call({taskId: taskId}); //update DB
    const tasks = _.remove(this.props.tasks, {_id: taskId})
    this.setState({ tasks: tasks })
  }

  renderTaskForm() {
    return (
      <TextField ref="textInput" onKeyDown={this.handleTaskForm.bind(this)} hintText="Input the task name" floatingLabelText="New Task Name" />
    );
  }
  handleTaskForm(event) {
    this.setState({ newTaskText: event.target.value });

    if (event.key === 'Enter') {
      insertTask.call({listId: this.props.listId, text: event.target.value});
      event.target.value = '';
    }
  }

}

TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  listId: PropTypes.string.isRequired,
};
