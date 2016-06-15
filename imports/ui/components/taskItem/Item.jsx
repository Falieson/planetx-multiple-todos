import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { connect }  from 'react-redux';

import Paper from 'material-ui/Paper';

import TaskTitle    from './Title.jsx'
import TaskCompleteBtn from './SetComplete.jsx';
import UnCompleteTask from './UnComplete.jsx';

// TaskItem: a single task item
class TaskItem extends Component {
  render() {
    const style = {
      marginTop: 2,
      padding: "4px 0",
    };
    const isCompleted = this.props.isCompleted;

    if(isCompleted){
      return (
        <Paper style={style} zDepth={1} rounded={true} children={this.renderCompletedItem()}/>
      );
    }
    else {
      return (
        <Paper style={style} zDepth={1} rounded={true} children={this.renderIncompleteItem()}/>
      );
    }
  }

  renderCompletedItem() {
    const style = {
      position: "relative",
      width: "100%",
      height: "100%",
    };
    return (
      <div style={style}>
        <TaskTitle
          title =       {this.props.title}
          isCompleted = {this.props.isCompleted}
        />
        <UnCompleteTask
          taskId =      {this.props.taskId}
          onComplete =  {this.props.onComplete}
        />
      </div>
    );
  }
  renderIncompleteItem() {
    const style = {
      position: "relative",
      width: "100%",
      height: "100%",
    };
    return (
      <div style={style}>
        <TaskCompleteBtn
          taskId =      {this.props.taskId}
          onComplete =  {this.props.onComplete}
        />
        <TaskTitle
          title =       {this.props.title}
          isCompleted = {this.props.isCompleted}
        />
      </div>
    );
  }

}

TaskItem.propTypes = {
  taskId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default connect()(TaskItem);
