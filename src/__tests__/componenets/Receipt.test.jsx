import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import Receipt from '../../components/Receipt';

const mockStore = configureMockStore();

describe('<Receipt />', () => {
  const store = mockStore({
    priceList: [['Beans', 0.50]],
    receipt: [],
    totals: [],
  });
  const wrapper = mount(<Provider store={store}><Receipt /></Provider>);

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
