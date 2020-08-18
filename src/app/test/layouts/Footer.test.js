import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../src/layouts/Footer';

function shallowSetup() {
  const props = {
  };
  // eslint-disable-next-line react/jsx-props-no-spreading
  const wrapper = shallow(<Footer {...props} />);
  return {
    props,
    wrapper,
  };
}

describe('<Footer /> rendering', () => {
  const { wrapper } = shallowSetup();
  it('should successfully rendered', () => {
    expect(wrapper.find('div.layout-footer')).toHaveLength(1);
  });
});
