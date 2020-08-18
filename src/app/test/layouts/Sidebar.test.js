/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from '../../src/layouts/Sidebar';

function shallowSetup() {
  const props = {
  };
  const wrapper = shallow(<Sidebar {...props} />);
  return {
    props,
    wrapper,
  };
}

describe('<Sidebar /> rendering', () => {
  let { wrapper } = shallowSetup();
  const { props } = shallowSetup();
  it('should successfully rendered', () => {
    expect(wrapper.find('div.layout-sidebar')).toHaveLength(1);
  });

  it('should rendered collapsed sidebar', () => {
    wrapper = shallow(<Sidebar {...props} collapsed />);
    expect(wrapper.find('ul.sidenav-collapsed')).toHaveLength(1);
  });
});
