import _ from 'lodash';
import { Component, PropTypes } from 'react';
import Tracker from 'tracker-component';
import { connect } from 'react-redux';

import {
  fetchTaskItems,
  taskItemsSubscriptionPending,
  completeTaskItem
} from '../actions/Item.js';

import Paper from 'material-ui/Paper';
import TaskItem from '../components/taskItem/Item.jsx';

// Items Container - Show multiple items
export default class TaskItems extends Tracker.Component {
  componentWillMount() {
    this.autorun(()=> {
      const {
        listId,
        showCompleted,
        dispatch
      } = this.props;

      const showAll = showCompleted || showCompleted===undefined? true:false;
      const filters = showAll? 'SHOW_ALL':'SHOW_ACTIVE';

      this.subscribe('taskItemsForList', filters, listId);

      dispatch(fetchTaskItems(listId));

      // FIXME: [Issue with TrackerComponent](https://github.com/studiointeract/tracker-component/issues/7) changing the subscription caused subscriptionsReady() to return false;
      //
      // if(this.subscriptionsReady()){
      //   dispatch(fetchTaskItems(listId));
      // }
      // else {
      //   dispatch(taskItemsSubscriptionPending(listId));
      // }
    });
  }

  render() {
    const style = {
      height: "100%",
      padding: "10px",
      minWidth: "300px",
      width: "100%",
      margin: "10px 0",
      textAlign: 'center',
      display: 'block',
    };

    return (
      <Paper style={style} zDepth={1} rounded={false} children={this.renderTaskItem()}/>
    );
  }

  renderTaskItem() {
    const { tasks } = this.props;

    if (tasks) {
      const TaskItems = [...tasks].map( (task)=> {
        return (
          <TaskItem
            key=          {task._id}
            taskId=       {task._id}
            title=        {task.title}
            isCompleted=  {task.completed? true:false}
            onComplete=   {this.onCompleteTaskItem}
          />
        );
      });

      return (<div>{TaskItems}</div>);
    }

  }
  onCompleteTaskItem = taskId => {
    const {
      listId, tasks, dispatch
     } = this.props;
    const selector = {_id: taskId};
    let task = _.find(tasks, selector);
    const result = task.completed? false:true;

    dispatch(completeTaskItem(listId, taskId, result))
  }
}

TaskItems.propTypes = {
  listId: PropTypes.string.isRequired,
  lastUpdated: PropTypes.number,
  showCompleted: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
}

function mapStoreToProps(state) {
  const listId = this? this.props.listId : null;
  const { TaskItems } = state;

  const TaskItem = listId? TaskItems[listId] : null;

  const {
    items,
    lastUpdated,
    showCompleted
  } = TaskItem || {
    items: [],
    showCompleted: true,
  }

  return {
    tasks: items,
    lastUpdated,
    showCompleted
  }
}

export default connect(mapStoreToProps)(TaskItems);
