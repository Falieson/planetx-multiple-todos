import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

// http://www.material-ui.com/#/customization/colors
import {grey400, green500, lime400, red500} from 'material-ui/styles/colors';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Delete from 'material-ui/svg-icons/action/delete';
import Done from 'material-ui/svg-icons/action/done';
import Assignment from 'material-ui/svg-icons/action/assignment';

import { ListItem } from 'material-ui/List';
import { updateTask } from '../../../api/taskItems/methods.js';

// TaskItem component - represents a single task item
export default class TaskItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: this.props.task.checked,
    };
  }

  render() {
    const renderMenu = (
      <IconMenu
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
        iconButtonElement={this.renderMenuButton()}
      >
        {this.renderCompleteMenuButton()}
        {this.renderDeleteMenuButton()}
      </IconMenu>
    );

    return (
      <ListItem primaryText={this.props.task.text} rightIconButton={renderMenu} />
    );
  }

  renderMenuButton() {
    return (
      <IconButton
        touch={true}
        tooltip="more"
        tooltipPosition="bottom-left"
      >
        <MoreVertIcon color={grey400} />
      </IconButton>
    );
  }
  renderCompleteMenuButton() {
    const icon = (state)=> {
      if(!state){
        return (<Done style={{color: '#f23'}} />);
      } else {
        return (<Assignment style={{color: '#f23'}} />);
      }
    }
    const renderCompleteMessage = (state)=> state? "Not Finished" : "Complete";

    const checked = this.state.checked;
    return (
      <MenuItem rightIcon={icon(checked)} primaryText={renderCompleteMessage(checked)} onTouchTap={this.handleCompleteTask.bind(this)} />
    );
  }
  handleCompleteTask() {
    const result = !this.state.checked;

    this.setState({ checked: result}); //rerender the UI
    updateTask.call({taskId: this.props.task._id, checked: result}); //update DB
  }
  renderDeleteMenuButton() {
    return (
      <MenuItem rightIcon={<Delete />} primaryText="Delete"  onTouchTap={this.handleDeleteTask} />
    );
  }
  handleDeleteTask = event => { this.props.onDelete(this.props.task._id); };
}

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};
