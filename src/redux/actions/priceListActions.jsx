import { ADD_PRICELIST, DELETE_PRICELIST } from '../types/priceListTypes';

export const addPriceList = (payload) => ({
  type: ADD_PRICELIST,
  payload,
});

export const deletePriceList = () => ({
  type: DELETE_PRICELIST,
});
