import * as React from 'react';
import { Link } from 'gatsby';
import LayoutPage from '../components/layout_page';

export default function NotFoundPage() {
  let styleDef = {
    backgroundImage:
      "url('https://stcdshare.s3.amazonaws.com/EQOnmxU4b4.jpeg')",
  };

  return (
    <LayoutPage>
      <main className="min-h-full bg-cover bg-top sm:bg-top" style={styleDef}>
        <div className="max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
          <p className="text-sm font-semibold text-black text-opacity-50 uppercase tracking-wide">
            404 error
          </p>
          <h1 className="mt-2 text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
            Oh oh! We think you got lost.
          </h1>
          <p className="mt-2 text-lg font-medium text-black text-opacity-50">
            There's nothing to be found on this link.
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black text-opacity-75 bg-white bg-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50"
            >
              Back to the homepage
            </Link>
          </div>
        </div>
      </main>
    </LayoutPage>
  );
}
