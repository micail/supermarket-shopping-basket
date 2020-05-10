import * as priceListActions from './actions/priceListActions';
import * as reciptActions from './actions/receiptActions';

import priceList from '../data/priceList';

export const loadPriceList = (store) => {
  store.dispatch(priceListActions.addPriceList(priceList));
};
