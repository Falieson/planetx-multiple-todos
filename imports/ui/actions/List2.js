


//## EXPORT THE QUESTIONER
export function subscribeToTaskListsIfNeeded(){
  return (dispatch, getState) => {
    const state = getState();
    if( startSubscriptionToTaskLists(state) ){

      return dispatch( createTaskListSubscription() )
    }

    else if( readySubscriptionToTaskLists(state) ){
      dispatch( subscriptionToTaskListsReady() )

      return dispatch( shouldFetchTaskLists(state) )
    }
  }
}

//## QUESTION 1: START?

//### QUESTION
function startSubscriptionToTaskLists(state) {
  const { TaskLists } = state;
  if(TaskLists && TaskLists.subscription){
    return false;
  } else {
    return true;
  }
}

//### ANSWER
function createTaskListSubscription() {
  return dispatch => {
    dispatch(subscribeToTaskLists())

    const subscription = TaskListSubs.find.all();
    dispatch(subscribedToTaskLists(subscription));
  }
}

//### STEPS
function subscribedToTaskLists(subscription) {
  return {
    type: TASK_LISTS_SUBSCRIBE_CREATE,
    subscription,
    createdAt: Date.now()
  }
}
function subscribeToTaskLists() {
  return {
    type: TASK_LISTS_SUBSCRIBE_START
  }
}

//## QUESTION 2: READY?
//### QUESTION
function readySubscriptionToTaskLists(state) {
  const { TaskLists } = state;
  if(TaskLists && TaskLists.subscriptionReady){
    return false;
  } else {
    return true;
  }
}

//### ANSWER
function readyTaskListSubscription(state) {
  const { dispatch } = state;

  const notReady = ()=> {
    dispatch( subscriptionToTaskListsWaiting() )
    console.log("'readyTaskListSubscription' didn't find TaskLists.subscription, TaskLists: ", TaskLists);
  };

  if(state){
    const { TaskLists } = state;
    const TaskListReady = TaskLists && TaskLists.subscription && TaskLists.subscription.ready();

    if(TaskListReady){
        dispatch( subscriptionToTaskListsReady() )
    } else {
      notReady()
    }
  } else {
    console.log("NO STATE> ", this);
    notReady()
  }
}

//### STEPS
function subscriptionToTaskListsWaiting() {
  return {
    type: TASK_LISTS_SUBSCRIBE_WAITING
  }
}
function subscriptionToTaskListsReady() {
  return {
    type: TASK_LISTS_SUBSCRIBE_READY
  }
}



// FETCH

//## EXPORT THE QUESTIONER
export function fetchTaskListsIfNeeded() {
  return (dispatch, getState) => {
    const state = getState();

    if(readySubscriptionToTaskLists(state)) {
      console.log("STATE 1> ", state);

      return dispatch( readyTaskListSubscription() );
    }
    else if(shouldFetchTaskLists(state)) {
      return dispatch( fetchTaskLists() );
    }
  }
}

//## QUESTION 1: START?

//### QUESTION
function shouldFetchTaskLists(state) {
  const { TaskLists } = state;

  const case1 = !TaskLists.subscriptionReady;

  const recently = Date.now() - 100; //last 100ms
  const case2 = TaskLists && TaskLists.lastUpdated && (TaskLists.lastUpdated - recently > 0);
  const case3 = TaskLists.isFetching;

  if(case1){
    // this should never happen because the case is handled higher up the logic tree by readySubscriptionToTaskLists()

    console.log("NOT FETCHING BECAUSE SUBSCRIPTION NOT READY");
    return false;
  }
  else if(case2 || case3){
    if(case2){ console.log("NOT FETCHING BECAUSE: Case 2"); }
    if(case3){ console.log("NOT FETCHING BECAUSE: Case 3"); }
    return false;
  }
  else {
    return true;
  }
}

//### ANSWER
function fetchTaskLists() {
  return dispatch => {
    const Lists = TaskListViews.find.all();
    dispatch( requestTaskLists() );

    return dispatch => {
      dispatch( receiveTaskLists(Lists) )
    }
  }
}

//### STEPS
function receiveTaskLists(data) {
  return {
    type: TASK_LISTS_FETCH_SUCCESS,
    taskLists: data,
    receivedAt: Date.now()
  }
}
function requestTaskLists() {
  return {
    type: TASK_LISTS_FETCH_START
  }
}
