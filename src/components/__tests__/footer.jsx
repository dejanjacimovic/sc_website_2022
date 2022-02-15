import React from 'react';
import renderer from 'react-test-renderer';
import { Link } from 'gatsby';
import Footer from '../footer';

describe('Footer', () => {
  it('renders correctly', () => {
    const submenuTitle = renderer
      .create(<Footer h4="Company" />)
      .toJSON();

    const pricingLink = renderer
      .create(<Link to="/pricing/" />)
      .toJSON();

    expect(submenuTitle).toMatchSnapshot();
    expect(pricingLink).toMatchSnapshot();
  });
});
