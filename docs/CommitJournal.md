# 5. Task: Update and Delete
### 5.B.) Task Item Expiration
##### 5.B.2) Rebuilt Task Item as custom component
commit: `{this}`

branch: `5/extraCredit/task_expiration`

Message: `5.B.2) Rebuilt task item into custom component`

Notes:
* `Setup react-redux`
* `Renamed 'checked' to 'completed'`
* `API development hampered by slow build times since adding webpack`

Files:
* `package.json`
* `.babelrc`
* `imports/ui/store/store.js`
* `imports/ui/App.jsx`
* `imports/ui/actions/setVisibility.js`
* `imports/ui/actions/updateTask.js`
* `imports/ui/components/taskItem/Complete.jsx`
* `imports/ui/components/taskItem/Item.jsx`
* `imports/ui/components/taskItem/Remove.jsx`
* `imports/ui/components/taskItem/Stats.jsx`
* `imports/ui/components/taskItem/Title.jsx`
* `imports/ui/components/taskItem/UnComplete.jsx`
* `imports/ui/components/taskList/Header.jsx`
* `imports/ui/components/taskList/Items.jsx`
* `imports/ui/components/taskList/List.jsx`
* `imports/ui/components/taskList/NewItem.jsx`
* `imports/ui/components/taskList/visibilityToggler.jsx`
* `imports/ui/pages/Lists.jsx`
* `imports/ui/pages/TaskLists.jsx`
* `imports/ui/reducers/rootReducer.js`
* `imports/ui/reducers/visibilityFilter.js`
* `imports/api/helpers/subscriptions.js`
* `imports/api/taskItems/factories.js`
* `imports/api/taskItems/methods.js`
* `imports/api/taskItems/server/publications.js`
* `imports/api/taskItems/subscriptions.js`
* `imports/api/taskItems/views.js`
* `imports/api/taskLists/server/fixtures.js`
* `imports/api/taskLists/server/publications.js`
* `imports/api/taskLists/subscriptions.js`
* `imports/api/taskLists/views.js`

