import React, { Component, PropTypes } from 'react';
import { updateTask } from '../../../api/taskItems/methods.js';

import { green500 } from 'material-ui/styles/colors';
import Done from 'material-ui/svg-icons/action/done';

// TaskItem_Complete: set complete/uncomplete
export default class CompleteTaskItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskId: this.props.taskId,
    };
  }

  render() {
    const style = {
      display: "inline-block",
      position: "absolute",
      left: 0,
      top: 0,
      verticalAlign: "middle",
      marginLeft: 4,
      cursor: "pointer",
    };

    return (
      <span style={style}>
        {this.renderIcon()}
      </span>
    );
  }

  renderIcon() {
    return (
      <Done
        color={green500}
        onTouchTap={this.handleComplete.bind(this)}
      />
    );
  }

  handleComplete = event => {
    event.preventDefault();
    this.props.onComplete(this.state.taskId);
  };
}

CompleteTaskItem.propTypes = {
  taskId: PropTypes.string.isRequired,
  onComplete: PropTypes.func.isRequired,
};
