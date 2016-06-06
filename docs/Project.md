# I. TOC
<ol start="0">
  <li>Setup</li>
  <li>Hello World</li>
  <li>Task: Components</li>
  <li><u><strong>Task: Collections API</strong></u></li>
</ol>
<ol start="4">
  <li>Task: Forms and Events</li>
  <li>Task: Update and Remove</li>
  <li>Task: Temporary UI State</li>
  <li>Task: Layouts & Header</li>
  <li>Router</li>
  <li>Accounts & Profile</li>
</ol>


# II. Current: (3) Task: Collections API
*  A)  Setup API
  * A.1)  Simple Structure
  * A.2)  Task Items & Lists Structure
*  B)  Task Items & Lists - API & Fixtures
  * B.1)  Fixtures: Simple Fixture Example
  * B.2)  Fixtures: Task Items & Lists
  * B.3)  Render: Collection Docs/Items
*  C)  <strong>Data: Publish & Subscribe</strong>
  * C.1)  <strong>Data: Simple Publish and Subscribe</strong>
  * C.2)  <strong>Data: Joined Collections</strong>
*  C)  Apollo to Mongo
*  D)  Test Coverage for API


# III. Plan
### 4. Task: Forms and Events
### 5. Task: Update and Remove Tasks
### 6. Task: Temporary UI State

### 7. Task: Layouts & Header
*  A) Layout:    Header and Content
*  B) Layout:    Responsive (S, M, L)
*  C) Component: Material Navbar

### 8. Router
* Setup react-router
* Render Home

### 9. Accounts
* Components
  * User Auth (Login/Register)
  * User Profile
  * Header: Update for Accounts

* API
  * Account Auth
  * Account Profile

* Router
  * Render Auth Page
  * Render Profile Page

# IV. History
### 0. Setup
* App Structure
  1. files are blank, just touched
  1. some test files maybe removed or unified
* Packages
* Initial Readme.md & Project.md

### 1. Hello World
* Simple Hello World
* Material Hello World

### 2. Task: Components
##### A) Simple Task Item
  1. Simple Task Item
  1. Test: Render=>     single item
  1. Factory:           single item

##### B) Material Task Items
  1. Material:            Task Item
  1. Test: Render=>       "task completed" toggler

##### C) Material Task List
  1. Material:            Task List
  1. Factory:             multiple items in list

##### D) Task Lists page
  1. Material:            Task Lists (pg)
  1. Factory:             multiple lists

##### E) UI Tests: Task List component and page
  1. Test: Render=>       List Container
  1. Test: Render=>       creates multiple List Items
  1. Test: Render=>       multiple lists

# V. Project Structure
1. Readme.md         - Summary of Application
1. Project.md        - Project Current Stage, Plan, History
1. References.md     - Tutorials and Repos
1. Environment.md    - Some Regex and Mods from my Env
1. Structure.md      - Application Structure
1. CommitJournal.md  - Beyond a log message
1. .trash/           - Outside of scope of current commit


# VI. Gold Plating
* UI
  * Loading State
  * Chromatica - UI State Testing
  * Package: Tasks, Accounts, & Profile
  * Animations

* Mobile
  * Mobile: Touch Layout
  * Mobile: Cordova
  * Mobile: Push Notifications

* Data
  * ACID Task completion
  * [REST](http://guide.meteor.com/data-loading.html#rest-interop) & SQL interfaces
  * [Schemas](http://guide.meteor.com/collections.html#schemas)
  * [Migrations](http://guide.meteor.com/collections.html#migrations)

* Production
  * Deploy to Ubuntu
  * [Error Handling](http://guide.meteor.com/methods.html#errors)
