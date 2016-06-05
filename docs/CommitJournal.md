# 2. Task: Components #
### 2.C) Material Task List

##### 2.C.2) Tasks come from a single factory
commit: `{this}`

Message: `2.C.2) Tasks come from a single factory`

Notes: `Moved tests to the last step (2.E.1-3) b/c I'm still learning the react ecosystem and I'm fighting chai too much`

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
* `Materialized the Task Item`
* `Updated Project.md and this CJ to better represent this branches workflow`

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
* `/imports/ui/App.jsx`
* `/imports/ui/components/taskItem/Item.jsx`

References:
* Meteor's React [Tutorial: Testing](https://www.meteor.com/tutorials/react/testing)


# 1. Hello World #
### 1.B) Material Hello
commit: `#1e0dbdd`

Message: `1. Material Hello World`

Notes: `Put some paper on the page and each letter in a circle`

Files:
* `/imports/ui/App.jsx`
* `/imports/ui/pages/Hello.jsx`
* `/imports/ui/components/HelloMessage.jsx`


### 1.A) Simple Hello
commit: `#24643d98`

Message: `1. Simple Hello World`

Notes: `Just output hello world! to the page.`

#0. Setup #
commit: `#4cd9b22`

Message:  `0. Setup, Write: readme, project plan, structure, references`

Notes: `Pretty much all in the .md files`
