import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { red900, green500 } from 'material-ui/styles/colors';
import Delete from 'material-ui/svg-icons/action/delete';
import Archive from 'material-ui/svg-icons/content/archive';

// TaskItem_Remove: set complete/uncomplete
export default class RemoveTaskItem extends Component {
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
      <Delete
        color={red900}
        style={style}
        onTouchTap={this.handleDelete}
      />
    );
  }

  handleDelete = event => { this.props.onDelete(this.state.taskId); };
}

RemoveTaskItem.propTypes = {
  taskId: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
