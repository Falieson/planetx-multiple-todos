import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import HelloMessage from './components/HelloMessage.jsx';

// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: false,
    };
  }

  renderMessage() {
    let message = this.props.message;
    return (<HelloMessage message={message} />);
  }

  render() {
    return (
       <MuiThemeProvider muiTheme={getMuiTheme()} className="container">
        {this.renderMessage()}
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  message: PropTypes.string.isRequired,
};

export default createContainer(() => {
  return {
    message: "Hello World!"
  };
}, App);






// # ~Falieson:20160603
//
// import React, { Component, PropTypes } from 'react';
// import ReactDOM from 'react-dom';
// import { Meteor } from 'meteor/meteor';
// import { createContainer } from 'meteor/react-meteor-data';
//
// import HelloPage from './pages/Hello.jsx';
//
// // App component - represents the whole app
// class App extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       message: false,
//     };
//   }
//
//   render() {
//     return (
//       <div className="container">
//         <HelloPage message={message}/>
//       </div>
//     );
//   }
// }
//
// App.propTypes = {
//   message: PropTypes.string.isRequired,
// };
//
// export default createContainer(() => {
//   return {
//     message: "Hello World"
//   };
// }, App);
