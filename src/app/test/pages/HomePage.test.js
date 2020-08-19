import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../../src/pages/HomePage';
import MainLayout from '../../src/layouts/MainLayout';

function shallowSetup() {
  const props = {
    children: (<div />),
  };
  // eslint-disable-next-line react/jsx-props-no-spreading
  const wrapper = shallow(<HomePage {...props} />);
  return {
    props,
    wrapper,
  };
}

describe('<HomePage /> rendering', () => {
  const { wrapper } = shallowSetup();
  it('should render a <MainLayout />', () => {
    expect(wrapper.find(MainLayout)).toHaveLength(1);
  });

  it('should successfully rendered div.App', () => {
    expect(wrapper.find('div.App')).toHaveLength(1);
  });
});
