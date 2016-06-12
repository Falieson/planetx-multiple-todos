import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { connect }  from 'react-redux';
import React, { Component, PropTypes } from 'react';
import reactMixin from 'react-mixin';
import _ from 'lodash'

import { TaskItemSubs } from '../../../api/taskItems/subscriptions.js';
import { TaskItemViews } from '../../../api/taskItems/views.js';

import TaskItem from '../taskItem/Item.jsx';
import { updateTask, deleteTask } from '../../../api/taskItems/methods.js';

// Task Items Component, renders multiple task items
class TaskItems extends Component {
  render() {
    const tasks = this.props.tasks;

    if (tasks) {
      const taskItems = [...tasks].map( (task)=> {
        return (
          <TaskItem
            key=        {task._id}
            taskId=     {task._id}
            text=       {task.text}
            completed=  {task.completed? true:false}
            onComplete= {this.onCompleteTaskItem}
            onDelete=   {this.onDeleteTaskItem}
            onArchive=  {this.onArchiveTaskItem}
          />
        );
      });

      return (<div>{taskItems}</div>);
    }
    else { return (<div>Loading... </div>);}
  }

  onCompleteTaskItem = taskId => {
    const { dispatch } = this.props;

    const selector = {_id: taskId};
    let task = _.find(this.props.tasks, selector);
    const result = task.completed? false:true;

    updateTask.call({taskId: taskId, completed: result})
    // dispatch(  );

  }

  // ** onDelete works
  onDeleteTaskItem = taskId => {
    deleteTask.call({taskId: taskId}); //update DB
    // const tasks = _.remove(this.props.tasks, {_id: taskId});
    // this.setState({ tasks: tasks });
    // const tasks = _.remove(this.props.tasks, {_id: taskId})
    // this.setState({ tasks: tasks })
  }
  onArchiveTaskItem = taskId => {
    deleteTask.call({taskId: taskId}); //update DB
    // const tasks = _.remove(this.props.tasks, {_id: taskId});
    // this.setState({ tasks: tasks });
    console.log("DELETED THE TASK - ARCHIVE NOT BUILT");
  }
}

TaskItems.propTypes = {
  tasks: PropTypes.array.isRequired,
};

const TaskItemsContainer = createContainer( ({ visibilityFilter, listId })=> {
  const subscription = TaskItemSubs.find.select(visibilityFilter, listId);

  return {
    taskSubReady: subscription.ready(),
    tasks: TaskItemViews.find.select(visibilityFilter, listId) || [],
  }
}, TaskItems);

function mapStateToProps(state) {
  return {
    visibilityFilter: state.visibilityFilter,
  }
}

export default connect(mapStateToProps)(TaskItemsContainer);
