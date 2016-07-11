import { Meteor } from 'meteor/meteor';
import { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import TaskLists from './containers/TaskLists.jsx';

// App component - represents the whole app
export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <TaskLists />
      </MuiThemeProvider>
    );
  }
}
