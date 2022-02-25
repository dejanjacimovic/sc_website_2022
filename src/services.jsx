import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import LayoutPage from '../components/layout_page';
import NavCenter from '../components/nav_center';

export default function Services() {
  return (
    <LayoutPage>
      <div className="">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Reach out to StuntCoders, we'd love to meet you!</title>
        </Helmet>

        <div className="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <NavCenter />
        </div>
      </div>
    </LayoutPage>
  );
}
