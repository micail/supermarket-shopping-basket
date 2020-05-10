import * as priceListActions from './actions/priceListActions';
import * as receiptActions from './actions/receiptActions';

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
