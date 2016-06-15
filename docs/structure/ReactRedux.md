# React Containers
I tried react-komposer but received an error about Tracker not being found.
I was going to use DocumentContainer but it didn't work well with my convention for abstracting away meteor's API for frontend work. DC does its own abstraction but is more verbose on the client end rather than drying-up the API with views/methods on the server side and loading data into state.

# React-Redux-Meteor Conclusions
For large scale app building using Meteor's mini-mongo-db and redux, there will be a 2x cost for stored data size. Hopefully, adding Apollo client will remove meteor's minimongodb in localstorage allowing me to query and store client data in only one place - the redux state store. Until then, a sacrifice is made and the data is stored in 2 places with the exception that the store has extra information about the current UI such as "isFetching" or "showDropdownMenu".
 [Optimistic UI Changes](https://medium.com/@spencer_carli/how-i-use-react-native-redux-and-meteor-b69b3875dc00#.xj7966m7q) are handled by Redux Actions per Redux's [Real World Example](https://github.com/reactjs/redux/tree/master/examples/real-world).

During the course of learning redux I used gitter quite a bit, the downside is I learned many impure/poor-performance solutions as described in [Avoid often taught Anti-Pattern damaging Performance](https://medium.com/@esamatti/react-js-pure-render-performance-anti-pattern-fb88c101332f#.c2t0f3fri).

# Structure
- ui/actions/        for communicating with the API
- ui/components/     for modularizing the building of pages
- ui/containers/     for "Presentational Components"\*\* (routes\* and async API)
- ui/reducers/       for passing the result of actions to the store
- ui/store/          for holding the state tree
- imports/App.jsx\*  for representing the root of the React tree
- client/main.jsx    for mounting React onto DOM root node

\* haven't setup react-router yet, expect this structure to change a bit more
\*\* [Presentational Components - Redux Docs](http://redux.js.org/docs/basics/UsageWithReact.html)

# Advanced Reducers
**By: acemarke in discord channel 20160703:1700**
http://redux.js.org/docs/FAQ.html#reducers-share-state
Most of your behavior is probably handled by the "per-domain-slice" reducers,
but for those times when you need to share data between branches, you write some special handling code,
and you use reduceReducers to create a new function that mushes together both of your "top-level" reducer functions.
Everyone assumes that combineReducers is the only way to do things, [but] it's not. You could put every last bit of your reducer logic into one giant function if you wanted that just gets hard to manage
and splitting up responsibility by slice of state is a reasonable default way to do it, but it's not the only way, and people get stuck thinking inside that box


```js
import {combineReducers} from "redux";
import reduceReducers from "reduce-reducers";


import reducerA from "./reducerA";
import reducerB from "./reducerB";
import specialCaseHandler from "./specialCaseHandler";


const combinedReducer = combineReducers({
    a : reducerA,
    b : reducerB
});

function globalSharedBehaviorReducer(state, action) {
    switch(action.type) {
        case SOME_SPECIFIC_ACTION : {
            const newA = specialCaseHandler(state.a, state.b);
            return {
                ...state,
                a : newA
            };
        }    
    }
}

const rootReducer = reduceReducers(combinedReducer, globalSharedBehaviorReducer);
```


# Older React Outline/Notes
The below snippets come from the linked github discussions. Above, I explain my conclusions from these discussions and other articles you can find in the commit journal for item 5.B.3.

## [Discussion 1 - LINK](https://github.com/kadirahq/react-komposer#why) ##
Lately, in React we tried to avoid states as possible we can and use props to pass data and actions. So, we call these components Dumb Components or UI components.

And there is another layer of components, which knows how to fetch data. We call them as Containers. Containers usually do things like this:

Request for data (invoke a subscription or just fetch it).
Show a loading screen while the data is fetching.
Once data arrives, pass it to the UI component.
If there is an error, show it to the user.
It may need to refetch or re-subscribe when props changed.
It needs to cleanup resources (like subscriptions) when the container is unmounting.
If you want to do these your self, you have to do a lot of repetitive tasks. And this is good place for human errors.

Meet React Komposer

That's what we are going to fix with this project. You simply tell it how to get data and clean up resources. Then it'll do the hard work you. This is a universal project and work with any kind of data source, whether it's based Promises, Rx.JS observables or even Meteor's Tracker.

## [Discussion 2 - LINK](https://forums.meteor.com/t/solved-meteor-1-3s-createcontainer-and-redux-dispatch-event-handlers-etc/20092/9?u=falieson) ##
You might be overthinking it. :slight_smile: createContainer is doing the exact same thing the getMeteorData mixin used to do, but now you're accessing Meteor data via this.props.someData instead of this.data.someData. Redux is passing in props via connect, but it's completely unrelated to createContainer. In short:

• Both createContainer and connect are higher-order functions that wrap a component and pass props into it

• createContainer handles reactive variables and data sources

• connect handles Redux state
There's no redundancy. You can even have Meteor's createContainer reference Redux state which could come in handy. Let's say you have a web app where you're an admin, and you can view the site as other users in order to see their photos. You have a dropdown menu that lets you choose a user (which is handled by Redux). You could set it up like this:

```js
const MeteorContainer = createContainer(({ actingUserId }) => {
  const handle = Meteor.subscribe('photos', actingUserId || Meteor.userId());

  return {
    isDataReady: handle.ready(),
    photos: Photos.find({}, { sort: { createdAt: -1 } }).fetch(),
  }
}, MyComponent);

export default connect(({ actingUserId }) => ({ actingUserId }))(MeteorContainer)
```
So connect takes the Redux state variable actingUserId and passes it into MeteorContainer, which then uses that user ID to subscribe to photos only owned by that user.

**Next Post** This is exactly what we do, with one small difference. We wrap the Redux container with the Meteor container. This is because we have a lot of temporary, fast changing UI state stored in Redux (like user input). We don't want the Meteor container (which has potentially "complex" minimongo queries, etc) to be re-run every time the user types or triggers some other redux action.

Overall, we have found this hierarchy to be more performant than wrapping Meteor with Redux.
