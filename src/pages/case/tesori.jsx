import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import LayoutPage from '../../components/layout_page';
import NavLeft from '../../components/nav_left';

export default function Tesori() {
  return (
    <LayoutPage>
      <div class="relative bg-white overflow-hidden">
        <div class="max-w-screen-xl mx-auto">
          <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="50,0 100,0 50,100 0,100"></polygon>
            </svg>

            <NavLeft />

            <main class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div class="sm:text-center lg:text-left">
                <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                  <span class="mr-1">Direct to consumer</span>
                  <br class="xl:hidden" />
                  <span class="text-indigo-600">WP-Magento Hybrid</span>
                </h2>
                <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  StuntCoders worked closely with Tesori to develop and grow
                  with their brand through 8+ years and continues to manage
                  their platform today with dedication from day one.
                </p>
              </div>
            </main>
          </div>
        </div>
        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <StaticImage
            class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="../../images/cases/tesori-main.jpeg"
            loading="auto"
            alt="Tesori case study"
          />
        </div>
      </div>

      <div class="py-16 bg-gray-50 overflow-hidden lg:py-24">
        <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
          <svg
            class="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  class="text-gray-200"
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
              fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
            ></rect>
          </svg>
          <div class="relative">
            <h3 class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              The Story
            </h3>
            <p class="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-500">
              The story of Tesori collaboration came to life through
              collaboration with multiple agencies from Oslo, collaborating on
              technical, design, and SEO aspects to bring to life the spirit of
              Tesori Diamanter.
            </p>
          </div>
          <div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div class="relative">
              <h4 class="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                Collaborating Since 2013
              </h4>
              <p class="mt-3 text-lg leading-7 text-gray-500">
                StuntCoders was lucky enough to receive a pitch from DayTwo and
                Tesori to implement visual identity through an eCommerce
                platform for selling quality diamonds and jewelry.
              </p>
              <p class="mt-3 text-lg leading-7 text-gray-500">
                Tesori selected StuntCoders as their partner in this
                long-lasting pursuit of perfection in performance, reliability.
              </p>
            </div>
            <div class="mt-10 -mx-4 relative lg:mt-0">
              <svg
                class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                width="784"
                height="404"
                fill="none"
                viewBox="0 0 784 404"
              >
                <defs>
                  <pattern
                    id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      class="text-gray-200"
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      fill="currentColor"
                    ></rect>
                  </pattern>
                </defs>
                <rect
                  width="784"
                  height="404"
                  fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
                ></rect>
              </svg>
              <StaticImage
                class="relative mx-auto rounded-lg shadow-xl border-gray-200"
                width="490"
                src="../../images/cases/tesori-vibes.jpeg"
                loading="auto"
                alt="Tesori - Collaborating since 2013"
              />
            </div>
          </div>
          <svg
            class="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  class="text-gray-200"
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
              fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
            ></rect>
          </svg>
          <div class="relative mt-12 sm:mt-16 lg:mt-24">
            <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div class="lg:col-start-2">
                <h4 class="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                  Evolution vs. Revolution
                </h4>
                <p class="mt-3 text-lg leading-7 text-gray-500">
                  For a fixed monthly budget, StuntCoders has successfully
                  managed to maintain the pace of development and keep the
                  eCommerce platform fresh with a variety of new features such
                  as:
                </p>
                <ul class="mt-3 text-lg leading-7 text-gray-500 list-disc pl-4">
                  <li>changes in tracking and analytics</li>
                  <li>
                    full implementation of booking system on two separate
                    locations
                  </li>
                  <li>dynamic separation of products and categories</li>
                  <li>
                    follow through Google changes in Store and marketplaces
                  </li>
                  <li>
                    adapt new strategies with Google and Facebook feed and
                    conversion tracking
                  </li>
                  <li>
                    work closely with GUI and SEO teams to keep the platform
                    fresh
                  </li>
                  <li>
                    implement latest payment methods and follow with accounting
                    tools implementation
                  </li>
                </ul>
              </div>
              <div class="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                <svg
                  class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                  width="784"
                  height="404"
                  fill="none"
                  viewBox="0 0 784 404"
                >
                  <defs>
                    <pattern
                      id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        class="text-gray-200"
                        x="0"
                        y="0"
                        width="4"
                        height="4"
                        fill="currentColor"
                      ></rect>
                    </pattern>
                  </defs>
                  <rect
                    width="784"
                    height="404"
                    fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                  ></rect>
                </svg>
                <StaticImage
                  class="relative mx-auto rounded-lg shadow-xl border-gray-200"
                  width="490"
                  src="../../images/cases/tesori-growth.jpeg"
                  alt="Tesori's Growth"
                  loading="auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="bg-white overflow-hidden">
        <div class="relative max-w-screen-xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">
          <svg
            class="absolute top-full left-0 transform translate-x-80 -translate-y-24 lg:hidden"
            width="784"
            height="404"
            fill="none"
            viewbox="0 0 784 404"
          >
            <defs>
              <pattern
                id="e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32"
                x="0"
                y="0"
                width="20"
                height="20"
                patternunits="userSpaceOnUse"
              >
                <rect
                  class="text-gray-200"
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  fill="currentColor"
                ></rect>
              </pattern>
            </defs>
            <rect
              width="784"
              height="404"
              fill="url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)"
            ></rect>
          </svg>
          <svg
            class="hidden lg:block absolute right-full top-1/2 transform translate-x-1/2 -translate-y-1/2"
            width="404"
            height="784"
            fill="none"
            viewbox="0 0 404 784"
          >
            <defs>
              <pattern
                id="56409614-3d62-4985-9a10-7ca758a8f4f0"
                x="0"
                y="0"
                width="20"
                height="20"
                patternunits="userSpaceOnUse"
              >
                <rect
                  class="text-gray-200"
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
              fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)"
            ></rect>
          </svg>
          <div class="relative lg:flex lg:items-center">
            <div class="hidden lg:block lg:flex-shrink-0">
              <StaticImage
                class="h-64 w-64 rounded-full xl:h-80 xl:w-80"
                src="../../images/terje.jpg"
                alt="Terje's review"
                loading="auto"
              />
            </div>
            <div class="relative lg:ml-10">
              <svg
                class="absolute top-0 left-0 transform -translate-x-8 -translate-y-24 h-36 w-36 text-indigo-200 opacity-50"
                stroke="currentColor"
                fill="none"
                viewbox="0 0 144 144"
              >
                <path
                  stroke-width="2"
                  d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
                ></path>
              </svg>
              <blockquote class="relative">
                <div class="text-2xl leading-9 font-medium text-gray-900">
                  <p>
                    During my career I have worked with numerous IT companies,
                    software and e-commerce developers. None of them come close
                    to StuntCoders. They are a highly dedicated and professional
                    team with a high technical proficiency, but most importantly
                    you feel that they care about your project on a personal
                    level. You really feel that they want you to succeed. This
                    is what sets StuntCoders apart from the rest. I highly
                    recommend Dejan and the rest of the team at StuntCoders.
                  </p>
                </div>
                <footer class="mt-8">
                  <div class="flex">
                    <div class="flex-shrink-0 lg:hidden">
                      <StaticImage
                        class="h-12 w-12 rounded-full"
                        src="../../images/terje.jpg"
                        alt="Terje's review"
                        loading="auto"
                      />
                    </div>
                    <div class="ml-4 lg:ml-0">
                      <div class="text-base leading-6 font-medium text-gray-900">
                        Terje Gaupseth
                      </div>
                      <div class="text-base leading-6 font-medium text-indigo-600">
                        CEO, Tesori
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <div class="relative bg-gray-900">
        <div class="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
          <div class="h-full w-full xl:grid xl:grid-cols-2">
            <div class="h-full xl:relative xl:col-start-2">
              <StaticImage
                class="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                src="../../images/pricing-plans.jpeg"
                alt="Pricing plans"
              />
              <div
                aria-hidden="true"
                class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
              ></div>
            </div>
          </div>
        </div>
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
          <div class="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
            <h2 class="text-sm font-semibold tracking-wide uppercase">
              <span class="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
                Valuable Metrics
              </span>
            </h2>
            <p class="mt-3 text-3xl font-extrabold text-white">
              Team. Length. Stack.
            </p>
            <p class="mt-5 text-lg text-gray-300">
              Learn more about what efforts we have put together to support
              Tesori.
            </p>
            <div class="mt-8 overflow-hidden">
              <dl class="-mx-8 -mt-8 flex flex-wrap">
                <div class="flex flex-col px-8 pt-8">
                  <dt class="order-2 text-base leading-6 font-medium text-gray-300">
                    the team
                  </dt>
                  <dd class="order-1 text-2xl leading-8 font-extrabold sm:text-3xl sm:leading-9 bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
                    Micro-team
                  </dd>
                </div>
                <div class="flex flex-col px-8 pt-8">
                  <dt class="order-2 text-base leading-6 font-medium text-gray-300">
                    of collaboration
                  </dt>
                  <dd class="order-1 text-2xl leading-8 font-extrabold sm:text-3xl sm:leading-9 bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
                    8+ years
                  </dd>
                </div>
                <div class="flex flex-col px-8 pt-8">
                  <dt class="order-2 text-base leading-6 font-medium text-gray-300">
                    frameworks of choice
                  </dt>
                  <dd class="order-1 text-2xl leading-8 font-extrabold sm:text-3xl sm:leading-9 bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
                    Magento + WordPress Hybrid
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gray-50">
        <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            <span>Ready to dive in?</span>
            <br />
            <span class="text-indigo-600">We'll get you covered.</span>
          </h2>
          <div class="mt-8 flex lg:flex-shrink-0 lg:mt-0">
            <div class="inline-flex rounded-md shadow">
              <a
                class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                href="/contact/"
              >
                Get started
              </a>
            </div>
            <div class="ml-3 inline-flex rounded-md shadow">
              <a
                class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                href="/testimonials/"
              >
                What did our customers say?
              </a>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
