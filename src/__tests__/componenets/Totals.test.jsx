import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import Totals from '../../components/Totals';

const mockStore = configureMockStore();

describe('<Totals />', () => {
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
  const wrapper = mount(<Provider store={store}><Totals /></Provider>);

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should render subTotal', () => {
    expect(wrapper.find('.sub-total').text()).toEqual('3.5');
  });
  it('should render savings', () => {
    expect(wrapper.find('.savings').at(0).text()).toEqual('Beans 3 for 2-0.5');
    expect(wrapper.find('.savings').at(1).text()).toEqual('Coke 2 for £1-0.4');
  });
  it('should render totalSavings', () => {
    expect(wrapper.find('.total-savings').text()).toEqual('-0.9');
  });
  it('should render totalToPay', () => {
    expect(wrapper.find('.total-to-pay').text()).toEqual('2.60');
  });
});
