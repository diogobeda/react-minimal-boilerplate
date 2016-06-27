import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Magic from '../Magic';

describe('Bare minimum', () => {
  it('should be ok', () => {
    const wrapper = shallow(<Magic />);
    expect(wrapper.node).to.include(
      <h1>Magic happens here!</h1>
    );
  });
});
