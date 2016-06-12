import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { connect }  from 'react-redux';
import React, { Component, PropTypes } from 'react';
import reactMixin from 'react-mixin';
import _ from 'lodash'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
import {List} from 'material-ui/List';

import TaskHeader from './Header.jsx';
import TaskItems from './Items.jsx';
import NewTaskItem from './NewItem.jsx';

import { insertTask } from '../../../api/taskItems/methods.js';

// Task List component - Lists out all the tasks
class TaskList extends Component {
  render() {
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
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Paper style={style} zDepth={2} rounded={false} children={this.renderList()}/>
      </MuiThemeProvider>
    );
  }

  renderList() {
    // if(this.props.listId){console.log("listId 0> ", this.props.listId);}

    return (
      <List>
        <TaskHeader title={this.props.title} />
        <TaskItems listId={this.props.listId} />
        <NewTaskItem
          listId={this.props.listId}
          onNewTask={this.handleTaskForm}
        />
      </List>
    );
  }
  handleTaskForm(event) {
    // this.setState({ newTaskText: event.target.value });

    if (event.key === 'Enter') {
      insertTask.call({listId: this.props.listId, text: event.target.value});
      event.target.value = '';
    }
  }
}

TaskList.propTypes = {
  listId: PropTypes.string.isRequired,
};

export default TaskList;
