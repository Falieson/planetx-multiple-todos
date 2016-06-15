import React, { Component, PropTypes } from 'react';
import { updateTask } from '../../../api/taskItems/methods.js';

import { amber100, amber800 } from 'material-ui/styles/colors';
import Undo from 'material-ui/svg-icons/content/undo';

// TaskItem_Complete: set complete/uncomplete
export default class UnCompleteTaskItem extends Component {
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
      right: 0,
      top: 0,
      verticalAlign: "middle",
      marginRight: 4,
      cursor: "pointer",
    };

    return (
      <span style={style}>
        {this.renderIcon()}
      </span>
    );
  }

  renderIcon() {
    const style = {
      width: 20,
      height: 20,
    };

    return (
      <Undo
        color={amber100}
        hoverColor={amber800}
        style={style}
        onTouchTap={this.handleComplete.bind(this)}
      />
    );
  }

  handleComplete = event => {
    event.preventDefault();
    this.props.onComplete(this.state.taskId);
  };
}

UnCompleteTaskItem.propTypes = {
  taskId: PropTypes.string.isRequired,
  onComplete: PropTypes.func.isRequired,
};
