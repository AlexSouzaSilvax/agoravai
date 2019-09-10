import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from '../reducer';

// cria application state
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
export default Store = createStoreWithMiddleware(reducers);