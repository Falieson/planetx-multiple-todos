import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import reactMixin from 'react-mixin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import TaskLists from './pages/TaskLists.jsx';
import { TaskListViews } from '../api/taskLists/views.js';
import { TaskListSubs } from '../api/taskLists/subscriptions.js';

// App component - represents the whole app
class App extends Component {
  render() {
    const { dispatch } = this.props;
    const lists = this.props.lists;

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

// http://guide.meteor.com/react.html#using-createContainer
const AppContainer =  createContainer( ({ visibilityFilter })=> {
  TaskListSubs.find.all(visibilityFilter);
  return {
    lists: TaskListViews.find.all(visibilityFilter),
  };
}, App );

function mapStateToProps(state) {
  return {
    visibilityFilter: state.visibilityFilter,
  }
}

export default connect(mapStateToProps)(AppContainer)

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
