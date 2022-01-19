import React from 'react';

export default function NavCenter() {
  return (
    (
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6">
        <nav class="relative flex items-center justify-between sm:h-10 md:justify-center">
          <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div class="flex items-center justify-between w-full md:w-auto">
              <a href="/" aria-label="Home">
                <img
                  class="h-8 w-auto sm:h-12"
                  src="https://stcdshare.s3.amazonaws.com/RAsTG0DklW.png"
                  alt="StuntCoders logo"
                />
              </a>
              <div class="-mr-2 flex items-center md:hidden">
                <button
                  class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  id="main-menu"
                  type="button"
                  aria-label="Main menu"
                  aria-haspopup="true"
                  onclick="document.getElementById('main-mobile-menu').className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50'"
                >
                  <svg
                    class="h-6 w-6"
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
          <div class="hidden md:flex md:space-x-10">
            <div class="relative">
              <button
                type="button"
                class="text-gray-500 group rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none"
                aria-expanded="false"
              >
                <span
                  class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                  onclick="document.getElementById('service-submenu').classList.toggle('hidden')"
                >
                  Services
                </span>
                <svg
                  class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
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
                class="hidden absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0 z-50"
              >
                <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    <a
                      href="/services-woocommerce-maintenance/"
                      class="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                    >
                      <p class="text-base font-medium text-gray-900">
                        WooCommerce Maintenance
                      </p>
                      <p class="mt-1 text-sm text-gray-500">
                        Learn about unlimited WordPress support.
                      </p>
                    </a>

                    <a
                      href="/services-ecommerce-development/"
                      class="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                    >
                      <p class="text-base font-medium text-gray-900">
                        eCommerce Development
                      </p>
                      <p class="mt-1 text-sm text-gray-500">
                        Get all of your questions answered about eCommerce
                        development.
                      </p>
                    </a>

                    <a
                      href="/services-b2b-ecommerce/"
                      class="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                    >
                      <p class="text-base font-medium text-gray-900">
                        B2B eCommerce
                      </p>
                      <p class="mt-1 text-sm text-gray-500">
                        The eCommerce solution for all your B2B needs.
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a
              class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
              href="/testimonials/"
            >
              Testimonials
            </a>
            <a
              class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
              href="/portfolio/"
            >
              Portfolio
            </a>
            <a
              class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
              href="/pricing/"
            >
              Pricing
            </a>
            <a
              class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
              href="/about-us/"
            >
              About us
            </a>
          </div>
          <div class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
            <span class="inline-flex rounded-md shadow">
              <a
                class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-gray-50 active:text-indigo-700 transition duration-150 ease-in-out"
                href="/contact-us/"
              >
                Contact us
              </a>
            </span>
          </div>
        </nav>
      </div>
    ),
    (
      <div
        class="hidden absolute top-0 inset-x-0 p-2 transition transform origin-top-right z-50"
        id="main-mobile-menu"
      >
        <div class="rounded-lg shadow-md">
          <div
            class="rounded-lg bg-white shadow-xs overflow-hidden"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="main-menu"
          >
            <div class="px-5 pt-4 flex items-center justify-between">
              <div>
                <img
                  class="h-8 w-auto"
                  src="https://stcdshare.s3.amazonaws.com/RAsTG0DklW.png"
                  alt="StuntCoders logo"
                />
              </div>
              <div class="-mr-2">
                <button
                  class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  type="button"
                  aria-label="Close menu"
                  onclick="document.getElementById('main-mobile-menu').className='hidden absolute top-0 inset-x-0 p-2 transition transform origin-top-right z-50'"
                >
                  <svg
                    class="h-6 w-6"
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
            <div class="px-2 pt-2 pb-3">
              <div class="relative">
                <button
                  type="button"
                  class="w-full px-3 py-2 text-gray-500 group rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 hover:bg-gray-50 focus:outline-none"
                  aria-expanded="false"
                  onclick="document.getElementById('service-submenu-mobile').classList.toggle('hidden')"
                >
                  <span class="font-medium text-gray-700 hover:text-gray-900  focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">
                    Services
                  </span>
                  <svg
                    class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
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
                  class="hidden px-2 w-screen max-w-xl sm:px-0"
                >
                  <div class="overflow-hidden">
                    <div class="relative grid gap-6 px-5 sm:gap-8 sm:p-8">
                      <a
                        href="/services-woocommerce-maintenance/"
                        class="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                      >
                        <p class="text-base font-medium text-gray-900">
                          WooCommerce Maintenance
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          Learn about unlimited WordPress support.
                        </p>
                      </a>

                      <a
                        href="/services-ecommerce-development/"
                        class="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                      >
                        <p class="text-base font-medium text-gray-900">
                          eCommerce Development
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          Get all of your questions answered about eCommerce
                          development.
                        </p>
                      </a>

                      <a
                        href="/services-b2b-ecommerce/"
                        class="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                      >
                        <p class="text-base font-medium text-gray-900">
                          B2B eCommerce
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          The eCommerce solution for all your B2B needs.
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <a
                class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                href="/portfolio/"
                role="menuitem"
              >
                Portfolio
              </a>
              <a
                class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                href="/testimonials/"
                role="menuitem"
              >
                Testimonials
              </a>
              <a
                class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                href="/pricing/"
                role="menuitem"
              >
                Pricing
              </a>
              <a
                class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                href="/about-us/"
                role="menuitem"
              >
                About us
              </a>
            </div>
            <div>
              <a
                class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out"
                href="/contact-us/"
                role="menuitem"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
