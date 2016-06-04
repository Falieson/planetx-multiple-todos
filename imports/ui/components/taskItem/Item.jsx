import React, { Component, PropTypes } from 'react';

// TaskItem component - represents a single task item
export default class TaskItem extends Component {
  render() {
    return (
      <li>{this.props.task.text}</li>
    );
  }
}

TaskItem.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  task: PropTypes.object.isRequired,
};
