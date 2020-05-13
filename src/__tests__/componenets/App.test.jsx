import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import App from '../../components/App';

const mockStore = configureMockStore();

describe('<App />', () => {
  const store = mockStore({
    priceList: [],
    receipt: [],
    totals: [],
  });
  const wrapper = mount(<Provider store={store}><App /></Provider>);

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
