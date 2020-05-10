import receiptReducer from '../../../redux/reducers/receiptReducer';
import { addItem, deleteItem, clearReceipt } from '../../../redux/actions/receiptActions';

import dataMock from '../../dataMock/priceList';

describe('Receipt reducer tests', () => {
  it('should return initial state', () => {
    const state = [];
    expect(receiptReducer(undefined, [])).toEqual(state);
  });
  it('should add record and instance of price list item in the receipt', () => {
    const initialState = [0, 1, 1];
    const index = 0;
    const expected = [0, 1, 1, 0];
    expect(receiptReducer(initialState, addItem(index))).toEqual(expected);
  });
  it('should delete the record and instance of price list item in the receipt', () => {
    const initialState = [0, 1, 1, 0, 1, 2];
    const index = 5;
    const expected = [0, 1, 1, 0, 1];
    expect(receiptReducer(initialState, deleteItem(index))).toEqual(expected);
  });
  it('should delete list from the state', () => {
    const initialState = [0, 1, 1, 0, 1, 2];
    const expected = [];
    expect(receiptReducer(initialState, clearReceipt(dataMock))).toEqual(expected);
  });
});
