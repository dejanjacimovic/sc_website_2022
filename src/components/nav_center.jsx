import React from 'react';
import Layout from '../components/layout';

export default function NavCenter() {
  return (
    <div className="relative bg-gray-50 overflow-hidden">
      <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full">
        <div className="relative h-full max-w-screen-xl mx-auto">
          <svg
            className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  className="text-gray-200"
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  fill="currentColor"
                ></rect>
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            ></rect>
          </svg>
          <svg
            className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  className="text-gray-200"
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  fill="currentColor"
                ></rect>
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
            ></rect>
          </svg>
        </div>
      </div>
      <div className="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <nav className="relative flex items-center justify-between sm:h-10 md:justify-center">
            <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="/" aria-label="Home">
                  <img
                    className="h-8 w-auto sm:h-12"
                    src="https://stcdshare.s3.amazonaws.com/RAsTG0DklW.png"
                    alt="StuntCoders logo"
                  />
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <button
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    id="main-menu"
                    type="button"
                    aria-label="Main menu"
                    aria-haspopup="true"
                    onclick="document.getElementById('main-mobile-menu').className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50'"
                  >
                    <svg
                      className="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden md:flex md:space-x-10">
              <div className="relative">
                <button
                  type="button"
                  className="text-gray-500 group rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none"
                  aria-expanded="false"
                >
                  <span
                    className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                    onclick="document.getElementById('service-submenu').classList.toggle('hidden')"
                  >
                    Services
                  </span>
                  <svg
                    className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    onclick="document.getElementById('service-submenu').classList.toggle('hidden')"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>

                <div
                  id="service-submenu"
                  className="hidden absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0 z-50"
                >
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      <a
                        href="/services-woocommerce-maintenance/"
                        className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                      >
                        <p className="text-base font-medium text-gray-900">
                          WooCommerce Maintenance
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Learn about unlimited WordPress support.
                        </p>
                      </a>

                      <a
                        href="/services-ecommerce-development/"
                        className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                      >
                        <p className="text-base font-medium text-gray-900">
                          eCommerce Development
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Get all of your questions answered about eCommerce
                          development.
                        </p>
                      </a>

                      <a
                        href="/services-b2b-ecommerce/"
                        className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                      >
                        <p className="text-base font-medium text-gray-900">
                          B2B eCommerce
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          The eCommerce solution for all your B2B needs.
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                href="/testimonials/"
              >
                Testimonials
              </a>
              <a
                className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                href="/portfolio/"
              >
                Portfolio
              </a>
              <a
                className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                href="/pricing/"
              >
                Pricing
              </a>
              <a
                className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                href="/about-us/"
              >
                About us
              </a>
            </div>
            <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
              <span className="inline-flex rounded-md shadow">
                <a
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-gray-50 active:text-indigo-700 transition duration-150 ease-in-out"
                  href="/contact/"
                  onclick="fbq('track', 'Contact us', {content_name: 'Contact us',content_category: 'Nav Contact us',});gtag('event', 'login', {method: 'Nav Contact us'});"
                >
                  Contact us
                </a>
              </span>
            </div>
          </nav>
        </div>

        <div
          className="hidden absolute top-0 inset-x-0 p-2 transition transform origin-top-right z-50"
          id="main-mobile-menu"
        >
          <div className="rounded-lg shadow-md">
            <div
              className="rounded-lg bg-white shadow-xs overflow-hidden"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="main-menu"
            >
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="images/stunt-coders-logo-standard.png"
                    alt=""
                  />
                </div>
                <div className="-mr-2">
                  <button
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    type="button"
                    aria-label="Close menu"
                    onclick="document.getElementById('main-mobile-menu').className='hidden absolute top-0 inset-x-0 p-2 transition transform origin-top-right z-50'"
                  >
                    <svg
                      className="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3">
                <div className="relative">
                  <button
                    type="button"
                    className="w-full px-3 py-2 text-gray-500 group rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 hover:bg-gray-50 focus:outline-none"
                    aria-expanded="false"
                    onclick="document.getElementById('service-submenu-mobile').classList.toggle('hidden')"
                  >
                    <span className="font-medium text-gray-700 hover:text-gray-900  focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">
                      Services
                    </span>
                    <svg
                      className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>

                  <div
                    id="service-submenu-mobile"
                    className="hidden px-2 w-screen max-w-xl sm:px-0"
                  >
                    <div className="overflow-hidden">
                      <div className="relative grid gap-6 px-5 sm:gap-8 sm:p-8">
                        <a
                          href="/services-woocommerce-maintenance/"
                          className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                        >
                          <p className="text-base font-medium text-gray-900">
                            WooCommerce Maintenance
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Learn about unlimited WordPress support.
                          </p>
                        </a>

                        <a
                          href="/services-ecommerce-development/"
                          className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                        >
                          <p className="text-base font-medium text-gray-900">
                            eCommerce Development
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Get all of your questions answered about eCommerce
                            development.
                          </p>
                        </a>

                        <a
                          href="/services-b2b-ecommerce/"
                          className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                        >
                          <p className="text-base font-medium text-gray-900">
                            B2B eCommerce
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            The eCommerce solution for all your B2B needs.
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                  href="/portfolio/"
                  role="menuitem"
                >
                  Portfolio
                </a>
                <a
                  className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                  href="/testimonials/"
                  role="menuitem"
                >
                  Testimonials
                </a>
                <a
                  className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                  href="/pricing/"
                  role="menuitem"
                >
                  Pricing
                </a>
                <a
                  className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                  href="/about-us/"
                  role="menuitem"
                >
                  About us
                </a>
              </div>
              <div>
                <a
                  className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out"
                  href="/contact/"
                  role="menuitem"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative pb-32 mt-8 bg-gray-800">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover"
              src="/images/working-class-hero.jpeg"
              alt="working class hero is soomething to be"
            />
            <div
              className="absolute inset-0 bg-gray-800 mix-blend-multiply"
              aria-hidden="true"
            ></div>
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              We live and breathe eCommerce
              <br />
              since 2010
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-gray-300">
              Are you looking for experts to help you (re)launch, position, and
              grow your eCommerce business? We offer strategic services,
              including in-house design and development for eCommerce
              businesses. We work with companies like Camp David, Tesori,
              JumpKing, and Arduino.
            </p>
            <p className="mt-6 max-w-3xl text-xl text-gray-300">
              We accompany brands to success in the world of eCommerce by
              building scalable solutions that measure what matters—your sales.
            </p>
          </div>
        </div>

        <section
          className="-mt-32 max-w-7xl mx-auto relative z-10 pb-4 px-4 sm:px-6 lg:px-8"
          aria-labelledby="contact-heading"
        >
          <h2 className="sr-only" id="contact-heading">
            Contact us
          </h2>
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
            <div className="flex flex-col bg-white rounded-2xl shadow-xl">
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">
                  <svg
                    className="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900">
                  What makes us different?
                </h3>
                <p className="mt-4 text-base text-gray-500">
                  We deliver dedicated project manager, consultant, designer,
                  and developer resources as part of a long-term engagement.
                  This way, all of our resources are focused on becoming
                  intimate with your business.
                </p>
              </div>
            </div>

            <div className="flex flex-col bg-white rounded-2xl shadow-xl">
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">
                  <svg
                    className="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900">Cloud</h3>
                <p className="mt-4 text-base text-gray-500">
                  We use Cloud services to eliminate the need for provisioning
                  and managing infrastructure so our teams can focus more on
                  generating business value for our customers.
                </p>
              </div>
            </div>

            <div className="flex flex-col bg-white rounded-2xl shadow-xl">
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">
                  <svg
                    className="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900">
                  Team-as-a-Service
                </h3>
                <p className="mt-4 text-base text-gray-500">
                  While others use an hourly model, we provide well-balanced
                  cross-functional teams that are the best fit for the
                  assignment and responsibility for the quality and timeliness
                  of software delivery.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
