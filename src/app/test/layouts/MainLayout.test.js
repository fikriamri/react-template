import React from 'react';
import { shallow } from 'enzyme';
import MainLayout from '../../src/layouts/MainLayout';
import Header from '../../src/layouts/Header';
import Sidebar from '../../src/layouts/Sidebar';
import Footer from '../../src/layouts/Footer';

function shallowSetup() {
  const props = {
    children: (<div />),
  };
  // eslint-disable-next-line react/jsx-props-no-spreading
  const wrapper = shallow(<MainLayout {...props} />);
  return {
    props,
    wrapper,
  };
}

describe('<MainLayout /> rendering', () => {
  const { wrapper } = shallowSetup();
  it('should render a <Header />', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('should render a <Sidebar />', () => {
    expect(wrapper.find(Sidebar)).toHaveLength(1);
  });

  it('should render a <Footer />', () => {
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
});
