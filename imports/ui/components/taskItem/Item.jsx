import React, { Component, PropTypes } from 'react';
import {ListItem} from 'material-ui/List';
import Toggle from 'material-ui/Toggle';

// TaskItem component - represents a single task item
export default class TaskItem extends Component {
  render() {
    return (
      <ListItem primaryText={this.props.task.text} rightToggle={<Toggle />} />
    );
  }
}

TaskItem.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  task: PropTypes.object.isRequired,
};
