import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Random } from 'meteor/random'
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import Paper from 'material-ui/Paper';

import TaskList from '../components/taskList/List.jsx';

// Lists Page - Show multiple lists
export default class TaskLists extends Component {
  constructor(props) {
    super(props)

    this.lists = [];
  }

  renderTaskList() {
    return this.props.lists.map( (list)=> {
      const currKey = !list._id? Random.id() : list._id;
      return (
        // NOTE: I have to add this lists={} property to make an error go away
        <TaskList key={currKey} title={list.title} listId={list._id} tasks={list.tasks} lists={this.props.lists}/>
      );

    } );
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
}

TaskList.propTypes = {
  lists: PropTypes.array.isRequired,
};
