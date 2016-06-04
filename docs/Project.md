# I. TOC
<ol start="0">
  <li>Setup</li>
  <li>Hello World</li>
  <li><u>Task: Components</u></li>
    <ul>
      <li>Simple Task Item</li>
      <li><strong>Material Task Item<u>s</u></strong></li>
      <li>Material Task List</li>
      <li>Task Lists page</li>
    </ul>
</ol>
<ol start="3">
  <li>Task: Layouts & Header</li>
  <li>Task: Collections API</li>
  <li>Task: Forms and Events</li>
  <li>Task: Update and Remove</li>
  <li>Task: Temporary UI State</li>
  <li>Router</li>
  <li>Accounts & Profile</li>
</ol>


# II. Current: (2) Task: Components
A) Simple Task Item
  1. Simple Task Item
  1. Test: Render=> single item
  1. Factory:       single item

B) Material Task Items
  1. Material:      Task Item
  1. Factory:       multiple items
  1. Test: Render=> multiple items
  1. Factory:       completed item
  1. Test: Render=> "task completed" toggler

C) Material Task List
  1. Material:      Task List
  1. Test: Render=> List Container
  1. Factory:       multiple items in list
  1. Test: Render=> List Items

D) Task Lists page
  1. Material:      Task Lists (pg)
  1. Factory:       multiple lists
  1. Test: Render=> multiple lists


# III. Plan
### 3. Task: Layouts & Header
* Component
  * Header: Create Simple Header

* Layouts
  * Task Lists
  * Main Layout: Header and Content


### 4. Task: Collections
* Apollo Server
  * Setup
  * Connect to Mongo

* APIs
  * Setup/Thread API
  * Task Lists
  * Task Items


### 5. Task: Forms and Events
### 6. Task: Update and Remove Tasks
### 7. Task: Temporary UI State

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


# V. Project Structure
1. Readme.md - Summary of Application
1. Project.md - Project Current Stage, Plan, History
1. References.md - Tutorials and Repos
1. Environment.md - Some Regex and Mods from my Env
1. Structure.md - Application Structure
1. CommitJournal.md - Some notes in addition to each message
1. .trash/ - Outside of scope of current commit


# VI. Gold Plating
* UI
  * Loading State
  * Chromatica - UI State Testing
  * Package Tasks, Accounts, & Profile
  * Animations

* Mobile
  * Mobile: Touch Layout
  * Mobile: Cordova
  * Mobile: Push Notifications

* Data
  * REST & SQL interfaces
  * ACID Task completion
