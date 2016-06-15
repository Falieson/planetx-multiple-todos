import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { grey400 } from 'material-ui/styles/colors';

// TaskItem_Title: Display and IDEA:Edit task title
export default class TaskTitle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      isCompleted: this.props.isCompleted,
    }
  }

  render() {
    const incompleteStyle = {
      lineHeight: "23px",
      cursor: "default",
    }
    const completeStyle = {
      lineHeight: "23px",
      color:      "#BDBDBD",
      fontStyle:  "italic",
      cursor: "default",
    }
    return (
      <span style={this.state.isCompleted? completeStyle : incompleteStyle}>{this.state.title}</span>
    );
  }
}

TaskTitle.propTypes = {
  title: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
};
