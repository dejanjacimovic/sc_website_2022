import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import LayoutPage from '../../components/layout_page';
import NavCenter from '../../components/nav_center';

import tb1 from '../../images/marketplaces/tb1.png';
import tb2 from '../../images/marketplaces/tb2.jpg';
import b2bImg from '../../images/marketplaces/b2b.jpeg';
import marketplacesImg from '../../images/marketplaces/sell-on-marketplaces.jpeg'

import aboutYouImg from '../../images/marketplaces/aboutyou-black.png';
import breuningerImg from '../../images/marketplaces/breuninger-black.png';
import douglasImg from '../../images/marketplaces/douglas-black.png';
import ottoImg from '../../images/marketplaces/otto-black.png';
import zalandoImg from '../../images/marketplaces/zalando-black.png';

export default function MarketplaceManagement() {
  return (
    <LayoutPage>
      <Helmet>
        <title>Marketplace setup and management through TradeByte</title>
      </Helmet>

      <div className="bg-gray-50 relative overflow-hidden">
        <div className="sm:absolute sm:inset-y-0 sm:block sm:h-full sm:w-full hidden">
          <div className="relative h-full max-w-screen-xl mx-auto">
            <svg
              className="right-full translate-y-1/4 translate-x-1/4 lg:translate-x-1/2 absolute transform"
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
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="784"
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="left-full -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2 absolute transform"
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
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="784"
                fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
              />
            </svg>
          </div>
        </div>
        <div className="sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 relative pt-6 pb-12">
          <NavCenter />

          <main className="mt-8">
            <div>
              <div className="relative">
                <div className="h-1/2 absolute inset-x-0 bottom-0 bg-gray-100" />
                <div className="max-w-7xl sm:px-6 lg:px-8 mx-auto">
                  <div className="sm:overflow-hidden sm:rounded-2xl relative shadow-xl">
                    <div className="absolute inset-0">
                      <img
                        className="object-cover w-full h-full"
                        src={marketplacesImg}
                        alt="Sell on marketplaces"
                      />
                      <div className="mix-blend-multiply absolute inset-0 bg-indigo-700" />
                    </div>
                    <div className="sm:px-6 sm:py-24 lg:py-32 lg:px-8 relative px-4 py-16">
                      <h1 className="sm:text-5xl lg:text-6xl text-4xl font-extrabold tracking-tight text-center">
                        <span className="block text-white">
                          Sell your products on
                        </span>
                        <span className="block text-indigo-200">
                          marketplaces, easily.
                        </span>
                      </h1>
                      <p className="sm:max-w-3xl max-w-lg mx-auto mt-6 text-xl text-center text-indigo-200">
                        Launch like a rocket and growth without limits. Join
                        ourwide range of partners and enter the worlds most
                        populat marketplaces.
                      </p>
                      <div className="sm:flex sm:max-w-none sm:justify-center max-w-sm mx-auto mt-10">
                        <a
                          href="/contact/"
                          className="hover:bg-indigo-50 sm:px-8 flex items-center justify-center px-4 py-3 text-base font-medium text-indigo-700 bg-white border border-transparent rounded-md shadow-sm"
                        >
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100">
                <div className="max-w-7xl sm:px-6 lg:px-8 px-4 py-16 mx-auto">
                  <p className="text-sm font-semibold tracking-wide text-center text-gray-500 uppercase">
                    Would you sell on any of these marketplaces?
                  </p>
                  <div className="md:grid-cols-6 lg:grid-cols-5 grid grid-cols-2 gap-8 mt-6">
                    <div className="md:col-span-2 lg:col-span-1 flex justify-center col-span-1">
                      <img className="h-12" src={aboutYouImg} alt="AboutYou" />
                    </div>
                    <div className="md:col-span-2 lg:col-span-1 flex justify-center col-span-1">
                      <img
                        className="h-12"
                        src={breuningerImg}
                        alt="Beuninger"
                      />
                    </div>
                    <div className="md:col-span-2 lg:col-span-1 flex justify-center col-span-1">
                      <img className="h-12" src={zalandoImg} alt="Zalando" />
                    </div>
                    <div className="md:col-span-2 md:col-start-2 lg:col-span-1 flex justify-center col-span-1">
                      <img className="h-12" src={ottoImg} alt="OTTO" />
                    </div>
                    <div className="md:col-span-2 md:col-start-4 lg:col-span-1 flex justify-center col-span-2">
                      <img className="h-12" src={douglasImg} alt="Douglas" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <div className="relative pt-16 pb-32 overflow-hidden bg-white">
        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 max-w-xl px-4 mx-auto">
              <div>
                <div>
                  <span className="flex items-center justify-center w-12 h-12 bg-indigo-600 rounded-md">
                    <svg
                      className="w-6 h-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      />
                    </svg>
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    Coordinate online marketplaces
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Coordinating multiple online marketplaces is one of the most
                    resource-intensive challenges in eCommerce. Many companies
                    come up against their performance limits or fail right from
                    the start due to a lack of specialist expertise. As an
                    established eCommerce agency, marketplace management is one
                    of our core competencies.
                  </p>
                  <div className="mt-6">
                    <a
                      href="/contact/"
                      className="hover:bg-indigo-700 inline-flex px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm"
                    >
                      {' '}
                      Get started{' '}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:mt-16 lg:mt-0 mt-12">
              <div className="sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0 pl-4 -mr-48">
                <img
                  className="rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none w-full shadow-xl"
                  src={tb2}
                  alt="Inbox user interface"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0 max-w-xl px-4 mx-auto">
              <div>
                <div>
                  <span className="flex items-center justify-center w-12 h-12 bg-indigo-600 rounded-md">
                    <svg
                      className="w-6 h-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    Better understand your customers and your business
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Our in-house tool built for business running on TradeByte
                    are used by some of the largest eCommerce companies in
                    Germany.
                  </p>
                  <div className="mt-6">
                    <a
                      href="/contact/"
                      className="hover:bg-indigo-700 inline-flex px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm"
                    >
                      {' '}
                      Get started{' '}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:mt-16 lg:col-start-1 lg:mt-0 mt-12">
              <div className="sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0 pr-4 -ml-48">
                <img
                  className="rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none w-full shadow-xl"
                  src={tb1}
                  alt="Customer profile user interface"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gray-50">
        <div class="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div class="mx-auto max-w-3xl text-center">
            <h2 class="text-3xl font-extrabold text-gray-900">
              Direct-to-consumer
            </h2>
            <p class="mt-4 text-lg text-gray-500">
              Direct-to-consumer allows you to sell your products directly to
              the customer through a retailer (a marketplace). As a seller, you
              decide how, which marketplaces, and the exact price of your
              products.
            </p>
          </div>
          <dl class="mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8">
            <div class="relative">
              <dt>
                <svg
                  class="absolute h-6 w-6 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p class="ml-9 text-lg font-medium leading-6 text-gray-900">
                  80 stores at your fingertips
                </p>
              </dt>
              <dd class="mt-2 ml-9 text-base text-gray-500">
                With one interface you have access to the entire network of over
                80 platforms, and with it, you have an unbeatable
                time-to-market.
              </dd>
            </div>

            <div class="relative">
              <dt>
                <svg
                  class="absolute h-6 w-6 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p class="ml-9 text-lg font-medium leading-6 text-gray-900">
                  Customer's choice
                </p>
              </dt>
              <dd class="mt-2 ml-9 text-base text-gray-500">
                The customer chooses the point of sale – and you decide whether
                you want to be there, too.
              </dd>
            </div>

            <div class="relative">
              <dt>
                <svg
                  class="absolute h-6 w-6 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p class="ml-9 text-lg font-medium leading-6 text-gray-900">
                  Unbeatable statistics
                </p>
              </dt>
              <dd class="mt-2 ml-9 text-base text-gray-500">
                On which channel is your product bought, and at what price? How
                do customers react to your change? Is the revenue increasing?
                What about returns? And more with our analytics integrated
                directly into TradeByte.
              </dd>
            </div>

            <div class="relative">
              <dt>
                <svg
                  class="absolute h-6 w-6 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p class="ml-9 text-lg font-medium leading-6 text-gray-900">
                  Increased revenue
                </p>
              </dt>
              <dd class="mt-2 ml-9 text-base text-gray-500">
                With our integration through TradeByte, you can achieve the
                unthinkable, easy. List your products on multiple sales channels
                and the sales potential through expanded access to millions of
                customers.
              </dd>
            </div>

            <div class="relative">
              <dt>
                <svg
                  class="absolute h-6 w-6 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p class="ml-9 text-lg font-medium leading-6 text-gray-900">
                  Control. Navigated.
                </p>
              </dt>
              <dd class="mt-2 ml-9 text-base text-gray-500">
                Each marketplace has a different view of acceptable product
                placement and how photos must look. Is it on the customer or
                standalone? Is it on a white or gray background? We answer those
                questions for you so that you can spend time selling.
              </dd>
            </div>

            <div class="relative">
              <dt>
                <svg
                  class="absolute h-6 w-6 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p class="ml-9 text-lg font-medium leading-6 text-gray-900">
                  Expertise
                </p>
              </dt>
              <dd class="mt-2 ml-9 text-base text-gray-500">
                You will receive proactive care from our reliable and trained
                Account Managers, that dedicate their support to your success.
              </dd>
            </div>

            <div class="relative">
              <dt>
                <svg
                  class="absolute h-6 w-6 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p class="ml-9 text-lg font-medium leading-6 text-gray-900">
                  Single solution
                </p>
              </dt>
              <dd class="mt-2 ml-9 text-base text-gray-500">
                With <strong>TB.One</strong>, you reach new target groups. All
                your content and online channels are managed centrally with a
                single solution—maximum coverage with maximum simplification of
                fulfillment processes.
              </dd>
            </div>

            <div class="relative">
              <dt>
                <svg
                  class="absolute h-6 w-6 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p class="ml-9 text-lg font-medium leading-6 text-gray-900">
                  Expertise
                </p>
              </dt>
              <dd class="mt-2 ml-9 text-base text-gray-500">
                Benefit from our 10+ years of expertise in eCommerce, not only
                through our IT knowledge.
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div class="relative bg-indigo-800">
        <div class="absolute inset-0">
          <img
            class="h-full w-full object-cover"
            src={b2bImg}
            alt="Business-to-business"
          />
          <div
            class="absolute inset-0 bg-indigo-800 mix-blend-multiply"
            aria-hidden="true"
          ></div>
        </div>
        <div class="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Business-to-business
          </h1>
          <p class="mt-6 max-w-3xl text-xl text-indigo-100">
            Do you run a business-to-business operation and need automation to
            import products from TradeByte and process them automatically? By
            implementing such a solution, our customers drastically reduce
            human errors and the cost of maintenance.
          </p>
        </div>
      </div>

      <div class="bg-white">
        <div class="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24 lg:px-8">
          <div>
            <h2 class="text-base font-semibold uppercase tracking-wide text-indigo-600">
              Learn about the steps in our
            </h2>
            <p class="mt-2 text-3xl font-extrabold text-gray-900">
              TradeByte integration
            </p>
            <p class="mt-4 text-lg text-gray-500">
              Do you own a brand and want to reach out to different target
              groups by selling your products online?
            </p>
            <p class="mt-4 text-lg text-gray-500">
              But you have never done this before and miss know-how?
            </p>
            <p class="mt-4 text-lg text-gray-500">
              Let us hold your hand and lead you through the process, and
              alleviate the pain.
            </p>
          </div>
          <div class="mt-12 lg:col-span-2 lg:mt-0">
            <dl class="space-y-10 sm:grid sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4 sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-8">
              <div class="relative">
                <dt>
                  <svg
                    class="absolute h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p class="ml-9 text-lg font-medium leading-6 text-gray-900">
                    Step 1
                  </p>
                </dt>
                <dd class="mt-2 ml-9 text-base text-gray-500">
                  Get in touch with us! 😊
                </dd>
              </div>

              <div class="relative">
                <dt>
                  <svg
                    class="absolute h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p class="ml-9 text-lg font-medium leading-6 text-gray-900">
                    Step 2
                  </p>
                </dt>
                <dd class="mt-2 ml-9 text-base text-gray-500">
                  Tell us about your products, your sales and your fulfilment
                  processes.
                </dd>
              </div>

              <div class="relative">
                <dt>
                  <svg
                    class="absolute h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p class="ml-9 text-lg font-medium leading-6 text-gray-900">
                    Step 3
                  </p>
                </dt>
                <dd class="mt-2 ml-9 text-base text-gray-500">
                  We estimate the cost, and length of the integration process.
                </dd>
              </div>

              <div class="relative">
                <dt>
                  <svg
                    class="absolute h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p class="ml-9 text-lg font-medium leading-6 text-gray-900">
                    Step 4
                  </p>
                </dt>
                <dd class="mt-2 ml-9 text-base text-gray-500">
                  We connet your storefront, or your PIM with TradeByte. We get
                  in touch with marketplaces and perform onboarding for the
                  products you have chosen.
                </dd>
              </div>

              <div class="relative">
                <dt>
                  <svg
                    class="absolute h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p class="ml-9 text-lg font-medium leading-6 text-gray-900">
                    Step 5
                  </p>
                </dt>
                <dd class="mt-2 ml-9 text-base text-gray-500">
                  We thorougly test the integration, make sure that orders are
                  fulfilled by your fulfillment center according to marketplaces
                  requirements.
                </dd>
              </div>

              <div class="relative">
                <dt>
                  <svg
                    class="absolute h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p class="ml-9 text-lg font-medium leading-6 text-gray-900">
                    Step 6
                  </p>
                </dt>
                <dd class="mt-2 ml-9 text-base text-gray-500">
                  We tune up the volume based on statistics we have gathered, so
                  that your products can perform better.
                </dd>
              </div>

              <div class="relative">
                <dt>
                  <svg
                    class="absolute h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p class="ml-9 text-lg font-medium leading-6 text-gray-900">
                    Step 7
                  </p>
                </dt>
                <dd class="mt-2 ml-9 text-base text-gray-500">
                  We teach you on how to use our reporting tools, and how to
                  analyze the data.
                </dd>
              </div>

              <div class="relative">
                <dt>
                  <svg
                    class="absolute h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p class="ml-9 text-lg font-medium leading-6 text-gray-900">
                    Step 8
                  </p>
                </dt>
                <dd class="mt-2 ml-9 text-base text-gray-500">
                  We celebrate. Together. 🎉
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div class="bg-gray-50">
        <div class="mx-auto max-w-7xl divide-y divide-gray-200 py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 class="text-3xl font-extrabold text-gray-900">
            Frequently asked questions
          </h2>
          <div class="mt-8">
            <dl class="divide-y divide-gray-200">
              <div class="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8">
                <dt class="text-base font-medium text-gray-900 md:col-span-5">
                  What platforms can I sell on?
                </dt>
                <dd class="mt-2 md:col-span-7 md:mt-0">
                  <p class="text-base text-gray-500">
                    Through the power of TradeByte, we are able to integrate
                    into 80+ top marketplaces. International and local. Some of
                    them include Zalando, About You, Breuninger, Afound, Otto,
                    Goertz, Decathlon, InterSport, My Toys, Amazon, Babymarkt.
                  </p>
                </dd>
              </div>
              <div class="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8">
                <dt class="text-base font-medium text-gray-900 md:col-span-5">
                  Which countries do serve?
                </dt>
                <dd class="mt-2 md:col-span-7 md:mt-0">
                  <p class="text-base text-gray-500">
                    Our customers are mostly from Austria, Germany, Switzerland,
                    Norway and Sweden, but we can set up your sales chanels in
                    additional countries such as: Denmark, Finland, Sweden,
                    Belgium, France, Italy, Netherlands, Czechia, Slovakia,
                    Poland, Spain, Slovenia, Croatia, and Ireland.
                  </p>
                </dd>
              </div>
              <div class="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8">
                <dt class="text-base font-medium text-gray-900 md:col-span-5">
                  How long is the onboarding process?
                </dt>
                <dd class="mt-2 md:col-span-7 md:mt-0">
                  <p class="text-base text-gray-500">
                    On average, it takes about 12 weeks to implement the full
                    solution. But it may depend on the following. Do you have an
                    online store (Magento, Oxid, WooCommerce, Shopify)? To you
                    have a warehouse to integrate? Do you need to integrate with
                    PIM? Are your photos taken according to the marketplace you
                    wish to be listed on?
                  </p>
                  <p class="mt-4 text-base text-gray-500">
                    It is the best to have a call and do the estimate
                    afterwards.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div className="bg-indigo-50">
        <div className="max-w-7xl sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-24 lg:px-8 px-4 py-12 mx-auto">
          <h2 className="md:text-4xl text-3xl font-extrabold tracking-tight text-gray-900">
            <span className="block">Get in touch?</span>
            <span className="block text-indigo-600">Book your call today.</span>
          </h2>
          <div className="lg:mt-0 lg:flex-shrink-0 flex mt-8">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/contact/"
                className="hover:bg-indigo-700 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
