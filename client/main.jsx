import 'babel-polyfill'
import { Meteor } from 'meteor/meteor';
import React  from 'react';
import { render } from 'react-dom'

import { Provider } from 'react-redux';
import Store from '../imports/ui/store/store.js';

import injectTapEventPlugin from 'react-tap-event-plugin';

// import '../imports/startup/client/index.js'; //empty
import App from '../imports/ui/App.jsx';

function AppRoot() {
  return (
    <div className="todo-container">
      <Provider store={Store()}>
        <App />
      </Provider>
    </div>
  );
}

Meteor.startup(()=> {
  injectTapEventPlugin(); // Required for Material IconMenu (v.0.15.0)
  render(
    <AppRoot />,
    document.getElementById('root')
  );
});


// import { browserHistory } from 'react-router'
// import { syncHistoryWithStore } from 'react-router-redux'
// const history = syncHistoryWithStore(browserHistory, store)
