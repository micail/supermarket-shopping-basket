import { addPriceList, deletePriceList } from '../../../redux/actions/priceListActions';
import { ADD_PRICELIST, DELETE_PRICELIST } from '../../../redux/types/priceListTypes';

import exampleList from '../../dataMock/priceList';

describe('Price list actions tests', () => {
  it('should contain an action to load the price list', () => {
    const priceList = [...exampleList];
    const expected = {
      type: ADD_PRICELIST,
      payload: priceList,
    };
    expect(addPriceList(priceList)).toEqual(expected);
  });
  it('should contain an acction to delete the price list', () => {
    const expected = {
      type: DELETE_PRICELIST,
    };
    expect(deletePriceList()).toEqual(expected);
  });
});
