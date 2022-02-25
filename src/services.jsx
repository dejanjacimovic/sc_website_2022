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

        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div className="absolute inset-0">
            <div className="bg-white h-1/3 sm:h-2/3"></div>
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                All of the development services we provide
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                Check the list below to learn more about all of the development
                services StuntCoders can provide for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
