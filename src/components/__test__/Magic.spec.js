import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import Magic from '../Magic';
expect.extend(expectJSX);

describe('Bare minimum', () => {
  const renderer = createRenderer();

  it('should be ok', () => {
    renderer.render(<Magic />);
    expect(renderer.getRenderOutput()).toIncludeJSX(
      <h1>Magic happens here!</h1>
    );
  });
});
