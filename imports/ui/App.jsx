import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import Hello from './components/Hello.jsx';

// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: false,
    };
  }

  renderHello() {
    let message = this.props.message;
    return (<Hello message={message} />);
  }

  render() {
    return (
      <div className="container">
        {this.renderHello()}
      </div>
    );
  }
}

App.propTypes = {
  message: PropTypes.string.isRequired,
};

export default createContainer(() => {
  return {
    message: "World!"
  };
}, App);
