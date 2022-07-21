import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import LayoutPage from '../../components/layout_page';
import NavCenter from '../../components/nav_center';

import headlessBoost from '../../images/general/headless-boost.jpeg';
import shopifyImg from '../../images/headless/shopify.svg';
import awsImg from '../../images/partnerships/aws.png';
import medusaImg from '../../images/headless/medusa.svg';
import stripeImg from '../../images/headless/stripe.svg';
import algoliaImg from '../../images/partnerships/algolia.png';
import gatsbyImg from '../../images/headless/gatsby.svg';

export default function ServicesEcommerceDevelopment() {
  return (
    <LayoutPage>
      <Helmet>
        <title>Headless eCommerce development at StuntCoders</title>
      </Helmet>

      <div className="relative overflow-hidden bg-gray-50">
        <div className="hidden sm:absolute sm:inset-y-0 sm:block sm:h-full sm:w-full">
          <div className="relative mx-auto h-full max-w-screen-xl">
            <svg
              className="absolute right-full translate-y-1/4 translate-x-1/4 transform lg:translate-x-1/2"
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
              className="absolute left-full -translate-y-3/4 -translate-x-1/4 transform md:-translate-y-1/2 lg:-translate-x-1/2"
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
        <div className="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <NavCenter />

          <main className="mt-4 lg:relative">
            <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
              <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                  <span className="block xl:inline">Headless eCommerce</span>{' '}
                  <span className="block text-indigo-600 xl:inline">
                    to boost your online business
                  </span>
                </h1>
                <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                  Unprescedented speed and agility in development with React
                  front-end and support of Gatsbyjs.
                </p>
                <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                    >
                      {' '}
                      Get started{' '}
                    </a>
                  </div>
                  <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
                    >
                      {' '}
                      Learn more{' '}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src={headlessBoost}
                alt="Girl on the phone"
              />
            </div>
          </main>
        </div>
      </div>

      <div className="bg-gray-900">
        <div className="pt-12 sm:pt-16 lg:pt-24">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl space-y-2 lg:max-w-none">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                How Can Headless Commerce Help your eCommerce Business?
              </h2>
              <p className="max-w-7xl pt-12 text-left text-xl leading-7 text-gray-300 lg:mx-auto lg:max-w-5xl">
                Consumers access eCommerce websites through various devices.
                eCommerce companies, therefore, must ensure their clients have a
                flawless experience. Adobe, Commerce Tools, Shopify, and others
                are implementing headless commerce architecture on their
                platforms.{' '}
                <a
                  href="https://www.forbes.com/sites/forbestechcouncil/2021/05/11/why-is-headless-commerce-getting-16-billion-in-funding/?sh=1ae3fdd513ab"
                  target="_blank"
                  className="underline"
                >
                  Forbes reports
                </a>{' '}
                that more than $1.65 billion in funding has been raised for
                headless technology in 2021 alone.
              </p>
              <p className="max-w-7xl pt-6 text-left text-xl leading-7 text-gray-300 lg:mx-auto lg:max-w-5xl">
                A style of eCommerce architecture known as "headless commerce"
                separates the front and back end of an eCommerce operation. With
                this division, it is possible to update an eCommerce website's
                design and user interface without affecting the backend coding.
                As a result, more minor development limitations are when
                building or updating your website, making it more user-friendly
                and distinctive.
              </p>
              <p className="max-w-7xl pt-6 text-left text-xl leading-7 text-gray-300 lg:mx-auto lg:max-w-5xl">
                Adopting headless commerce will give online brands many
                advantages, including the following:
              </p>
              <p className="max-w-7xl pt-6 text-left text-xl leading-7 text-gray-300 lg:mx-auto lg:max-w-5xl">
                <strong>Faster speed:</strong> Headless commerce separates the
                front-end presentation layer from the functionality and
                background process layer of the commerce (back-end). As a
                result, the people's experience is more smooth and the stuff
                they view loads more quickly. According to studies, reducing the
                loading time by just 0.1s can increase conversion rates by
                approximately 8%. Consequently, implementing headless commerce
                will speed up your website and boost conversion rates.
              </p>
              <p className="max-w-7xl pt-6 text-left text-xl leading-7 text-gray-300 lg:mx-auto lg:max-w-5xl">
                <strong>Flexibility:</strong> You may easily apply a lot of
                customisation with the aid of headless architecture, which was
                before impossible or looked to be quite difficult. Additionally,
                maintaining and making changes to headless commerce websites
                takes a lot less time. This method is more versatile because any
                alterations you require can be done in the front end without
                requiring the engineers to alter the back-end coding. Just keep
                in mind that it is not possible to implement platform plugins
                that come with the front-end already built.
              </p>
              <p className="max-w-7xl pt-6 text-left text-xl leading-7 text-gray-300 lg:mx-auto lg:max-w-5xl">
                <strong>Improved security:</strong> While eCommerce platforms
                are crucial, this is one of the most important aspects of
                headless commerce. Due to the headless architecture, your
                backend server and admin portal endpoint are hidden from the
                outside user. Consequently, it is less likely to be attacked.
                Additionally, the same can only be accessed from business IP
                addresses.
              </p>
              <p className="max-w-7xl pt-6 text-left text-xl leading-7 text-gray-300 lg:mx-auto lg:max-w-5xl">
                <strong>Omnichannel Experience:</strong> The buyer journey is
                becoming increasingly more complex.{' '}
                <a
                  href="https://www.salesforce.com/content/dam/web/en_us/www/documents/research/salesforce-state-of-the-connected-customer-4th-ed.pdf"
                  className="underline"
                  target="_blank"
                >
                  According to data
                </a>
                , nearly 74% of customers initiate and complete purchases
                through several channels. Additionally, 76 percent of consumers
                select a different eCommerce channel depending on the situation.
              </p>
              <p className="max-w-7xl pt-6 pb-16 text-left text-xl leading-7 text-gray-300 lg:mx-auto lg:max-w-5xl">
                <strong>
                  Improved Customer Experience and Personalization:
                </strong>{' '}
                The demands and wants of the clients are constantly evolving.
                Nowadays, customers seek a personalized experience, even when
                purchasing. This includes features like tailored promos,
                recommendations, and shopping preferences that are based on a
                customer's past purchases. A headless architecture ensures the
                ability to customize the website's front end to the user's
                preferences. As a result, your relationship with your customers
                becomes stronger and more unique.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden bg-gray-50">
        <div className="relative mx-auto max-w-screen-xl py-12 px-4 sm:px-6 lg:px-8">
          <svg
            className="absolute top-0 left-full -translate-x-1/2 -translate-y-3/4 transform lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
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
              fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
            />
          </svg>
          <div className="lg:col-gap-8 relative lg:grid lg:grid-cols-3">
            <div className="lg:col-span-1">
              <h3 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                Headless eCommerce
              </h3>
              <p className="mt-12 pr-12 text-lg leading-6 text-gray-500">
                Which are the Most Suitable Businesses?
              </p>
            </div>
            <div className="sm:col-gap-8 sm:row-gap-10 mt-10 sm:grid sm:grid-cols-2 lg:col-span-2 lg:mt-0">
              <div className="mt-4 pb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="mt-5 pr-4">
                  <h4 className="text-lg font-medium leading-6 text-gray-900">
                    Tailored content
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    You can integrate headless commerce into your website to
                    give customers access to more tailored content and a fluid
                    omnichannel viewing experience. A DTC business, for
                    instance, or a brand that relies on native advertising and
                    influencer marketing, should choose headless commerce since
                    it may help them implement their content- and experience-led
                    strategy.
                  </p>
                  <br />
                </div>
              </div>
              <div className="mt-4 pb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                    />
                  </svg>
                </div>
                <div className="mt-5 pb-4">
                  <h4 className="text-lg font-medium leading-6 text-gray-900">
                    Long-term business goals
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    If it fits your long-term business objectives, headless
                    enables more creative freedom and developmental flexibility.
                    Before you put this method in place, look through all your
                    long-term objectives. Headless commerce is the way to go if
                    you are a merchant operating with several similar brands and
                    want to preserve brand functionality across various
                    platforms and verticals.
                  </p>
                </div>
              </div>
              <div className="mt-4 pb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                    />
                  </svg>
                </div>
                <div className="mt-5 pr-4">
                  <h4 className="text-lg font-medium leading-6 text-gray-900">
                    Customzied products
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Sellers that are already selling or intend to sell
                    customized products should give headless as their primary
                    option because it enables them to have more personalized
                    products.
                  </p>
                </div>
              </div>
              <div className="mt-4 pb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <div className="mt-5 pr-4">
                  <h4 className="text-lg font-medium leading-6 text-gray-900">
                    Omnichannel Experience
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Companies that plan or are already using different
                    touchpoints with the same back-end and wish to give
                    customers the same seamless experience, whether it is
                    Website, Mobile Web, Mobile App, POS, Kiosk, etc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="lg:text-left">
            <p className=" text-base font-semibold uppercase leading-6 tracking-wide text-indigo-600">
              Our question is,
            </p>
            <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Would you keep your existing solution and data or build from
              scratch?
            </h3>
            <p className="mt-4 text-xl leading-7 text-gray-500 lg:mx-auto">
              Headless is here to connect to your pre-existing back-end, helping
              you keep your data and business as usual with new high-performance
              experience and extensibility.
            </p>
            <p className="mt-4  text-xl leading-7 text-gray-500 lg:mx-auto">
              Learn more about platforms, technologies, and industries we have
              gained extensive experience with over the past years.
            </p>
          </div>
          <div className="mt-10" />
          <div className="mt-12 text-left">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-3">
              <div className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
                        <svg
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                      Established
                    </h3>
                    <ul className="mt-2 list-disc pl-4 text-base leading-6 text-gray-500">
                      <li>Magento</li>
                      <li>Shopify</li>
                      <li>WooCommerce</li>
                      <li>Oxid</li>
                      <li>BigCommerce</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
                        <svg
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                      New Kids on the Block
                    </h3>
                    <ul className="mt-2 list-disc pl-4 text-base leading-6 text-gray-500">
                      <li>Medusajs</li>
                      <li>Swell</li>
                      <li>Saleor</li>
                      <li>Sanity</li>
                      <li>Storyblok</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
                        <svg
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                      Served by
                    </h3>
                    <ul className="mt-2 list-disc pl-4 text-base leading-6 text-gray-500">
                      <li>Netlify</li>
                      <li>CloudFront</li>
                      <li>Gatsby</li>
                      <li>Heroku</li>
                      <li>Vercel</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Proven results and happy customers!
            </h2>
            <p className="mx-auto mt-3 hidden max-w-2xl text-xl text-gray-500 sm:mt-4" />
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <StaticImage
                  className="h-48 w-full object-cover"
                  src="../../images/portfolio/tesori.jpeg"
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
                      Tesori Diamanter
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      Since 2008, Tesori Diamanter has supplied quality diamonds
                      at very competitive prices. As a customer with Tesori, you
                      are guaranteed personal service and guidance through
                      finding the perfect diamond.
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      Tesori selected StuntCoders for their partner in this
                      long-lasting pursuit of perfection.
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
                  Read the study<span aria-hidden="true"> →</span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <StaticImage
                  className="h-48 w-full object-cover"
                  src="../../images/portfolio/clinton-b2b.jpeg"
                  alt="Camp David Soccx"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    Case Study
                  </p>
                  <Link to="/case/camp-david/" className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      Camp David & Soccx
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      B2B eCommerce implementation for one of the fastest
                      growing fashion companies in Germany.
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      To optimize their sales team of 60+ people, Camp David has
                      found an ideal partner in StuntCoders. Today, each
                      individual is saving 40+ hours a month on previously
                      manual tasks.
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
                  Read the study<span aria-hidden="true"> →</span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <StaticImage
                  className="h-48 w-full object-cover"
                  src="../../images/portfolio/selekkt.jpeg"
                  alt="Selekkt"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    Case Study
                  </p>
                  <a href="/case/selekkt/" className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      Selekkt
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      What was initially only a place with a limited selection
                      of products today is a marketplace for 30.000 designers.
                      Supporting such a variety of customers and use-cases, plus
                      legal requirements, was no easy task.
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      We are lucky to call ourselves partners of Selekkt and
                      successfully maintain their platform's quality in 10+
                      years of a history of collaboration.
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
                  Read the study<span aria-hidden="true"> →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="overflow-hidden bg-white">
        <div className="relative mx-auto max-w-screen-xl px-4 pt-20 pb-12 sm:px-6 lg:px-8 lg:py-20">
          <svg
            className="absolute top-full left-0 translate-x-80 -translate-y-24 transform lg:hidden"
            width="784"
            height="404"
            fill="none"
            viewBox="0 0 784 404"
          >
            <defs>
              <pattern
                id="e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32"
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
              width="784"
              height="404"
              fill="url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)"
            />
          </svg>
          <svg
            className="absolute right-full top-1/2 hidden translate-x-1/2 -translate-y-1/2 transform lg:block"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="56409614-3d62-4985-9a10-7ca758a8f4f0"
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
              fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)"
            />
          </svg>
          <div className="relative lg:flex lg:items-center">
            <div className="hidden lg:block lg:flex-shrink-0">
              <StaticImage
                className="h-64 w-64 rounded-full xl:h-80 xl:w-80"
                src="../../images/terje.jpg"
                alt="Teje Tesori"
                loading="auto"
              />
            </div>
            <div className="relative lg:ml-10">
              <svg
                className="absolute top-0 left-0 h-36 w-36 -translate-x-8 -translate-y-24 transform text-indigo-200 opacity-50"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 144 144"
              >
                <path
                  strokeWidth="2"
                  d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
                />
              </svg>
              <blockquote className="relative">
                <div className="text-2xl font-medium leading-9 text-gray-900">
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
                <footer className="mt-8">
                  <div className="flex">
                    <div className="flex-shrink-0 lg:hidden">
                      <StaticImage
                        className="h-12 w-12 rounded-full"
                        src="../../images/terje.jpg"
                        alt="Terje from Tesori"
                        loading="auto"
                      />
                    </div>
                    <div className="ml-4 lg:ml-0">
                      <div className="text-base font-medium leading-6 text-gray-900">
                        Terje Gaupseth
                      </div>
                      <div className="text-base font-medium leading-6 text-indigo-600">
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

      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Alliances &amp; Partnerships
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Benefit from our know-how. Having deep expertise around these
                solutions helps us deliver even more value to you, our
                customers.
              </p>
              <div className="mt-8 sm:flex">
                <div className="mt-3 sm:mt-0">
                  <Link
                    to="/contact/"
                    className="focus:shadow-outline inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-indigo-500 focus:outline-none"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
              <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <img className="max-h-12" src={shopifyImg} alt="Shopify" />
              </div>
              <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <img className="max-h-12" src={awsImg} alt="AWS" />
              </div>
              <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <img className="max-h-12" src={medusaImg} alt="Medusajs" />
              </div>
              <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <img className="max-h-12" src={stripeImg} alt="Stripe" />
              </div>
              <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <img className="max-h-12" src={algoliaImg} alt="Algolia" />
              </div>
              <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <img className="max-h-12" src={gatsbyImg} alt="Gatsby" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-indigo-50">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-24 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            <span className="block">Get in touch?</span>
            <span className="block text-indigo-600">Book your call today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/contact/"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
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
