import * as React from 'react';
import { Helmet } from 'react-helmet';
import LayoutPage from '../components/layout_page';
import NavCenter from '../components/nav_center';

export default function ThankYou() {
  return (
    <LayoutPage>
      <Helmet>
        <title>Thank you!</title>
      </Helmet>

      <div className="relative">
        <NavCenter />
      </div>

      <div className="overflow-hidden bg-white">
        <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
            <div>
              <h1 className="text-base text-3xl font-bold tracking-wide text-black">
                Thank you for reaching out!
              </h1>
            </div>
          </div>
          <div className="mt-8">
            <div className="prose prose-indigo mx-auto text-lg text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <p>
                We're looking forward to getting to learn about you, and we'll
                surely try to reply as fast as possible.
              </p>
              <p className="mt-8">Regards from StuntCoders team</p>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
