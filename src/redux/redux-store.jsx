/**
* @namespace redux
*/

import {
  createStore, combineReducers,
  applyMiddleware, compose,
} from 'redux';

/**
 * Creates a new Redux store
 * @memberof redux
 * @param reducers {Object} - reducers to add for extending purposes only
 * @returns {Store<any>}
 */

export const makeStore = () => {
  const reducers = {
  };

  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  const applyMid = composeEnhancers(applyMiddleware());
  const store = createStore(combineReducers(reducers), applyMid);

  return store;
};

export default makeStore;
