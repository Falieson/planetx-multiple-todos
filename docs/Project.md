# I. TOC
<ol start="0">
  <li>Setup</li>
  <li>Hello World</li>
  <li>Task: Components</li>
  <li>Task: Collections API</li>
  <li>Task: Forms and Events</li>
  <li><u><strong>Task: Update and Remove</strong></u></li>
</ol>
<ol start="6">
  <li>Task: Temporary UI State</li>
  <li>Task: Layouts & Header</li>
  <li>Router</li>
  <li>Accounts & Profile</li>
</ol>


# II. Current: (5) Task: Update and Remove Tasks
* A)  Task List Update (Add Items) & Remove Items
* <strong>B)  Task Item Expiration</strong>
* C)  CRUD Everything
  * New/Delete Task Lists, Update Task List Title
  * Update Task Item Text

# III. Plan
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

### 3) Task: Collections API
##### A)  Setup API
  1.  Simple Structure
  1.  Task Items & Lists Structure
##### B)  Task Items & Lists - API & Fixtures
  1.  Fixtures: Simple Fixture Example
  1.  Fixtures: Task Items & Lists
  1.  Render: Collection Docs/Items
##### C)  Data: Publish & Subscribe
  1.  Data: Simple Publish and Subscribe
  1.  Data: Views and Actions
  1.  Data: Multiple Collections
##### D)  **incomplete** Test Coverage for API
##### E)  **incomplete** Apollo interface for Mongo

### 4. Task: Forms and Events

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

* Scaling
  * Package by Domain (Tasks, Accounts, & Profile)
  * Split into Multiple Apps

* Production
  * Deploy to Ubuntu
  * [Error Handling](http://guide.meteor.com/methods.html#errors)
  * [Multi-Core](https://meteorhacks.com/introducing-multi-core-support-for-meteor/)
* Features
  * Task History
  * Task Stats
    * Components: "Set Started" and Results
      * Field: Task (started) thought of at ??
      * Setting: Avg. default from Created to Started
    * Page: Results
      * Totals
      * Averages
        * Time from Task Started to Created
        * Completion Time (this.sinceStarted(), this.sinceCreated())
