import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

import TaskLists from './pages/Lists.jsx';
import genTaskList from '/imports/api/factories/taskList.js'

// App component - represents the whole app
export default class App extends Component {

  getLists() {
    const first = genTaskList();
    const second = genTaskList();
    return [first, second];
  }

  render() {
    return ( <TaskLists lists={this.getLists()} /> );
  }
}
