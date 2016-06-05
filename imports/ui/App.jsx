import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

import TaskList from './components/taskList/List.jsx';

// App component - represents the whole app
export default class App extends Component {

  getTasks() {
    const newTask =()=> Factory.build('taskItem');
    const checkedTask = Factory.build('taskItem', {checked: true});

    return [newTask(), checkedTask, newTask()];
  }

  renderTaskList() {
    return ( <TaskList tasks={this.getTasks()}/> );
  }

  render() {
    const style = {
      height: "100%",
      padding: "10px",
      minWidth: "300px",
      width: "100%",
      margin: "10px 0",
      textAlign: 'center',
      display: 'block',
    };

    return (
      <MuiThemeProvider muiTheme={getMuiTheme()} className="container">
        <Paper style={style} zDepth={1} rounded={false} children={this.renderTaskList()}/>
      </MuiThemeProvider>
    );
  }
}
