import * as totalsTypes from '../types/totalsTypes';

const INITIAL_STATE = {
  subTotal: null,
  savings: [],
  totalSavings: null,
  totalToPay: null,
};

const receiptReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case totalsTypes.UPDATE_TOTAL:
      return { ...state, ...action.payload };
    case totalsTypes.CLEAR_TOTALS:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default receiptReducer;
