import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import '../imports/startup/client/index.js';  // --empty--
import App from '../imports/ui/App.jsx';

Meteor.startup(() => {
  injectTapEventPlugin(); // Required for Material IconMenu (v.0.15.0)
  render(<App />, document.getElementById('react-root'));
});
