import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { connect } from 'react-redux';

import IconMenu   from 'material-ui/IconMenu';
import MenuItem   from 'material-ui/MenuItem';
import Subheader  from 'material-ui/Subheader';
import Divider    from 'material-ui/Divider';

import GoalButton from './GoalButton.jsx';
import GoalMenu   from './GoalMenu.jsx';
import CustomGoal   from  './GoalCustom.jsx';

import CalendarEvent  from 'material-ui/svg-icons/action/event';
import DatePicker     from 'material-ui/DatePicker';

// TaskItem_Goal: Set CompleteBy Goal
export default class TaskGoal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openMenu: false,
    };
  }

  render() {
    const style = {
      display: "inline-block",
      position: "absolute",
      top: 0,
      right: 22,
      verticalAlign: "middle",
      marginRight: 4,
      cursor: "pointer",
    };

    function handleIMopen(){
      if(this){
        this.setState({openMenu: true})
      }
    }
    function handleIMclose(){
      if(this){
        this.setState({openMenu: false})
      }
    }

    return (
      <div style={style}>
        <IconMenu
          ref={(ref) => this.goalMenu = ref}
          iconButtonElement={<GoalButton />}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          onTouchTap={handleIMopen.bind(this)}
          open={this.state.openMenu}
        >
          <GoalMenu onCloseMenu={handleIMclose.bind(this)}/>
        </IconMenu>
      </div>
    );
  }
}

TaskGoal.propTypes = {
  taskId: PropTypes.string.isRequired,
  onGoalset: PropTypes.func.isRequired,
};

const TaskGoalContainer = createContainer( ({ taskId, completeBy, onGoalset })=> {
  return {
    taskId:     taskId,
    completeBy: completeBy,
    onGoalset:  onGoalset,
  };
}, TaskGoal);

export default connect()(TaskGoalContainer);




    //
    // <span style={{display:"block",fontWeight:700,verticalAlign:"middle",marginLeft:4,width:310,fontSize:16,lineHeight:"28px"}}>Complete task by ...</span>
