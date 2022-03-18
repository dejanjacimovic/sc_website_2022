import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import LayoutPage from '../components/layout_page';
import NavCenter from '../components/nav_center';

export default function Pricing() {
  return (
    <LayoutPage>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Transparent pricing at StuntCoders</title>
      </Helmet>

      <div className="relative pt-6 pb-8 sm:pb-8 md:pb-8 lg:pb-12 xl:pb-12">
        <NavCenter />
      </div>

      <div className="mx-auto max-w-7xl bg-white py-24 px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl"
          id="hero-title"
        >
          The right price for you.
        </h2>
        <p className="mt-6 max-w-2xl text-xl text-gray-500">
          Choose an affordable plan that's packed with the best features for
          your business.
        </p>

        <div className="mt-24 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
          <div className="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">
                Maintenance &amp; Support
              </h3>
              <p className="mt-4 flex items-baseline text-gray-900">
                <span className="text-5xl font-extrabold tracking-tight">
                  €900
                </span>
                <span className="ml-1 text-xl font-semibold">/month</span>
              </p>
              <p className="mt-6 text-gray-500">
                The essentials to provide you with stress-free maintenance.
              </p>

              <ul role="list" className="mt-6 space-y-6">
                <li className="flex">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-indigo-500"
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
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">Weekly Updates</span>
                </li>

                <li className="flex">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-indigo-500"
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
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">Daily Backups</span>
                </li>

                <li class="flex">
                  <svg
                    class="h-6 w-6 flex-shrink-0 text-indigo-500"
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
                    />
                  </svg>
                  <span class="ml-3 text-gray-500">
                    Weekly Quality Assurance
                  </span>
                </li>

                <li className="flex">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-indigo-500"
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
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    90 minutes Response Time
                  </span>
                </li>

                <li className="flex">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-indigo-500"
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
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">Server Monitoring</span>
                </li>

                <li className="flex">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-indigo-500"
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
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">Hack Interventions</span>
                </li>

                <li className="flex">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-indigo-500"
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
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    Access to our resources (10.000 eur in value)
                  </span>
                </li>

                <li className="flex">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-indigo-500"
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
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">20 Work Hours</span>
                </li>
              </ul>
            </div>

            <Link
              to="/contact/"
              className="mt-8 block w-full rounded-md border border-transparent bg-indigo-50 py-3 px-6 text-center font-medium text-indigo-700 hover:bg-indigo-100"
            >
              Contact us
            </Link>
          </div>

          <div className="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">
                Micro-team
              </h3>

              <p className="absolute top-0 -translate-y-1/2 transform rounded-full bg-indigo-500 py-1.5 px-4 text-xs font-semibold uppercase tracking-wide text-white">
                Most popular
              </p>
              <p className="mt-4 flex items-baseline text-gray-900">
                <span className="text-5xl font-extrabold tracking-tight">
                  €7.200
                </span>
                <span className="ml-1 text-xl font-semibold">/month</span>
              </p>
              <p className="mt-6 text-gray-500">
                For those in need of front-end and back-end development.
              </p>

              <ul role="list" className="mt-6 space-y-6">
                <li className="flex">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-indigo-500"
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
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    Weekly Quality Assurance
                  </span>
                </li>

                <li className="flex">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-indigo-500"
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
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    90 minutes Response Time
                  </span>
                </li>

                <li className="flex">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-indigo-500"
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
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">Server Monitoring</span>
                </li>

                <li className="flex">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-indigo-500"
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
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">Hack Interventions</span>
                </li>

                <li className="flex">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-indigo-500"
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
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    Access to our resources (10.000 eur in value)
                  </span>
                </li>

                <li className="flex">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-indigo-500"
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
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">160 Work Hours</span>
                </li>

                <li className="flex">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-indigo-500"
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
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    Fastest response in case of emergency (outside of working
                    hours and on weekends)
                  </span>
                </li>

                <li className="flex">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-indigo-500"
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
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    Maintenance of automatic deployment mechanisms
                  </span>
                </li>

                <li className="flex">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-indigo-500"
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
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    Server monitoring with SMS notifications
                  </span>
                </li>

                <li className="flex">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-indigo-500"
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
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    Suggestions on available improvements in both user interface
                    and performance
                  </span>
                </li>

                <li className="flex">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-indigo-500"
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
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    Analysis and recommendations for adaptations of your online
                    presence
                  </span>
                </li>

                <li className="flex">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-indigo-500"
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
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    Constant SEO improvements from a technical perspective
                  </span>
                </li>
              </ul>
            </div>

            <Link
              to="/contact/"
              className="mt-8 block w-full rounded-md border border-transparent bg-indigo-500 py-3 px-6 text-center font-medium text-white hover:bg-indigo-600"
            >
              Contact us
            </Link>
          </div>

          <div className="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">
                Accelerated Development
              </h3>

              <p className="absolute top-0 -translate-y-1/2 transform rounded-full bg-gray-400 py-1.5 px-4 text-xs font-semibold uppercase tracking-wide text-white">
                Starting from
              </p>

              <p className="mt-4 flex items-baseline text-gray-900">
                <span className="text-5xl font-extrabold tracking-tight">
                  €11.250
                </span>
                <span className="ml-1 text-xl font-semibold">/month</span>
              </p>
              <p className="mt-6 text-gray-500">
                Dedicated team for your ever-growing company.
              </p>

              <ul role="list" className="mt-6 space-y-6">
                <li className="flex">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-indigo-500"
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
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    Full time, fully integrated team
                  </span>
                </li>

                <li className="flex">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-indigo-500"
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
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    Team assigned only to you
                  </span>
                </li>

                <li className="flex">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-indigo-500"
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
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    Predictable and transparent cost
                  </span>
                </li>

                <li className="flex">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-indigo-500"
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
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    Continuous domain knowledge retention
                  </span>
                </li>

                <li className="flex">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-indigo-500"
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
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    Monthly subscription
                  </span>
                </li>
              </ul>
            </div>

            <Link
              to="/contact/"
              className="mt-8 block w-full rounded-md border border-transparent bg-indigo-50 py-3 px-6 text-center font-medium text-indigo-700 hover:bg-indigo-100"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="bg-indigo-50">
          <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-24 lg:px-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-indigo-900 sm:text-4xl">
              <span className="block">Got questions?</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link
                  to="/contact/"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-5 text-base font-medium text-white hover:bg-indigo-700"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
