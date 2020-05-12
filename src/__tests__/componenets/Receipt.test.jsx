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
    totals: [],
  });
  const wrapper = mount(<Provider store={store}><Receipt /></Provider>);

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
