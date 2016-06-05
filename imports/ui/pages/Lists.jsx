import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Random } from 'meteor/random'
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

import TaskList from '../components/taskList/List.jsx';

// Lists Page - Show multiple lists
export default class TaskLists extends Component {
  constructor(props) {
    super(props)

    this.lists = [];
  }

  renderTaskList() {
    return this.props.lists.map( (tasks)=> {
      const currKey = !tasks._id? Random.id() : tasks._id;
      return (
        <TaskList key={currKey} tasks={tasks} lists={this.props.lists}/>
        // NOTE: I have to add this lists={} property to make an error go away?
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
      <MuiThemeProvider muiTheme={getMuiTheme()} className="container">
        <Paper style={style} zDepth={1} rounded={false} children={this.renderTaskList()}/>
      </MuiThemeProvider>
    );
  }
}

TaskList.propTypes = {
  lists: PropTypes.array.isRequired,
};
