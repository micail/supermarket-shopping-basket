import * as priceListActions from './actions/priceListActions';
import * as receiptActions from './actions/receiptActions';
import * as totalsActions from './actions/totalsActions';

export const loadPriceList = (store, list) => {
  store.dispatch(priceListActions.addPriceList(list));
};

export const addItem = (store, index) => {
  store.dispatch(receiptActions.addItem(index));
};

export const calculatePriceOnWeight = (prevStore, data) => {
  const addedItem = data.flat();
  const itemListPosition = addedItem[0];
  const weight = addedItem[1];

  const priceList = prevStore.priceListReducer;
  const item = priceList[itemListPosition];
  const unitPrice = item[1];
  const finalPrice = Number((unitPrice * weight).toFixed(2));
  const dataWithPrice = addedItem.concat(finalPrice);
  return dataWithPrice;
};

export const calculateTotalToPay = (store, totals) => {
  const sum = ((totals.subTotal) + (totals.totalSavings)).toFixed(2);
  const totalToPay = { totalToPay: sum };
  const newTotals = { ...totals, ...totalToPay };
  store.dispatch(totalsActions.updateTotal({ ...newTotals }));
};

export const calculateTotalSavings = (store, totals, savingsArr) => {
  const arrFlatten = [].concat(...savingsArr);
  const numValues = arrFlatten.filter(Number);
  const sum = numValues.reduce((acc, cur) => acc + cur);
  const totalSavings = { totalSavings: sum };
  const newTotals = { ...totals, ...totalSavings };
  calculateTotalToPay(store, newTotals);
};

export const calculateSavings = (store, state, totals) => {
  const basketItems = [...state.receiptReducer];

  const basketItemsKeys = basketItems.map((item) => {
    if (typeof item === 'number') {
      return item;
    }
    return item[0];
  });

  const itemsOccurrence = basketItemsKeys.reduce((acc, curr) => {
    if (typeof acc[curr] === 'undefined') {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }

    return acc;
  }, {});

  let savingsArr = [];

  Object.keys(itemsOccurrence).forEach((key) => {
    const itemsNo = itemsOccurrence[key];

    if (key === '0' && itemsNo >= 3) {
      const packs = (itemsNo / 3).toFixed();
      savingsArr = savingsArr.concat(Array(packs).fill(['Beans 3 for 2', -0.5]));
    }

    if (key === '1' && itemsNo >= 2) {
      const packs = (itemsNo / 2).toFixed();
      savingsArr = savingsArr.concat(Array(packs).fill(['Coke 2 for £1', -0.4]));
    }
  });
  if (savingsArr.length > 0) {
    const savings = { savings: savingsArr };
    const newTotals = { ...totals, ...savings };
    calculateTotalSavings(store, newTotals, savingsArr);
  }
};

export const calculateSubTotal = (store, state) => {
  const listPrice = [...state.priceListReducer];
  const basketItems = [...state.receiptReducer];
  if (basketItems.length > 0) {
    const itemPrices = basketItems.map((item) => {
      if (typeof item === 'number') {
        return listPrice[item][1];
      }
      return item[2];
    });
    const subTotal = itemPrices.reduce((acc, value) => acc + value);
    const totals = { subTotal };
    calculateSavings(store, state, totals);
  }
};
