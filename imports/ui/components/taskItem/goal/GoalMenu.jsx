import React, { Component, PropTypes } from 'react';
import IconButton from 'material-ui/IconButton/IconButton';
import Divider from 'material-ui/Divider'; // <Divider />

// import DefaultGoals from  './GoalDefaults.jsx';
import CustomGoal   from  './GoalCustom.jsx';

export default class GoalMenu extends Component {
  // <DefaultGoals onCloseMenu={this.props.onCloseMenu}/>
  render() {
    return (
      <CustomGoal onCloseMenu={this.props.onCloseMenu}/>
    );
  }
}

GoalMenu.propTypes = {
  onCloseMenu: PropTypes.func.isRequired,
};
