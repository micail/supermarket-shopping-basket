/**
* @namespace redux
*/

import {
  createStore, combineReducers,
  applyMiddleware, compose,
} from 'redux';

import priceListReducer from './reducers/priceListReducer';
import receiptReducer from './reducers/receiptReducer';
import totalsReducer from './reducers/totalsReducer';

import { addItem, calculatePriceOnWeight, calculateSubTotal, calculateSavings } from './middleware';

const pipeLine = (store) => (next) => (action) => {
  const prevState = store.getState();
  const prevReceiptReducerState = [...prevState.receiptReducer];

  if ((action.type === 'ADD_ITEM' && Array.isArray(action.index)) && action.index[0].length === 2) {
    const newData = calculatePriceOnWeight(prevState, action.index);
    return addItem(store, [newData]);
  }

  next(action);

  const nextState = store.getState();
  const nextReceiptReducerState = [...nextState.receiptReducer];

  /** Calculate sub-total after every item has been added to the store */
  if (action.type === 'ADD_ITEM') {
    calculateSubTotal(store, nextState);
  }
  console.log(nextState)
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
    totalsReducer,
  };

  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  const applyMid = composeEnhancers(applyMiddleware(pipeLine));
  const store = createStore(combineReducers(reducers), applyMid);

  return store;
};

export default makeStore;
