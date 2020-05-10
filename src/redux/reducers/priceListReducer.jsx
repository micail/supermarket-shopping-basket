import * as priceListTypes from '../types/priceListTypes';

const INITIAL_STATE = [];

const priceListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case priceListTypes.ADD_PRICELIST:
      return state.concat(action.payload);
    case priceListTypes.DELETE_PRICELIST:
      return [];
    default:
      return state;
  }
};

export default priceListReducer;
