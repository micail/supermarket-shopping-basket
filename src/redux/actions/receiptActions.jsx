import { ADD_ITEM, DELETE_ITEM, CLEAR_RECEIPT } from '../types/receiptTypes';

export const addItem = (index) => ({
  type: ADD_ITEM,
  index,
});

export const deleteItem = (index) => ({
  type: DELETE_ITEM,
  index,
});

export const clearReceipt = () => ({
  type: CLEAR_RECEIPT,
});
