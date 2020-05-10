import * as receiptTypes from '../types/receiptTypes';

const INITIAL_STATE = [];

const receiptReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case receiptTypes.ADD_ITEM:
      return state.concat(action.index);
    case receiptTypes.DELETE_ITEM:
      return state.filter((item, key) => key !== action.index);
    case receiptTypes.CLEAR_RECEIPT:
      return [];
    default:
      return state;
  }
};

export default receiptReducer;
