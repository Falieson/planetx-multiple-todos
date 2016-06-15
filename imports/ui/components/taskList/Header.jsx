import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';

import CompletedToggler from './CompletedToggler.jsx';

// TaskHeader component
// - Displays Title
// - Show/Hide Completed Toggler
export default class TaskHeader extends Component {
  render() {
    const styles = {
      headerContainer: {
        position:       "relative",
        display:        "block",
        width:          "100%",
        height:         "26px",
        paddingBottom:  "1px",
        marginBottom:   "12px",
        borderBottom:   "1px solid rgba(85, 190, 190, 0.69)",
      },
      title: {
        position:         "absolute",
        top:                1,
        left:               0,
        marginLeft:         4,
        fontSize:          20,
      },
      toggler: {
        position:       "absolute",
        top:              0,
        right:            0,
        marginRight:      4,
      }
    }

    const {listId} = this.props;

    return (
      <div style={styles.headerContainer}>
        <span style={styles.title}>
          {this.props.title}
        </span>
        <span style={styles.toggler}>
          <CompletedToggler
            key     = {listId}
            listId  = {listId}
          />
        </span>
      </div>
    );
  }
}

TaskHeader.propTypes = {
  listId: PropTypes.string.isRequired,
  title:  PropTypes.string.isRequired,
};
