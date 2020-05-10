import priceListReducer from '../../../redux/reducers/priceListReducer';
import { addPriceList, deletePriceList } from '../../../redux/actions/priceListActions';

import dataMock from '../../dataMock/priceList';

describe('Price list reducer', () => {
  it('should return initial state', () => {
    const state = [];
    expect(priceListReducer(undefined, [])).toEqual(state);
  });
  it('should add list to the state', () => {
    const initialState = [];
    const expected = [...dataMock];
    expect(priceListReducer(initialState, addPriceList(dataMock))).toEqual(expected);
  });
  it('should delete list from the state', () => {
    const initialState = [...dataMock];
    const expected = [];
    expect(priceListReducer(initialState, deletePriceList(dataMock))).toEqual(expected);
  });
});
