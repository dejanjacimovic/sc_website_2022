import React from 'react';

function getMaintenanceValue() {
  return '10.000 eur';
}

export default function Pricing() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Access to our {getMaintenanceValue()} in value resources
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            All of our members get access to our database of themes, plugins,
            fonts, tools, and more...
          </p>
        </div>
        <dl className="mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8">
          <div className="flex">
            <svg
              className="h-6 w-6 flex-shrink-0 rounded bg-indigo-500 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <div className="ml-3">
              <dt className="text-lg font-medium leading-6 text-gray-900">
                1.500+ premium templates
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                With access to the largest theme marketplace in the world, we
                are confident we can help you achieve that new look for your
                site.
              </dd>
            </div>
          </div>

          <div className="flex">
            <svg
              className="h-6 w-6 flex-shrink-0 rounded bg-indigo-500 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <div className="ml-3">
              <dt className="text-lg font-medium leading-6 text-gray-900">
                600+ premium plugins
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                If your problem can be solved with specific plugin, we most
                likely already have it for you.
              </dd>
            </div>
          </div>

          <div className="flex">
            <svg
              className="h-6 w-6 flex-shrink-0 rounded bg-indigo-500 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <div className="ml-3">
              <dt className="text-lg font-medium leading-6 text-gray-900">
                Premium caching plugin
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                WP Rocket is the most powerful caching plugin in the world. Use
                it to improve the speed of your WordPress site, SEO rankings and
                conversions.
              </dd>
            </div>
          </div>

          <div className="flex">
            <svg
              className="h-6 w-6 flex-shrink-0 rounded bg-indigo-500 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <div className="ml-3">
              <dt className="text-lg font-medium leading-6 text-gray-900">
                Image and loading optimisation
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                We store, handle and scale your images with 80% less size while
                looking just as great!
              </dd>
            </div>
          </div>

          <div className="flex">
            <svg
              className="h-6 w-6 flex-shrink-0 rounded bg-indigo-500 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <div className="ml-3">
              <dt className="text-lg font-medium leading-6 text-gray-900">
                CDN for blazing-fast websites
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Ultra-fast static and dynamic content delivery over Cloudflare
                global edge network.
              </dd>
            </div>
          </div>

          <div className="flex">
            <svg
              className="h-6 w-6 flex-shrink-0 rounded bg-indigo-500 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <div className="ml-3">
              <dt className="text-lg font-medium leading-6 text-gray-900">
                SSL for every website
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Security for you, and your customers should not be discussed.
                That is why we include HTTPS support for all of our customers.
              </dd>
            </div>
          </div>

          <div className="flex">
            <svg
              className="h-6 w-6 flex-shrink-0 rounded bg-indigo-500 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <div className="ml-3">
              <dt className="text-lg font-medium leading-6 text-gray-900">
                Staging server
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                This way, you can always preview and test changes before going
                live and be sure nothing will get broken.
              </dd>
            </div>
          </div>

          <div className="flex">
            <svg
              className="h-6 w-6 flex-shrink-0 rounded bg-indigo-500 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <div className="ml-3">
              <dt className="text-lg font-medium leading-6 text-gray-900">
                Malware &amp; virus scans
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                We help detect malicious code and infected file locations by
                scanning your WordPress site source code. Just in time, before
                it can damage your online reputation.
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div>
  );
}
