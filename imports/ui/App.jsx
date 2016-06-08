import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import TaskLists from './pages/Lists.jsx';
import { TaskListViews } from '../api/taskLists/views.js';
import { TaskListSubs } from '../api/taskLists/subscriptions.js';

// App component - represents the whole app
class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)} className="container">
        <TaskLists lists={this.props.lists} />
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  lists: PropTypes.array.isRequired,
};

export default createContainer(()=> {
  // http://guide.meteor.com/react.html#using-createContainer
  TaskListSubs.find.all;
  return {
    lists: TaskListViews.find.all({fields: {_id: 1, title: 1} }),
  };
}, App );


// App.childContextTypes = {
//   // https://github.com/shinol/simple-todos/blob/master/imports/ui/App.jsx
//   muiTheme: React.PropTypes.object
// };
//
// App.getChildContext =()=> {
//   // Key required to be "muiTheme"
//   // muiTheme: getMuiTheme(MyRawTheme)
//   return {
//     muiTheme: getMuiTheme(darkBaseTheme)
//   };
// };
