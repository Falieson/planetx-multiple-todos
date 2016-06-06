import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import TaskItem from '../taskItem/Item.jsx';

// Task List component - Lists out all the tasks
export default class TaskList extends Component {
  constructor(props) {
    super(props);

    this.tasks = [];
  }
  getTasks() {
    return this.props.tasks? this.props.tasks : [];
  }

  renderTaskList() {
    return this.getTasks().map((task) => (
      <TaskItem key={task._id} task={task} />
    ));
  }

  renderList() {
    return (
      <List>
        <Subheader>Tasks</Subheader>
        {this.renderTaskList()}
      </List>
    );
  }

  render() {
    const style = {
      height: "100%",
      maxHeight: "500px",
      padding: "10px",
      width: "300px",
      margin: "10px",
      textAlign: 'center',
      display: 'inline-block',
    };

    return (
       <MuiThemeProvider muiTheme={getMuiTheme()} className="container">
         <Paper style={style} zDepth={2} rounded={false} children={this.renderList()}/>
      </MuiThemeProvider>
    );
  }
}

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  lists: PropTypes.array.isOptional,
};
