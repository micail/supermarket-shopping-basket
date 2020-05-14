import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import Basket from '../../components/Basket';

const mockStore = configureMockStore();

describe('<Basket />', () => {
  const store = mockStore({
    priceList: [['Beans', 0.50]],
    receipt: [],
    totals: {},
  });
  const wrapper = mount(<Provider store={store}><Basket /></Provider>);

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should render buttons based on list price items', () => {
    expect(wrapper.find('button').text()).toEqual('BEANS 0.5');
  });
});
