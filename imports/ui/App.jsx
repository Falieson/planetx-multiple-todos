import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TaskItem from './components/taskItem/Item.jsx';

// App component - represents the whole app
export default class App extends Component {
  getTasks() {
    return [
      { _id: 1, text: 'This is task 1', isCompleted: false},
      { _id: 2, text: 'This is task 2', isCompleted: true},
      { _id: 3, text: 'This is task 3', isCompleted: false},
    ];
  }

  renderTaskList() {
    return this.getTasks().map((task) => (
      <TaskItem key={task._id} task={task} />
    ));
  }

  render() {
    return (
       <MuiThemeProvider muiTheme={getMuiTheme()} className="container">
        <ul>
          {this.renderTaskList()}
        </ul>
      </MuiThemeProvider>
    );
  }
}
