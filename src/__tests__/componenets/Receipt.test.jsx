import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import Receipt from '../../components/Receipt';

const mockStore = configureMockStore();

describe('<Receipt />', () => {
  const store = mockStore({
    priceList: [
      ['Beans', 0.50],
      ['Coke', 0.50],
      ['Oranges', 1.99, 'kg'],
    ],
    receipt: [0, 0, 0, 1, 1, [2, 0.3, 0.6]],
    totals: {
      subTotal: 3.5,
      savings: [['Beans 3 for 2', -0.5], ['Coke 2 for £1', -0.4]],
      totalSavings: -0.9,
      totalToPay: '2.60',
    },
  });

  const wrapper = mount(<Provider store={store}><Receipt /></Provider>);

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should render list of items based on priceList occurrence in the receipt', () => {
    expect(wrapper.find('.Receipt').children().length).toEqual(6);
  });
  it('should render totals', () => {
    expect(wrapper.find('.Totals').children().length).toEqual(4);
  });
  it('should render subTotal', () => {
    expect(wrapper.find('.subTotal').text()).toEqual('3.5');
  });
  it('should render savings', () => {
    expect(wrapper.find('.savings').text()).toEqual('Beans 3 for 2 -0.5 Coke 2 for £1 -0.4');
  });
  it('should render totalSavings', () => {
    expect(wrapper.find('.totalSavings').text()).toEqual('-0.9');
  });
  it('should render totalToPay', () => {
    expect(wrapper.find('.totalToPay').text()).toEqual('2.60');
  });
});
