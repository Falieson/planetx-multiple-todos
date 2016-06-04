import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

// HelloMessage movedTo './components/.trash/HelloMessage.jsx';
import TaskItem from './components/taskItem/Item.jsx';

// App component - represents the whole app
export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     message: false,
  //   };
  // }

  getTasks() {
    return [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' },
    ];
  }

  renderTaskList() {
    // let message = this.props.message;
    // return (<HelloMessage message={message} />);
    // return (<TaskList />);
    return this.getTasks().map((task) => (
      <TaskItem key={task._id} task={task} />
    ));
  }

  render() {
    return (
       <MuiThemeProvider muiTheme={getMuiTheme()} className="container">
        <ul>
          {this.renderTaskList()}
        </ul>
      </MuiThemeProvider>
    );
  }
}

// export default createContainer(() => {
//   return {
//     message: "Hello World"
//   };
// }, App);


// App.propTypes = {
//   message: PropTypes.string.isRequired,
// };

// export default createContainer(() => { {}
//   return {
//     message: "Hello World!"
//   };
// }, App);
