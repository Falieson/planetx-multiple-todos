import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer.js';
const logger = createLogger();

const Store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk, logger));

export default Store;
