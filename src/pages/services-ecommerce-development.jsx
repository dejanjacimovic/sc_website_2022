import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import LayoutPage from '../components/layout_page';
import NavCenter from '../components/nav_center';

export default function ServicesEcommerceDevelopment() {
  return (
    <LayoutPage>
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

          <div className="relative pb-32 mt-8 bg-gray-800">
            <div className="absolute inset-0">
              <StaticImage
                className="w-full h-full object-cover"
                src="../images/working-class-hero.jpeg"
                alt="Working class hero is something to be"
              />
              <div
                className="absolute inset-0 bg-gray-800 mix-blend-multiply"
                aria-hidden="true"
              />
            </div>
            <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
              <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                We live and breathe eCommerce
                <br />
                since 2010
              </h1>
              <p className="mt-6 max-w-3xl text-xl text-gray-300">
                Are you looking for experts to help you (re)launch, position,
                and grow your eCommerce business? We offer strategic services,
                including in-house design and development for eCommerce
                businesses. We work with companies like Camp David, Tesori,
                JumpKing, and Arduino.
              </p>
              <p className="mt-6 max-w-3xl text-xl text-gray-300">
                We accompany brands to success in the world of eCommerce by
                building scalable solutions that measure what matters—your
                sales.
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

      <div className="py-12 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-left">
            <p className=" text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
              Our question is,
            </p>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              What can we help you with?
            </h3>
            <p className="mt-4 text-xl leading-7 text-gray-500 lg:mx-auto">
              Technology is transforming the way we live and work. Software
              technologies are an essential part of the technology
              transformation.
            </p>
            <p className="mt-4  text-xl leading-7 text-gray-500 lg:mx-auto">
              Learn more about platforms, technologies, and industries we have
              gained extensive experience with over the past ten years.
            </p>
          </div>
          <div className="mt-10" />
          <div className="mt-12 text-left">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-3">
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <svg
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Our Main Platforms
                    </h3>
                    <ul className="mt-2 text-base leading-6 text-gray-500 list-disc pl-4">
                      <li>Magento</li>
                      <li>WooCommerce</li>
                      <li>Shopify</li>
                      <li>Solidus</li>
                      <li>Oxid</li>
                      <li>Salesforce Cloud</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <svg
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Our Main Technology Stack
                    </h3>
                    <ul className="mt-2 text-base leading-6 text-gray-500 list-disc pl-4">
                      <li>PHP</li>
                      <li>Ruby on Rails</li>
                      <li>Python</li>
                      <li>JavaScript</li>
                      <li>Java</li>
                      <li>React / Vue / Angular</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <svg
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Industries
                    </h3>
                    <ul className="mt-2 text-base leading-6 text-gray-500 list-disc pl-4">
                      <li>Fashion</li>
                      <li>Technology</li>
                      <li>Commodity</li>
                      <li>Product</li>
                      <li>E-Learning</li>
                      <li>Rental</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900">
        <div className="pt-12 sm:pt-16 lg:pt-24">
          <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
              <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">
                Our approach is
              </h2>
              <p className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                Being focused on your success
              </p>
              <p className="pt-12 text-xl leading-7 text-gray-300 lg:mx-auto max-w-7xl lg:max-w-5xl text-left">
                When it comes to tailor-made eCommerce solutions for business
                technology, innovation is all about increasing the pace of
                delivery. Speed influences the time to market and indirectly
                affects the costs associated with the project.
              </p>
              <p className="pt-6 text-xl leading-7 text-gray-300 lg:mx-auto max-w-7xl lg:max-w-5xl text-left">
                At StuntCoders, we deliver new technologies that facilitate this
                pace of delivery. We focus on intelligent orchestration and the
                integration of services, open-source components, and customized
                software.
              </p>
              <p className="pt-6 text-xl leading-7 text-gray-300 lg:mx-auto max-w-7xl lg:max-w-5xl text-left">
                While we are using an agile setup to deliver the software, we
                take responsibility to achieve milestones and reach deadlines
                together with your Product Owners and other stakeholders.
              </p>
              <p className="pt-6 text-xl leading-7 text-gray-300 lg:mx-auto max-w-7xl lg:max-w-5xl text-left">
                To best adapt to your needs, we have created two models of
                collaboration—one for balanced small-budget companies and the
                other for fast-paced enterprises or startups.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
          <div className="relative">
            <div className="absolute inset-0 h-3/4 bg-gray-900" />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                    <h3 className="mt-5 text-gray-900 text-3xl font-extrabold">
                      Micro-team
                    </h3>
                    <div className="mt-4 flex items-baseline text-xl font-extrabold">
                      from 7.200 €
                      <span className="ml-1 text-l font-medium text-gray-500">
                        /mo
                      </span>
                    </div>
                    <p className="mt-5 text-lg text-gray-500">
                      Micro-team comprises multi-disciplinary personnel that
                      includes project manager, front-end developer, back-end
                      developer, and quality assurance. This well-balanced team
                      will work on your project development two weeks a month,
                      or 160 work hours. Product Owner determines priority and
                      scope of the project.
                    </p>
                  </div>
                  <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-6 w-6 text-green-500"
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="ml-3 text-base text-gray-700">
                          90 minutes Response Time
                        </p>
                      </li>

                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-6 w-6 text-green-500"
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="ml-3 text-base text-gray-700">
                          160 Work Hours
                        </p>
                      </li>

                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-6 w-6 text-green-500"
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="ml-3 text-base text-gray-700">
                          Well-balanced team
                        </p>
                      </li>

                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-6 w-6 text-green-500"
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="ml-3 text-base text-gray-700">
                          Adaptive communication
                        </p>
                      </li>
                    </ul>
                    <div className="rounded-md shadow">
                      <Link
                        to="/contact/"
                        className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
                        aria-describedby="tier-standard"
                      >
                        Get started
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                    <h3 className="mt-5 text-gray-900 text-3xl font-extrabold">
                      Accelerated Development
                    </h3>
                    <div className="mt-4 flex items-baseline text-xl font-extrabold">
                      from 11.250 €
                      <span className="ml-1 text-l font-medium text-gray-500">
                        /mo
                      </span>
                    </div>
                    <p className="mt-5 text-lg text-gray-500">
                      By establishing a dedicated development unit for you, we
                      provide a comprehensive set of development services,
                      ensuring an overall content business flow and teams that
                      are the best fit for the assignment and responsibility for
                      the quality and timeliness of software delivery.
                    </p>
                  </div>
                  <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-6 w-6 text-green-500"
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="ml-3 text-base text-gray-700">
                          Full time, fully integrated team
                        </p>
                      </li>

                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-6 w-6 text-green-500"
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="ml-3 text-base text-gray-700">
                          Team assigned only to you
                        </p>
                      </li>

                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-6 w-6 text-green-500"
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="ml-3 text-base text-gray-700">
                          Predictable and transparent cost
                        </p>
                      </li>

                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-6 w-6 text-green-500"
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="ml-3 text-base text-gray-700">
                          Development at your pace
                        </p>
                      </li>
                    </ul>
                    <div className="rounded-md shadow">
                      <Link
                        to="/contact/"
                        className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
                        aria-describedby="tier-standard"
                      >
                        Get started
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
            <div className="max-w-md mx-auto lg:max-w-5xl">
              <div className="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
                <div className="flex-1">
                  <div className="mt-4 text-lg text-gray-600">
                    We create long-lasting relationships with our clients and
                    focus on communicating with them to ensure they are always
                    in control.
                  </div>

                  <div className="mt-4 text-lg text-gray-600">
                    Our Accelerated Development delivery method is a perfect fit
                    for more significant innovation initiatives, where roadmaps
                    and backlogs exist and stretch over a more extended period.
                  </div>

                  <div className="mt-4 text-lg text-gray-600">
                    You control the direction and focus of the teams and adjust
                    their priorities to align with your business needs in an
                    agile way.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Proven results and happy customers!
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4 hidden" />
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <StaticImage
                  className="h-48 w-full object-cover"
                  src="../images/portfolio/tesori.jpeg"
                  alt="Tesori portfolio image"
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    Case Study
                  </p>
                  <Link to="/case/tesori/" className="block mt-2">
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
                    className="hidden md:block mx-1 h-5 w-5 text-indigo-600"
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
              <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl">
                <Link
                  to="/case/tesori/"
                  className="text-base font-medium text-indigo-700 hover:text-indigo-600"
                >
                  Read the study<span aria-hidden="true"> →</span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <StaticImage
                  className="h-48 w-full object-cover"
                  src="../images/portfolio/clinton-b2b.jpeg"
                  alt="Camp David Soccx"
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    Case Study
                  </p>
                  <Link to="/case/camp-david/" className="block mt-2">
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
                    className="hidden md:block mx-1 h-5 w-5 text-indigo-600"
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
              <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl">
                <Link
                  href="/case/camp-david/"
                  className="text-base font-medium text-indigo-700 hover:text-indigo-600"
                >
                  Read the study<span aria-hidden="true"> →</span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <StaticImage
                  className="h-48 w-full object-cover"
                  src="../images/portfolio/selekkt.jpeg"
                  alt="Selekkt"
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    Case Study
                  </p>
                  <a href="#" className="block mt-2">
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
                    className="hidden md:block mx-1 h-5 w-5 text-indigo-600"
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
              <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl">
                <Link
                  href="/case/selekkt/"
                  className="text-base font-medium text-indigo-700 hover:text-indigo-600"
                >
                  Read the study<span aria-hidden="true"> →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white overflow-hidden">
        <div className="relative max-w-screen-xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">
          <svg
            className="absolute top-full left-0 transform translate-x-80 -translate-y-24 lg:hidden"
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
            className="hidden lg:block absolute right-full top-1/2 transform translate-x-1/2 -translate-y-1/2"
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
                src="../images/terje.jpg"
                alt="Teje Tesori"
                loading="auto"
              />
            </div>
            <div className="relative lg:ml-10">
              <svg
                className="absolute top-0 left-0 transform -translate-x-8 -translate-y-24 h-36 w-36 text-indigo-200 opacity-50"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 144 144"
              >
                <path
                  stroke-width="2"
                  d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
                />
              </svg>
              <blockquote className="relative">
                <div className="text-2xl leading-9 font-medium text-gray-900">
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
                        src="../images/terje.jpg"
                        alt=""
                        loading="auto"
                      />
                    </div>
                    <div className="ml-4 lg:ml-0">
                      <div className="text-base leading-6 font-medium text-gray-900">
                        Terje Gaupseth
                      </div>
                      <div className="text-base leading-6 font-medium text-indigo-600">
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

      <div className="bg-gray-50 overflow-hidden">
        <div className="relative max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <svg
            className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
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
          <div className="relative lg:grid lg:grid-cols-3 lg:col-gap-8">
            <div className="lg:col-span-1">
              <h3 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                We are providing you with peace of mind.
              </h3>
            </div>
            <div className="mt-10 sm:grid sm:grid-cols-2 sm:col-gap-8 sm:row-gap-10 lg:col-span-2 lg:mt-0">
              <div>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                </div>
                <div className="mt-5 pr-4">
                  <h4 className="text-lg leading-6 font-medium text-gray-900">
                    Hosting Included
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Our team of DevOps is there to make sure your systems are
                    running smoothly 24/7 so that you don't need to dedicate any
                    additional resources to run your online store.
                  </p>
                  <br />
                </div>
              </div>
              <div className="mt-10 sm:mt-0 pb-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <div className="mt-5 pb-4">
                  <h4 className="text-lg leading-6 font-medium text-gray-900">
                    Distributed Network
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Distributed networks of computers are there to provide you
                    with exceptional deliverability, so you can always stay
                    online even in the unlikely event of increased loads or
                    outside attacks.
                  </p>
                </div>
              </div>
              <div className="mt-10 sm:mt-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <div className="mt-5 pr-4">
                  <h4 className="text-lg leading-6 font-medium text-gray-900">
                    Daily Backups
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Our backup systems are made in such a manner that partial
                    updates get performed every minute to make sure your system
                    is possible to recover without any data loss. Full backups
                    get performed daily.
                  </p>
                </div>
              </div>
              <div className="mt-10 sm:mt-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div className="mt-5 pr-4">
                  <h4 className="text-lg leading-6 font-medium text-gray-900">
                    GDPR Compliance
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Our team will make sure you stay up to date with GDPR with
                    data processing audits, privacy policy checks, and
                    communication with your legal team upon new tools
                    implemented while recording awareness of the customer so
                    that in an unlikely event of user reporting, you have the
                    evidence of rightdoing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Marketplaces under your fingertips</span>
          </h2>

          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Speed up deals with the ability to sell on marketplaces through
            integrated platforms and reach a wider audience through Amazon,
            Zalando, Otto, and hundreds of others.
          </p>

          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Once implemented, our customers have seen a 5x increase in revenue
            in the first year and a steady 1.3x year over year after the first
            year.
          </p>

          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <StaticImage
                  className="h-12"
                  src="../images/marketplaces/otto.png"
                  alt="Otto"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <StaticImage
                  className="h-12"
                  src="../images/marketplaces/amazon.png"
                  alt="Amazon"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <StaticImage
                  className="h-12"
                  src="../images/marketplaces/ebay.png"
                  alt="ebay"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                <StaticImage
                  className="h-12"
                  src="../images/marketplaces/zalando.svg"
                  alt="Zalando"
                />
              </div>
              <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                <StaticImage
                  className="h-12"
                  src="../images/marketplaces/goertz.png"
                  alt="Goertz"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/contact/"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Contact us to learn more
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-gray-50 py-16 sm:py-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="relative sm:py-16 lg:py-0">
            <div
              aria-hidden="true"
              className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
            >
              <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
              <svg
                className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                width="404"
                height="392"
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width="404"
                  height="392"
                  fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
                />
              </svg>
            </div>
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
              <img
                src="https://stcdshare.s3.amazonaws.com/vND1hE7mnw.jpg"
                alt="Unleash your Decision-making Process"
                className="relative mx-auto rounded-lg shadow-xl border-gray-200"
              />
            </div>
          </div>

          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                360° eCommerce Analytics
              </h2>
              <div className="mt-6 text-gray-500 space-y-6">
                <p className="text-lg">
                  Today the world’s most valuable resource has changed from
                  energy to data. Businesses are becoming driven by data and the
                  insights derived from it; this, in turn, requires us to
                  develop new skills in data engineering and data science.
                </p>
                <p className="text-lg">
                  To develop a business-value-focused eCommerce solution, IT
                  strategy and to fit your business objectives, our company will
                  collaborate with your teams beyond beyond ROI and ROAS.
                </p>
                <p className="text-lg">
                  Our know-how allows for the most accurate data tracking
                  implementations. This way, once correctly processed, allows
                  your marketing and sales teams to make correct critical
                  business decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
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
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
              <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <StaticImage
                  className="max-h-12"
                  src="../images/partnerships/digitalocean.svg"
                  alt="DigitalOcean"
                />
              </div>
              <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <StaticImage
                  className="max-h-12"
                  src="../images/partnerships/aws.png"
                  alt="AWS"
                />
              </div>
              <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <StaticImage
                  className="max-h-12"
                  src="../images/partnerships/cpanel.svg"
                  alt="cPanel"
                />
              </div>
              <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <StaticImage
                  className="max-h-12"
                  src="../images/partnerships/mailchimp.png"
                  alt="MailChimp"
                />
              </div>
              <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <StaticImage
                  className="max-h-12"
                  src="../images/partnerships/algolia.png"
                  alt="Algolia"
                />
              </div>
              <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <StaticImage
                  className="max-h-12"
                  src="../images/partnerships/tradebyte.svg"
                  alt="Tradebyte"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
          <svg
            className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
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
              fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
            />
          </svg>
          <div className="relative">
            <h3 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Accelerate Your Development
            </h3>
            <p className="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-500">
              Shortage of tech talent is one of the biggest challenges
              businesses face today regarding technology innovation.
            </p>
            <p className="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-500">
              StuntCoders accelerates product roadmaps and helps modernize tech
              stacks by becoming a trusted technology partner and an extension
              of your in-house team.
            </p>
          </div>
          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                In-sourcing
              </h4>
              <p className="mt-3 text-lg leading-7 text-gray-500">
                We help you grow your project with tailor-made individual team
                members who have the right level of expertise and work for you
                remotely and under your direct management. You avoid all the
                trouble of administration and infrastructure while at the same
                time significantly reducing your labor costs.
              </p>
              <p className="mt-3 text-lg leading-7 text-gray-500">
                We help you overcome tech talent shortages and become your
                additional development location by working alongside your
                engineering teams.
              </p>
            </div>
            <div className="mt-10 -mx-4 relative lg:mt-0">
              <svg
                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
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
                  fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
                />
              </svg>
              <StaticImage
                className="relative mx-auto rounded-lg shadow-xl border-gray-200"
                width="490"
                src="../images/nearshoring.jpeg"
                alt="Experienced developer"
                loading="auto"
              />
            </div>
          </div>
          <svg
            className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
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
              fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
            />
          </svg>
          <div className="relative mt-12 sm:mt-16 lg:mt-24">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="lg:col-start-2">
                <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                  Why does it make sense?
                </h4>
                <p className="mt-3 text-lg leading-7 text-gray-500">
                  You don't have to provide office, equipment, and testing. None
                  of the material elements are necessary for building an online
                  presence. You can also forget about recruitment time and
                  costs. You don't need to worry about software and test
                  infrastructure. You can skip trying to gather the exact set of
                  skills necessary for your project.
                </p>
                <p className="mt-3 text-lg leading-7 text-gray-500">
                  High performance, quality output and great communication go a
                  long way to ensure smooth service delivery. We have a set of
                  continual activities to ensure we’re on top of our game.
                </p>
              </div>
              <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                <svg
                  className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
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
                    fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                  />
                </svg>
                <StaticImage
                  className="relative mx-auto rounded-lg shadow-xl border-gray-200"
                  width="490"
                  src="../images/why.jpg"
                  alt="Why?"
                  loading="auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Choose an Experienced Integrator
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Over the 10+ years, we have delivered 60+ highly successful online
              stores and have successfully connected online stores to ERP,
              warehouse systems, and CRMs.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              Integrating your internal tools into your website can be a tedious
              task prone to failure. By choosing a partner with experience with
              the following systems, you reduce time to market and uncertainty.
            </p>
          </div>
          <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
            <div className="relative">
              <dt>
                <svg
                  className="absolute h-6 w-6 text-green-500"
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                  Visma
                </p>
              </dt>
            </div>

            <div className="relative">
              <dt>
                <svg
                  className="absolute h-6 w-6 text-green-500"
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                  Mamut
                </p>
              </dt>
            </div>

            <div className="relative">
              <dt>
                <svg
                  className="absolute h-6 w-6 text-green-500"
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                  Microsoft Dynamics
                </p>
              </dt>
            </div>

            <div className="relative">
              <dt>
                <svg
                  className="absolute h-6 w-6 text-green-500"
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                  SAP
                </p>
              </dt>
            </div>

            <div className="relative">
              <dt>
                <svg
                  className="absolute h-6 w-6 text-green-500"
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                  Odoo
                </p>
              </dt>
            </div>

            <div className="relative">
              <dt>
                <svg
                  className="absolute h-6 w-6 text-green-500"
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                  Salesforce
                </p>
              </dt>
            </div>

            <div className="relative">
              <dt>
                <svg
                  className="absolute h-6 w-6 text-green-500"
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                  Pimcore
                </p>
              </dt>
            </div>

            <div className="relative">
              <dt>
                <svg
                  className="absolute h-6 w-6 text-green-500"
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                  SuperOffice
                </p>
              </dt>
            </div>
          </dl>
        </div>
      </div>

      <div className="bg-indigo-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            <span className="block">Get in touch?</span>
            <span className="block text-indigo-600">Book your call today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/contact/"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
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
