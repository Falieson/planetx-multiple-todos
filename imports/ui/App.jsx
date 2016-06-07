import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

import TaskLists from './pages/Lists.jsx';
import { TaskListViews } from '/imports/api/taskLists/views.js';
import { TaskListSubs } from '/imports/api/taskLists/subscriptions.js';

// App component - represents the whole app
class App extends Component {
  render() {
    TaskListSubs.find.all;
    return ( <TaskLists lists={this.props.lists} /> );
  }
}

App.propTypes = {
  lists: PropTypes.array.isRequired,
};

export default createContainer(()=> {
  return {
    lists: TaskListViews.find.all({fields: {_id: 1, title: 1} }),
  };
}, App );
