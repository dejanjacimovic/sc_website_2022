import React, { useState } from 'react';
import { Link } from 'gatsby';

export default class NavCenter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hiddenMobile: true,
      hiddenSubmenu: true,
      hiddenDesktop: true,
    };
  }

  render() {
    let hiddenMobileVal =
      'absolute top-0 inset-x-0 p-2 transition transform origin-top-right z-50';
    let hiddenDesktopVal =
      'absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0 z-50';
    let hiddenSubmenuVal = 'px-2 w-screen max-w-xl sm:px-0';

    if (this.state.hiddenMobile) {
      hiddenMobileVal = 'hidden '.concat(hiddenMobileVal);
    }

    if (this.state.hiddenDesktop) {
      hiddenDesktopVal = 'hidden '.concat(hiddenDesktopVal);
    }

    if (this.state.hiddenSubmenu) {
      hiddenSubmenuVal = 'hidden '.concat(hiddenSubmenuVal);
    }

    return (
      <div>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
          <nav className="relative flex items-center justify-between sm:h-10 md:justify-center">
            <div className="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0">
              <div className="flex w-full items-center justify-between md:w-auto">
                <Link to="/" aria-label="Home">
                  <img
                    className="h-8 w-auto sm:h-12"
                    src="https://stcdshare.s3.amazonaws.com/RAsTG0DklW.png"
                    alt="StuntCoders logo"
                  />
                </Link>
                <div className="-mr-2 flex items-center md:hidden">
                  <button
                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                    id="main-menu"
                    type="button"
                    aria-label="Main menu"
                    aria-haspopup="true"
                    onClick={() => {
                      this.setState({ hiddenMobile: false });
                    }}
                  >
                    <svg
                      className="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
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
                  className="group inline-flex items-center rounded-md text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none"
                  aria-expanded="false"
                >
                  <span
                    className="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900"
                    onClick={() =>
                      this.setState({
                        hiddenDesktop: !this.state.hiddenDesktop,
                      })
                    }
                  >
                    Services
                  </span>
                  <svg
                    className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    onClick={() =>
                      this.setState({
                        hiddenDesktop: !this.state.hiddenDesktop,
                      })
                    }
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <div id="service-submenu" className={hiddenDesktopVal}>
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      <Link
                        to="/services-woocommerce-maintenance/"
                        className="-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-50"
                      >
                        <p className="text-base font-medium text-gray-900">
                          WooCommerce Maintenance
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Learn about unlimited WordPress support.
                        </p>
                      </Link>

                      <Link
                        to="/services-ecommerce-development/"
                        className="-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-50"
                      >
                        <p className="text-base font-medium text-gray-900">
                          eCommerce Development
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Get all of your questions answered about eCommerce
                          development.
                        </p>
                      </Link>

                      <Link
                        to="/services-b2b-ecommerce/"
                        className="-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-50"
                      >
                        <p className="text-base font-medium text-gray-900">
                          B2B eCommerce
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          The eCommerce solution for all your B2B needs.
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                className="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900"
                to="/testimonials/"
              >
                Testimonials
              </Link>
              <Link
                className="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900"
                to="/portfolio/"
              >
                Portfolio
              </Link>
              <Link
                className="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900"
                to="/pricing/"
              >
                Pricing
              </Link>
              <Link
                className="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900"
                to="/about-us/"
              >
                About us
              </Link>
            </div>
            <div className="hidden md:absolute md:inset-y-0 md:right-0 md:flex md:items-center md:justify-end">
              <span className="inline-flex rounded-md shadow">
                <Link
                  className="focus:shadow-outline-indigo inline-flex items-center rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium leading-6 text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500 focus:border-indigo-300 focus:outline-none active:bg-gray-50 active:text-indigo-700"
                  to="/contact/"
                >
                  Contact us
                </Link>
              </span>
            </div>
          </nav>
        </div>

        <div className={hiddenMobileVal} id="main-mobile-menu">
          <div className="rounded-lg shadow-md">
            <div
              className="shadow-xs overflow-hidden rounded-lg bg-white"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="main-menu"
            >
              <div className="flex items-center justify-between px-5 pt-4">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://stcdshare.s3.amazonaws.com/RAsTG0DklW.png"
                    alt="StuntCoders logo"
                  />
                </div>
                <div className="-mr-2">
                  <button
                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                    type="button"
                    aria-label="Close menu"
                    onClick={() => this.setState({ hiddenMobile: true })}
                  >
                    <svg
                      className="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
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
                    className="group inline-flex w-full items-center rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 focus:outline-none"
                    aria-expanded="false"
                    onClick={() =>
                      this.setState({
                        hiddenSubmenu: !this.state.hiddenSubmenu,
                      })
                    }
                  >
                    <span className="font-medium text-gray-700 transition  duration-150 ease-in-out hover:text-gray-900 focus:text-gray-900 focus:outline-none">
                      Services
                    </span>
                    <svg
                      className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  <div id="service-submenu-mobile" className={hiddenSubmenuVal}>
                    <div className="overflow-hidden">
                      <div className="relative grid gap-6 px-5 sm:gap-8 sm:p-8">
                        <Link
                          to="/services-woocommerce-maintenance/"
                          className="-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-50"
                        >
                          <p className="text-base font-medium text-gray-900">
                            WooCommerce Maintenance
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Learn about unlimited WordPress support.
                          </p>
                        </Link>

                        <Link
                          to="/services-ecommerce-development/"
                          className="-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-50"
                        >
                          <p className="text-base font-medium text-gray-900">
                            eCommerce Development
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Get all of your questions answered about eCommerce
                            development.
                          </p>
                        </Link>

                        <Link
                          to="/services-b2b-ecommerce/"
                          className="-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-50"
                        >
                          <p className="text-base font-medium text-gray-900">
                            B2B eCommerce
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            The eCommerce solution for all your B2B needs.
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                  to="/portfolio/"
                  role="menuitem"
                >
                  Portfolio
                </Link>
                <Link
                  className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                  to="/testimonials/"
                  role="menuitem"
                >
                  Testimonials
                </Link>
                <Link
                  className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                  to="/pricing/"
                  role="menuitem"
                >
                  Pricing
                </Link>
                <Link
                  className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                  to="/about-us/"
                  role="menuitem"
                >
                  About us
                </Link>
              </div>
              <div>
                <Link
                  className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-indigo-700 focus:bg-gray-100 focus:text-indigo-700 focus:outline-none"
                  to="/contact/"
                  role="menuitem"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
