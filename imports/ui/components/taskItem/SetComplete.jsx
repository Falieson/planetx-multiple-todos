import React, { Component, PropTypes } from 'react';

import { grey300, green600 } from 'material-ui/styles/colors';
import CheckCircle from 'material-ui/svg-icons/action/check-circle';

// TaskItem_Complete: set complete/uncomplete
export default class setTaskCompleted extends Component {
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
    const style = {
      width: 20,
      height: 20,
    };
    // const tooltip = (state)=> state? "Not Finished" : "Complete";

    return (
      <CheckCircle
        color={grey300}
        hoverColor={green600}
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

setTaskCompleted.propTypes = {
  taskId: PropTypes.string.isRequired,
  onComplete: PropTypes.func.isRequired,
};
