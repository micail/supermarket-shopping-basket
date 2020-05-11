import { UPDATE_TOTAL, CLEAR_TOTALS } from '../types/totalsTypes';

export const updateTotal = (payload) => ({
  type: UPDATE_TOTAL,
  payload,
});

export const clearTotals = () => ({
  type: CLEAR_TOTALS,
});
