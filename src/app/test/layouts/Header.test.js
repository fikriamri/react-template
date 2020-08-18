import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../src/layouts/Header';

function shallowSetup() {
  const props = {
  };
  // eslint-disable-next-line react/jsx-props-no-spreading
  const wrapper = shallow(<Header {...props} />);
  return {
    props,
    wrapper,
  };
}

describe('<Header /> rendering', () => {
  const { wrapper } = shallowSetup();
  it('should successfully rendered', () => {
    expect(wrapper.find('div.layout-header')).toHaveLength(1);
  });
});
