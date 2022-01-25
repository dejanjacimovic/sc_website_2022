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
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <nav className="relative flex items-center justify-between sm:h-10 md:justify-center">
            <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <Link to="/" aria-label="Home">
                  <img
                    className="h-8 w-auto sm:h-12"
                    src="https://stcdshare.s3.amazonaws.com/RAsTG0DklW.png"
                    alt="StuntCoders logo"
                  />
                </Link>
                <div className="-mr-2 flex items-center md:hidden">
                  <button
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
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
                    onClick={() =>
                      this.setState({
                        hiddenDesktop: !this.state.hiddenDesktop,
                      })
                    }
                  >
                    Services
                  </span>
                  <svg
                    className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
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
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>

                <div id="service-submenu" className={hiddenDesktopVal}>
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      <Link
                        to="/services-woocommerce-maintenance/"
                        className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
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
                        className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
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
                        className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
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
                className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                to="/testimonials/"
              >
                Testimonials
              </Link>
              <Link
                className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                to="/portfolio/"
              >
                Portfolio
              </Link>
              <Link
                className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                to="/pricing/"
              >
                Pricing
              </Link>
              <Link
                className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                to="/about-us/"
              >
                About us
              </Link>
            </div>
            <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
              <span className="inline-flex rounded-md shadow">
                <Link
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-gray-50 active:text-indigo-700 transition duration-150 ease-in-out"
                  to="/contact-us/"
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
              className="rounded-lg bg-white shadow-xs overflow-hidden"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="main-menu"
            >
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://stcdshare.s3.amazonaws.com/RAsTG0DklW.png"
                    alt="StuntCoders logo"
                  />
                </div>
                <div className="-mr-2">
                  <button
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
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
                    onClick={() =>
                      this.setState({
                        hiddenSubmenu: !this.state.hiddenSubmenu,
                      })
                    }
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

                  <div id="service-submenu-mobile" className={hiddenSubmenuVal}>
                    <div className="overflow-hidden">
                      <div className="relative grid gap-6 px-5 sm:gap-8 sm:p-8">
                        <Link
                          to="/services-woocommerce-maintenance/"
                          className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
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
                          className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
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
                          className="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
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
                  className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                  to="/portfolio/"
                  role="menuitem"
                >
                  Portfolio
                </Link>
                <Link
                  className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                  to="/testimonials/"
                  role="menuitem"
                >
                  Testimonials
                </Link>
                <Link
                  className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                  to="/pricing/"
                  role="menuitem"
                >
                  Pricing
                </Link>
                <Link
                  className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                  to="/about-us/"
                  role="menuitem"
                >
                  About us
                </Link>
              </div>
              <div>
                <Link
                  className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out"
                  to="/contact-us/"
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
