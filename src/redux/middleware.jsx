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

export const calculateSubTotal = (store, prevStore) => {
  const listPrice = [...prevStore.priceListReducer];
  const basketItems = [...prevStore.receiptReducer];
  const itemPrices = basketItems.map((item) => {
    if (typeof item === 'number') {
      return listPrice[item][1];
    }
    return item[2];
  });
  const subTotal = itemPrices.reduce((acc, value) => acc + value);
  store.dispatch(totalsActions.updateTotal({ subTotal }));
};
