import React, { Component, PropTypes } from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {ListItem} from 'material-ui/List';
import Toggle from 'material-ui/Toggle';

// TaskItem component - represents a single task item
export default class TaskItem extends Component {
  renderToggler() {
    return (
      <Toggle defaultToggled={this.props.task.isCompleted} />
    );
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()} className="container">
        <ListItem primaryText={this.props.task.text} rightToggle={this.renderToggler()} />
      </MuiThemeProvider>
    );
  }
}

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
};
