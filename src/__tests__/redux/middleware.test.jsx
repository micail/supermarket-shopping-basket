import makeStore from '../../redux/redux-store';
import priceList from '../dataMock/priceList';

import { loadPriceList } from '../../redux/middleware';

describe('Middleware tests', () => {
  it('should load price list', () => {
    const listClone = [...priceList];
    const store = makeStore();
    loadPriceList(store);
    expect(store.getState().priceListReducer).toEqual(listClone);
  });
});
