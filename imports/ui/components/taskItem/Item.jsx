import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { connect }  from 'react-redux';
import React, { Component, PropTypes } from 'react';
import reactMixin from 'react-mixin';

import Paper from 'material-ui/Paper';
import TaskTitle    from './Title.jsx'
import CompleteTask from './Complete.jsx';
import UnCompleteTask from './UnComplete.jsx';
import RemoveTask   from './Remove.jsx';
// import TaskStats   from './Stats.jsx';
//   <TaskStats
//     taskId = {this.props.taskId}
//   />

// TaskItem: a single task item
class TaskItem extends Component {
  render() {
    const style = {
      marginTop: 2,
      padding: "4px 0",
    };
    const isCompleted = this.props.completed;

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
          title = {this.props.text}
          completed = {this.props.completed}
        />
        <UnCompleteTask
          taskId = {this.props.taskId}
          onComplete = {this.props.onComplete}
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
        <CompleteTask
          taskId = {this.props.taskId}
          onComplete = {this.props.onComplete}
        />
        <TaskTitle
          title = {this.props.text}
          completed = {this.props.completed}
        />
        <RemoveTask
          taskId = {this.props.taskId}
          onDelete = {this.props.onDelete}
        />
      </div>
    );
  }
}

TaskItem.propTypes = {
  taskId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const TaskItemContainer = createContainer( ({ taskId, text, completed, onComplete, onDelete })=> {
  return {
    taskId: taskId,
    text: text,
    completed: completed? true:false,
    onComplete: onComplete,
    onDelete: onDelete
  };
}, TaskItem);

export default connect()(TaskItemContainer);
