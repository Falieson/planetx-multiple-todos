import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';

import Subheader from 'material-ui/Subheader';

// TaskHeader component - Displays Title
//  TODO: and Show Complete Toggler
class TaskHeader extends Component {
  render() {
    return (
      <Subheader>{this.props.title}</Subheader>
    );
  }
}

TaskHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TaskHeader;
