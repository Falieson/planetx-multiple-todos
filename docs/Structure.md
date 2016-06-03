Basic structure supplied by [Meteor 1.3 Guide - App Structure (Link, 20160601)](http://guide.meteor.com/structure.html)

Final Structure based on collaboration with Stackoverflow and Gitter/meteor#meteor and many tutorials.

```
client/                        # client entry point, imports all client code
  main.html                    # react-root node, imports roboto for material
  main.js                      # imports ui
  main.css                     # global css
imports/
  startup/
    client/
      index.js                 # client entry point
      routes.js                # set up all routes in the app
    config/
      useraccounts.js          # configure login templates
    server/
      fixtures.js              # fill the DB with example data on startup
      index.js                 # server entry point like API

  api/
    api.js                     # client & server api calls like methods
    api-server.js              # server only api calls like publications
    lists/                     # a unit of domain logic
      server/
        publications.js        # all list-related publications
        publications.tests.js  # tests for the list publications
      lists.js                 # definition of the Lists collection
      lists.tests.js           # tests for the behavior of that collection
      methods.js               # methods related to lists
      methods.tests.js         # tests for those methods
      methods-pubsub.tests.js  # tests for methods used in both pub & sub
      subscriptions.js         # all list-related subscriptions
      subscriptions.tests.js   # tests for the list subscriptions
  ui/
    components/                # all reusable components in the application
      taskList/                # split by domain
        taskList.jsx
        taskList.test.js
    layouts/                   # wrapper components for behaviour and visuals
      TaskLists/               # split by domain
        Mouse/                 # default small/medium/large, simple mobile support
        Touch/                 # Mobile Layouts designed for Touch & limited KB
          Portrait/            # Portrait and Landscape Views
            Small/
            Medium/
          Landscape/
            Medium/
            Large/
    pages/                     # entry points for rendering used by the router
      List.jsx                
      Lists.test.js
    App.jsx
    App.test.js

server/
  main.js                      # server entry point, imports startup/server/

```
