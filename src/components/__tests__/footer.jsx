import React from 'react';
import renderer from 'react-test-renderer';
import { Link } from 'gatsby';
import Footer from '../footer';

describe('Footer', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Footer h4="Company" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
