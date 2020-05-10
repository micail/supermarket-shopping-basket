/**
* @namespace redux
*/

import {
  createStore, combineReducers,
  applyMiddleware, compose,
} from 'redux';

import priceListReducer from './reducers/priceListReducer';
import receiptReducer from './reducers/receiptReducer';

const pipeLine = (store) => (next) => (action) => {
  const prevState = store.getState();
  next(action);
};

/**
 * Creates a new Redux store
 * @memberof redux
 * @param reducers {Object} - reducers to add for extending purposes only
 * @returns {Store<any>}
 */

export const makeStore = () => {
  const reducers = {
    priceListReducer,
    receiptReducer,
  };

  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  const applyMid = composeEnhancers(applyMiddleware(pipeLine));
  const store = createStore(combineReducers(reducers), applyMid);

  return store;
};

export default makeStore;
