import React from 'react';
import { shallow } from 'enzyme';

import App from '../../components/App';

describe('<App />', () => {
  const wrapper = shallow(<App />);

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
