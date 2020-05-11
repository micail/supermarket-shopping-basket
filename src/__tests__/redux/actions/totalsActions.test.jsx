import { updateTotal, clearTotals } from '../../../redux/actions/totalsActions';
import { UPDATE_TOTAL, CLEAR_TOTALS } from '../../../redux/types/totalsTypes';


describe('Totals summary actions tests', () => {
  it('should contain an action to update total entry', () => {
    const total = { subTotal: 30.5 };
    const expected = {
      type: UPDATE_TOTAL,
      payload: total,
    };
    expect(updateTotal(total)).toEqual(expected);
  });
  it('should contain an action to clear totals', () => {
    const expected = {
      type: CLEAR_TOTALS,
    };
    expect(clearTotals()).toEqual(expected);
  });
});
