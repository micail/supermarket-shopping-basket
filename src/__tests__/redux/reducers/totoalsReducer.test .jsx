import totalsReducer from '../../../redux/reducers/totalsReducer';
import { updateTotal, clearTotals } from '../../../redux/actions/totalsActions';

import dataMock from '../../dataMock/priceList';

describe('Totals reducer tests', () => {
  const INITIAL_STATE = {
    subTotal: null,
    savings: [],
    totalSavings: null,
    totalToPay: null,
  };
  it('should return initial state', () => {
    expect(totalsReducer(undefined, {})).toEqual(INITIAL_STATE);
  });
  it('should update the total value based on a key', () => {
    const index = { totalSavings: 30 };
    const expected = {
      subTotal: null,
      savings: [],
      totalSavings: 30,
      totalToPay: null,
    };
    expect(totalsReducer(INITIAL_STATE, updateTotal(index))).toEqual(expected);
  });
  it('should delete the record and instance of price list item in the receipt', () => {
    const state = {
      subTotal: 20,
      savings: [],
      totalSavings: null,
      totalToPay: null,
    };
    expect(totalsReducer(state, clearTotals())).toEqual(INITIAL_STATE);
  });
});
