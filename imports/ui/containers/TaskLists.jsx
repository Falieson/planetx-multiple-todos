import { Random } from 'meteor/random';
import Tracker from 'tracker-component';
import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Paper from 'material-ui/Paper';

import { fetchTaskLists, taskListSubscriptionPending } from '../actions/List.js';
import TaskList from '../components/taskList/List.jsx';

// Lists Page - Show multiple lists
export default class TaskLists extends Tracker.Component {
  constructor(props) {
    super(props)

    this.autorun(()=> {
      this.subscribe('taskLists')
    });
  }

  componentWillMount() {
    const {dispatch} = this.props;

    this.autorun(()=> {
        dispatch(fetchTaskLists());

      // FIXME: this TrackerComponent feature is broke
      // if(this.subscriptionsReady()){
      //   dispatch(fetchTaskLists());
      // }
      // else {
      //   dispatch(taskListSubscriptionPending());
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
      <Paper style={style} zDepth={1} rounded={false} children={this.renderTaskList()}/>
    );
  }

  renderTaskList() {
    return this.props.lists.map( (list)=> {
      const currKey = !list._id? Random.id() : list._id;

      return (
        // NOTE: I have to add this lists={} property to make an error go away
        <TaskList
          key={currKey}
          title={list.title}
          listId={list._id}
          lists={this.props.lists}
        />
      );

    } );
  }
}

TaskLists.propTypes = {
  lists: PropTypes.array.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

function mapStoreToProps(state) {
  const { TaskLists } = state;

  const {
    items,
    lastUpdated
  } = TaskLists || {
    items: []
  }

  return {
    lists: items,
    lastUpdated
  }
}

export default connect(mapStoreToProps)(TaskLists)
