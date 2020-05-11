import totalsReducer from '../../../redux/reducers/totalsReducer';
import { updateTotal, clearTotals } from '../../../redux/actions/totalsActions';

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
  it('should clear the totals values', () => {
    const state = {
      subTotal: 20,
      savings: [],
      totalSavings: null,
      totalToPay: null,
    };
    expect(totalsReducer(state, clearTotals())).toEqual(INITIAL_STATE);
  });
});
