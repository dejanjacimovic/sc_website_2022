import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../footer';

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Footer h4="Company" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
