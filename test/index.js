import { expect } from 'chai';

import React from 'react';
import { configure, shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import EnsResolver from '../src/index';

configure({ adapter: new Adapter() });

describe('App component testing', () => {
  it('renders welcome message', () => {
    const wrapper = shallow(<EnsResolver lookup="0xfb6916095ca1df60bb79ce92ce3ea74c37c5d359" />);
    expect(wrapper).to.equal('ethereumfoundation.eth');
  });
});
