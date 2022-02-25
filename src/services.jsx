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

        <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
          <div className="absolute inset-0">
            <div className="h-1/3 bg-white sm:h-2/3"></div>
          </div>
          <div className="relative mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                All of the development services we provide
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
                Check the list below to learn more about all of the development
                services StuntCoders can provide for you.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <StaticImage
                  className="h-48 w-full object-cover"
                  src="../images/portfolio/tesori.jpeg"
                  alt="Tesori portfolio image"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    Case Study
                  </p>
                  <Link to="/case/tesori/" className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      Magento eCommerce Development
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      Since 2008, StuntCoders has been crafting...
                    </p>
                  </Link>
                </div>
                <div className="mt-8 text-center md:flex md:items-center">
                  <div className="text-base font-medium text-gray-900">
                    Team: Micro-team
                  </div>
                  <svg
                    className="mx-1 hidden h-5 w-5 text-indigo-600 md:block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>
                  <div className="text-base font-medium text-gray-500">
                    Length: 8+ years
                  </div>
                </div>
              </div>
              <div className="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6">
                <Link
                  to="/case/tesori/"
                  className="text-base font-medium text-indigo-700 hover:text-indigo-600"
                >
                  Read more<span aria-hidden="true"> →</span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <StaticImage
                  className="h-48 w-full object-cover"
                  src="../images/portfolio/clinton-b2b.jpeg"
                  alt="Camp David Soccx"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <Link to="/case/camp-david/" className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      WooCommerce
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      Since the beginning of WooCommerce, we've felt like...
                    </p>
                  </Link>
                </div>
                <div className="mt-8 text-center md:flex md:items-center">
                  <div className="text-base font-medium text-gray-900">
                    Team: 10+
                  </div>
                  <svg
                    className="mx-1 hidden h-5 w-5 text-indigo-600 md:block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>
                  <div className="text-base font-medium text-gray-500">
                    Length: 4+ years
                  </div>
                </div>
              </div>
              <div className="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6">
                <Link
                  to="/case/camp-david/"
                  className="text-base font-medium text-indigo-700 hover:text-indigo-600"
                >
                  Read more<span aria-hidden="true"> →</span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <StaticImage
                  className="h-48 w-full object-cover"
                  src="../images/portfolio/selekkt.jpeg"
                  alt="Selekkt"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <a href="#" className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      Shopify
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      Flexibility...
                    </p>
                  </a>
                </div>
                <div className="mt-8 text-center md:flex md:items-center">
                  <div className="text-base font-medium text-gray-900">
                    Team: 5+
                  </div>
                  <svg
                    className="mx-1 hidden h-5 w-5 text-indigo-600 md:block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>
                  <div className="text-base font-medium text-gray-500">
                    Length: 10+ years
                  </div>
                </div>
              </div>
              <div className="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6">
                <Link
                  to="/case/selekkt/"
                  className="text-base font-medium text-indigo-700 hover:text-indigo-600"
                >
                  Read more<span aria-hidden="true"> →</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <StaticImage
                  className="h-48 w-full object-cover"
                  src="../images/portfolio/tesori.jpeg"
                  alt="Tesori portfolio image"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <Link to="/case/tesori/" className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      Headless eCommerce Development
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      Since 2008, StuntCoders has been crafting...
                    </p>
                  </Link>
                </div>
                <div className="mt-8 text-center md:flex md:items-center">
                  <div className="text-base font-medium text-gray-900">
                    Team: Micro-team
                  </div>
                  <svg
                    className="mx-1 hidden h-5 w-5 text-indigo-600 md:block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>
                  <div className="text-base font-medium text-gray-500">
                    Length: 8+ years
                  </div>
                </div>
              </div>
              <div className="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6">
                <Link
                  to="/case/tesori/"
                  className="text-base font-medium text-indigo-700 hover:text-indigo-600"
                >
                  Read more<span aria-hidden="true"> →</span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <StaticImage
                  className="h-48 w-full object-cover"
                  src="../images/portfolio/clinton-b2b.jpeg"
                  alt="Camp David Soccx"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <Link to="/case/camp-david/" className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      Ruby on Rails
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      Since the beginning of WooCommerce, we've felt like...
                    </p>
                  </Link>
                </div>
                <div className="mt-8 text-center md:flex md:items-center">
                  <div className="text-base font-medium text-gray-900">
                    Team: 10+
                  </div>
                  <svg
                    className="mx-1 hidden h-5 w-5 text-indigo-600 md:block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>
                  <div className="text-base font-medium text-gray-500">
                    Length: 4+ years
                  </div>
                </div>
              </div>
              <div className="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6">
                <Link
                  to="/case/camp-david/"
                  className="text-base font-medium text-indigo-700 hover:text-indigo-600"
                >
                  Read more<span aria-hidden="true"> →</span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <StaticImage
                  className="h-48 w-full object-cover"
                  src="../images/portfolio/selekkt.jpeg"
                  alt="Selekkt"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <a href="#" className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      Django
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      Flexibility...
                    </p>
                  </a>
                </div>
                <div className="mt-8 text-center md:flex md:items-center">
                  <div className="text-base font-medium text-gray-900">
                    Team: 5+
                  </div>
                  <svg
                    className="mx-1 hidden h-5 w-5 text-indigo-600 md:block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>
                  <div className="text-base font-medium text-gray-500">
                    Length: 10+ years
                  </div>
                </div>
              </div>
              <div className="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6">
                <Link
                  to="/case/selekkt/"
                  className="text-base font-medium text-indigo-700 hover:text-indigo-600"
                >
                  Read more<span aria-hidden="true"> →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