References:
*  [How-We-Redux-Todos](git+https://github.com/abhiaiyer91/How-We-Redux-Todos.git)



##### 5.B.1) Branch Init
commit: `#060b654`

branch: `5/extraCredit/task_expiration`

Message: `5.B.1) INIT: Extra Credit Assignment`

Notes:
* `Starting the branch with no work done.`
* `Looked for issues throughout base to improve INIT`

Files:
* `docs/ExtraCredit.md`
* `docs/Project.md`


### 5.A.) Task List Update and Remove Task
commit: `#957734c`

branch: `5/task_update_remove`

Message: `5.A) Replaced Toggler w/ Controller Menu: SetComplete, deleteTask`

Notes:
* TODO: clean up packages.json and some other clean up resulting from big refactor
* updated all imports  to be relative
* toggler changed to iconMenu
* Ended up spending a lot of time doing discovery for new topics:
  * `React Component and PropType`
  * `meteor-babel-webpack`: **all imports** must be relative
  * `material-ui dependencies`

Files:
*  `client/main.jsx`
*  `server/main.js`
*  `imports/ui/App.jsx`
*  `imports/ui/components/taskItem/Item.jsx`
*  `imports/ui/components/taskList/List.jsx`
*  `imports/startup/server/fixtures.js`
*  `imports/startup/server/index.js`
*  `imports/api/api-server.js`
*  `imports/api/taskItems`
  *  `/server/fixtures.js`
  *  `methods.js`
  *  `subscriptions.js`
  *  `views.js`
*  `imports/api/taskLists/`
  *  `/server/fixtures.js`
  *  `subscriptions.js`
  *  `views.js`



# 4. Task: Form and Events
commit: `#0a6d419`

branch: `4/forms_events`

Message: `4) New Task Form: Create new tasks in a list`

Notes:
*  `Simple enough commit, going to move on to next branch`

Files:
*  `imports/ui/pages/Lists.jsx`
*  `imports/ui/components/taskList/List.jsx`
*  `imports/api/taskLists/views.js`

References:
* [Using Babel in Meteor - Link, 20160607](https://github.com/thereactivestack/meteor-webpack/tree/master/packages/webpack/)
* [Forms and Events - Link, 20160607](https://www.meteor.com/tutorials/react/forms-and-events)

# 3. Task: Collections API
### 3.C) Task Items & Lists
##### 3.C.3) Denormalize to Multiple Collections
commit: `#1909487`

branch: `3/task_collections`

Message: `3.C.3) Data: Denormalize to Multiple Collections`

Notes:
*  `Using List's ID to return Tasks`
*  `Updated Structure.md to represent current taskLists directory`
*  `Tried to use [dburles:collection-helpers](https://github.com/dburles/meteor-collection-helpers) for collection joins but received errors. Went with passing the parentId and recording childIds, later I should update this commit with either transform or the collection helpers.`

Files:
* `mod: docs/Structure.md`
* `new: imports/api/helpers/subscriptions.js`
* `new: imports/api/taskLists/helpers.js`
* `mov: imports/api/taskLists/actions.js ->  * subscriptions.js *`
* `mov: imports/api/taskItems/actions.js ->  * subscriptions.js *`
* `mod: imports/ui/App.jsx`
* `mod: imports/ui/components/taskList/List.jsx`
* `mod: imports/api/taskItems/server/publications.js`
* `mod: imports/api/taskItems/views.js`
* `imports/api/taskLists/`
  * `mod: collections.js`
  * `mod: factories.js`
  * `mod: methods.js`
  * `mod: server/fixtures.js`
  * `mod: server/publications.js`
  * `mod: views.js`

References:
  * [Denormalizing into Multiple Collections]( http://guide.meteor.com/collections.html#denormalization)
  * [Meteor Tutorial - React-simple-todos](https://www.meteor.com/tutorials/react/collections)

##### 3.C.2) Use Views and Actions to deliver Data
commit: `#93b4831`

branch: `3/task_collections`

Message: `3.C.2) Data: Views and Actions`

Notes:
*  `Use Views and Actions rather than methods directly, creates reusability for pub/sub`
*  `Created task items in separate collection but not directly referencing them yet`
* ** Tip: **
Rather than doing `meteor reset && meteor` to reset the collection, do the below commands and add a space or enter (empty char) to any file, and hit save to trigger meteor's webserver rebuild.
```
$ meteor mongo
> db.taskLists.remove({}) // dumps the collection
```

Files:
*  `.meteor/packages`
*  `imports/ui/App.jsx`
*  `imports/ui/components/taskList/List.jsx`
*  `imports/ui/pages/Lists.jsx`
*  `imports/api/taskItems/collections.js`
*  `imports/api/taskItems/factories.js`
*  `imports/api/taskItems/methods.js`
*  `imports/api/taskItems/views.js`
*  `imports/api/taskLists/collections.js`
*  `imports/api/taskLists/factories.js`
*  `imports/api/taskLists/methods.js`
*  `imports/api/taskLists/server/fixtures.js`
*  `imports/api/taskLists/server/publications.js`
*  `imports/api/taskLists/views.js`


##### 3.C.1) Subscribe to Data on the Client
commit: `#2c49c82`

branch: `3/task_collections`

Message: `3.C.1) Task Data: Simple Publish and Subscribe`

Notes:
* `Advanced Meteor methods doing validation, schemas, and factories`
* `Data renders with pub/sub and pckgs: "insecure" and "autopublish are removed"`

Fixes: `In (3.A.2) Views were incorrectly called Models`

Files:
* `mod: imports/ui/App.jsx`
* `mod: imports/ui/pages/Lists.jsx`
* `mod: imports/ui/components/taskList/List.jsx`
* `mod: imports/api/api.js`
* `mod: imports/api/api-server.js`
* `mod: imports/api/taskItems/methods.js`
* `mv : imports/api/taskItems/models.js -> ./views.js`
* `mod: imports/api/taskLists/actions.js`
* `mod: imports/api/taskLists/methods.js`
* `mv : imports/api/taskLists/models.js -> ./views.js`
* `mod: imports/api/taskLists/server/fixtures.js`
* `mod: imports/api/taskLists/server/publications.js`

References:
* [Advanced Method boilerplate](http://guide.meteor.com/methods.html#advanced-boilerplate)

### 3.B) Task Items & Lists
##### 3.B.3) Render DB items
commit: `#65c9773`

branch: `3/task_collections`

Message: `3.B.3) Render: Collection Tasks and Lists`

Notes: `Insecure & Autopublish are enabled to illustrate the work in the last commit for publish and subscribe`

Files:
*  `imports/ui/pages/Lists.jsx`
*  `imports/ui/components/taskList/List.jsx`
*  `imports/api/taskLists/models.js`
*  `imports/api/taskLists/server/fixtures.js`


##### 3.B.2) Task Collection Fixtures
commit: `#a32b875`

branch: `3/task_collections`

Message: `3.B.2) Fixtures: Task Items & Lists`

Notes: `**revisit to add fixture tests`

Files:
*  `imports/api/taskItems/server/fixtures.js`
*  `imports/api/taskLists/server/fixtures.js`


##### 3.B.1) Task Collection Fixtures
commit: `#484582a`

branch: `3/task_collections`

Message: `3.B.1) Fixtures: Simple Fixture for Learners`

Notes:
*  inspect with meteor mongo:
  *  `db.taskItems.find().count()`
  *  `db.taskLists.find().count()`
*  fixtures test is possible with stubs

Files:
*  `server/main.js`
*  `imports/startup/server/fixtures.js`
*  `imports/api/taskItems/factories.js`
*  `imports/api/taskItems/server/fixtures.js`

References:
* [Mocking the database]( http://guide.meteor.com/testing.html#mocking-the-database)
* [Loading data with Methods](http://guide.meteor.com/methods.html#loading-data)

### 3.A) Setup API
##### 3.A.2) Task Items & Lists
commit: `#4f42c73`

branch: `3/task_collections`

Message: `3.A.2) Setup API: Task Items & Lists`

Notes:
*  Basic structure before making fixtures and making the api methods
*  Generate a new item with `$ cd /imports/api/ && cp -rf .boilerplate taskItems`
*  Lots of changes to structure, will be doc'd at end of branch

Files:
*  `imports/ui/App.jsx`
*  `imports/ui/components/`<u>taskItem/Item.test.js</u>
*  `imports/ui/components/`<u>taskList/List.jsx</u>
*  `imports/api/.boilerplate/`
    *  `Readme.md`
    *  `actions.js`
    *  `collections.js`
    *  `factories.js`
    *  `methods-pubsub.js`
    *  `methods.js`
    *  `models.js`
    *  `subscriptions.js`
    *  `docs/*`
    *  `server/`
      *  `fixtures.js`
      *  `publications.js`
    *  `tests/`
      *  `index.tests.js`
      *  `actions.tests.js`
      *  `models.tests.js`
      *  `publications.tests.js`
      *  `subscriptions.tests.js`
*  `imports/startup/server/`
    *  `index.js`
    *  `fixtures.js`

References:
* [Meteor's React Collections: Storing Tasks](https://www.meteor.com/tutorials/react/collections)
* [Falieson's Learning React: multi-branch sketches](https://github.com/Falieson/LearningReact)

##### 3.A.1) Simple Structure
commit: `#5530d5c`

branch: `3/task_collections`

Message: `3.A.1) Setup API: Simple Structure`

Notes: `Putting this in one commit for learners`

Files:
*  `imports/api/api-server.js`
*  `imports/api/api.js`
*  `imports/startup/client/index.js`
*  `imports/startup/server/index.js`

References:
* [Stackoverflow: Meteor 1.3 Collections Structure](http://stackoverflow.com/questions/37511561/meteor-1-3-app-structure-spltting-tasks-into-methods-subscriptions)


# 2. Task: Components #
### 2.D) Task Lists Page
commit: `{this}`

Message: `2.D) Task Lists Page`

Notes: `Pretty fast to make things with React`

Files:
*  `imports/api/factories/taskList.js`
*  `imports/ui/App.jsx`
*  `imports/ui/pages/Lists.jsx`
*  `imports/ui/components/taskList/List.jsx`

### 2.C) Material Task List

##### 2.C.2) Tasks come from a single factory
commit: `#c702516`

Message: `2.C.2) Tasks come from a single factory`

Notes:
```
Moved tests to the last step (2.E.1-3) b/c I'm still learning the react ecosystem and I'm fighting chai too much
```

Files:
*  `/client/main.less       # otherwise the Paper overflows-x window`
*  `/imports/ui/App.jsx`
*  `/imports/api/factories/taskItem.js`
*  `/imports/ui/components/taskItem/Item.jsx`
*  `/imports/ui/components/taskList/List.jsx`

##### 2.C.1) Material Task List
commit: `#d26e134`

Message: `2.C.1) Material Task List`

Notes: `Moved task list into its own component`

Files:
*  `/imports/ui/App.jsx`
*  `/imports/ui/components/taskList/List.jsx`

References:
* [Material-UI: Toggler](http://www.material-ui.com/#/components/toggle)

### 2.B) Material Task Items

##### 2.B.2) Test that Task Item is checkable
commit: `#d26e134`

Message: `** 2.B.2) Test that Task Item is checkable/completable`

FIXME: `**incomplete Haven't figured out how to detect the material-ui checkbox is checked`

Files:  `/imports/ui/components/taskItem/Item.test.jsx`

References:
* [Material-UI: Toggler](http://www.material-ui.com/#/components/toggle)

##### 2.B.1) Material Task Item
commit: `#2bbdc55`

Message: `2.B.1) Material Task Item`

Notes:
*  `Materialized the Task Item`
*  `Updated Project.md and this CJ to better represent this branches workflow`

Files:  `/imports/ui/components/taskItem/Item.jsx`

References:
* [Material-UI Lists](http://www.material-ui.com/#/components/list) - Viewed 20160604, Authored 2016????

### 2.A) Simple Task Item

##### 2.A.3) Simple Factory for Task Item
commit: `#1a3d9ce`

Message: `2.A.3) Simple Factory for Simple Task Item`

Notes: `Very basic factory`

Files:  `/imports/ui/components/taskItem/Item.test.js`

References:
* Meteor's Guide [Generating Test Data](http://guide.meteor.com/testing.html#generating-test-data) - Viewed 20160602, Authored 2016????

##### 2.A.2) Simple Test for Task Item
commit: `#35b9e03`

Message: `2.A.2) Simple Test for Simple Task Item`

Notes: `Very basic test`

Files: `/imports/ui/components/taskItem/Item.test.js`

References:
* Meteor's React Tutorial [TodoItem.tests.js](https://github.com/meteor/todos/blob/64443420030eeaa16a6e7d38743655ee7522d65c/imports/ui/components/TodoItem.tests.js) - Viewed 20160604, Authored 20160526
* Meteor's Guide [Simple React Unit Testing](http://guide.meteor.com/testing.html#simple-react-unit-test) - Viewed 20160602, Authored 2016????

##### 2.A.1) Simple Task
commit: `#c598f15`

Message: `2.A.1) Simple List of Tasks`

Notes: `Pretty much straight from the React tutorial`

Files:
*  `/imports/ui/App.jsx`
*  `/imports/ui/components/taskItem/Item.jsx`

References:
* Meteor's React [Tutorial: Testing](https://www.meteor.com/tutorials/react/testing)


# 1. Hello World #
### 1.B) Material Hello
commit: `#1e0dbdd`

Message: `1. Material Hello World`

Notes: `Put some paper on the page and each letter in a circle`

Files:
*  `/imports/ui/App.jsx`
*  `/imports/ui/pages/Hello.jsx`
*  `/imports/ui/components/HelloMessage.jsx`


### 1.A) Simple Hello
commit: `#24643d98`

Message: `1. Simple Hello World`

Notes: `Just output hello world! to the page.`

#0. Setup #
commit: `#4cd9b22`

Message:  `0. Setup, Write: readme, project plan, structure, references`

Notes: `Pretty much all in the .md files`
