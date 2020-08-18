import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../src/components/HomeComponent';

function shallowSetup() {
  const props = {
  };
  // eslint-disable-next-line react/jsx-props-no-spreading
  const wrapper = shallow(<Home {...props} />);
  return {
    props,
    wrapper,
  };
}

describe('<Home /> rendering', () => {
  const { wrapper } = shallowSetup();
  it('should successfully rendered', () => {
    expect(wrapper.find('div.App')).toHaveLength(1);
  });
});
