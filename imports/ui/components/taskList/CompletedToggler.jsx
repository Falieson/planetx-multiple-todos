import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Toggle from 'material-ui/Toggle';
import { setTaskItemsCompletedFilter } from '../../actions/Item.js';

// TaskHeader component - Show/Hide Completed Toggler
class CompletedToggler extends Component {
  render() {
    const {showCompleted} = this.props;
    const showAll = showCompleted || showCompleted===undefined? true:false;

    return  (
      <Toggle
        toggled=  {showAll}
        onToggle= {this.handleShowCompleted.bind(this)}
      />
    );
  }

  handleShowCompleted() {
    const {
      listId,
      showCompleted,
      dispatch
    } = this.props;
    const showAll = showCompleted || showCompleted===undefined? true:false;

    dispatch(setTaskItemsCompletedFilter(listId, !showAll));
  }
}

CompletedToggler.propTypes = {
  listId: PropTypes.string.isRequired,
  showCompleted: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStoreToProps(state) {
  const listId = this? this.props.listId : null;
  const { TaskItems } = state;
  const TaskItem = listId? TaskItems[listId] : null;

  const {
    showCompleted,
  } = TaskItem || {
    showCompleted: true,
  }

  return {
    showCompleted
  }
}

export default connect(mapStoreToProps)(CompletedToggler);
