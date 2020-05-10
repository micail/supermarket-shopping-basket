import { addItem, deleteItem, clearReceipt } from '../../../redux/actions/receiptActions';
import { ADD_ITEM, DELETE_ITEM, CLEAR_RECEIPT } from '../../../redux/types/receiptTypes';


describe('Receipt actions tests', () => {
  it('should contain an action to record and instance of price list item in the receipt', () => {
    const index = 2;
    const expected = {
      type: ADD_ITEM,
      index,
    };
    expect(addItem(index)).toEqual(expected);
  });
  it('should contain an action to delete and instance of price list item from the receipt', () => {
    const index = 2;
    const expected = {
      type: DELETE_ITEM,
      index,
    };
    expect(deleteItem(index)).toEqual(expected);
  });
  it('should contain an action to clear the receipt', () => {
    const expected = {
      type: CLEAR_RECEIPT,
    };
    expect(clearReceipt()).toEqual(expected);
  });
});
