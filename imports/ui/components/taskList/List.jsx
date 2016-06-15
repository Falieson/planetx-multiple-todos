import DevTools from '../../../dev/reduxTools.js';

import { connect }  from 'react-redux';
import React, { Component, PropTypes } from 'react';
import reactMixin from 'react-mixin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
import {List} from 'material-ui/List';

import TaskItems from '../../containers/TaskItems.jsx';
import TaskHeader from './Header.jsx';

import NewTaskItem from './NewItem.jsx';
import { addTaskItemToList } from '../../actions/Item.js'

// Task List component - Lists out all the tasks
class TaskList extends Component {
  render() {
    const style = {
      height: "100%",
      maxHeight: "500px",
      padding: "10px",
      width: "350px",
      margin: "10px",
      textAlign: 'center',
      display: 'inline-block',
      verticalAlign: 'top',
    };

    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Paper style={style} zDepth={2} rounded={false} children={this.renderList()}/>
      </MuiThemeProvider>
    );
  }

  renderList() {
    const listId = this.props.listId;
    if(listId && listId.length > 0){
      const style = {
        paddingTop: "0px",
      };
      return (
        <List style={style}>
          <DevTools />
          <TaskHeader
            listId={listId}
            title={this.props.title}
          />
          <TaskItems
            listId={listId}
          />
          <NewTaskItem
            listId={listId}
            onNewTask={this.handleTaskForm}
          />
        </List>
      );
    }
  }
  handleTaskForm = event => { //this.handleTaskForm.bind(this)
    const {
      listId,
      dispatch
    } = this.props;

    if (event.key === 'Enter') {
      const title = event.target.value.length>0? event.target.value:undefined;
      dispatch(addTaskItemToList(listId, title));
      event.target.value = '';
    }
  }
}

TaskList.propTypes = {
  listId: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default connect()(TaskList);
