import makeStore from '../../redux/redux-store';
import { priceList } from '../dataMock/priceList';

import { addItem } from '../../redux/middleware';

describe('Middleware tests', () => {
  const store = makeStore();

  it('should load price list on store creation', () => {
    const listClone = [...priceList];
    expect(store.getState().priceList).toEqual(listClone);
  });

  it('should record a new item added to the receipt', () => {
    addItem(store, 1);
    addItem(store, 0);
    addItem(store, 0);
    addItem(store, 0);
    addItem(store, 1);
    addItem(store, 1);
    addItem(store, 1);
    const expected = [1, 0, 0, 0, 1, 1, 1];
    expect(store.getState().receipt).toEqual(expected);
  });

  it('should calculate final price form weight and record a new item ', () => {
    const listClone = [...priceList];
    const index = 2;
    const weight = 0.3;
    const unitPrice = listClone[2][1];

    const oranges = [index, weight];
    addItem(store, [oranges]);
    const finalPrice = Number((unitPrice * weight).toFixed(2));
    const expected = [1, 0, 0, 0, 1, 1, 1, [2, 0.3, finalPrice]];
    expect(store.getState().receipt).toEqual(expected);
  });

  it('should calculate sub-total', () => {
    const listClone = [...priceList];
    const basketItems = [1, 0, 0, 0, 1, 1, 1, [2, 0.3, 0.6]];
    const itemPrices = basketItems.map((item) => {
      if (typeof item === 'number') {
        return listClone[item][1];
      }
      return item[2];
    });
    const subTotal = itemPrices.reduce((acc, value) => acc + value);
    expect(store.getState().totals.subTotal).toEqual(subTotal);
  });

  it('should calculate savings', () => {
    expect(store.getState().totals.savings).toEqual([['Beans 3 for 2', -0.5], ['Coke 2 for £1', -0.4], ['Coke 2 for £1', -0.4]]);
  });
});
