import { addPriceList, deletePriceList } from '../../../redux/actions/priceListActions';
import { ADD_PRICELIST, DELETE_PRICELIST } from '../../../redux/types/priceListTypes';

import { priceList } from '../../dataMock/priceList';

describe('Price list actions tests', () => {
  it('should contain an action to load the price list', () => {
    const priceListCopy = [...priceList];
    const expected = {
      type: ADD_PRICELIST,
      payload: priceListCopy,
    };
    expect(addPriceList(priceListCopy)).toEqual(expected);
  });
  it('should contain an acction to delete the price list', () => {
    const expected = {
      type: DELETE_PRICELIST,
    };
    expect(deletePriceList()).toEqual(expected);
  });
});
