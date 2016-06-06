# 3. Task: Collections API
### 3.B) Task Items & Lists
### 3.B.2) Task Collection Fixtures
commit: `{this}`

branch: `3/task_collections`

Message: `3.B.2) Fixtures: Task Items & Lists`

Notes: `** revisit to add fixture tests`

Files:
*  `imports/api/taskItems/server/fixtures.js`
*  `imports/api/taskLists/server/fixtures.js`


### 3.B.1) Task Collection Fixtures
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
### 3.A.2) Task Items & Lists
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

### 3.A.1) Simple Structure
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

Notes: `FIXME: **incomplete** Haven't figured out how to detect the material-ui checkbox is checked`

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
