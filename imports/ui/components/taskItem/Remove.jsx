import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { red100, red900 } from 'material-ui/styles/colors';
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
      marginRight: 2,
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
      <Delete
        color={red100}
        hoverColor={red900}
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
