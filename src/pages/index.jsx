import React from 'react';
import { Helmet } from 'react-helmet';
import LayoutPage from '../components/layout_page';
import NavLeft from '../components/nav_left';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import {
  getHeroPhrase,
  getHeroRegionPhrase,
  getRegionName,
} from '../helpers/index.jsx';

import bilxtraSvg from '../images/logos/bilxtra.svg';
import skintificSvg from '../images/logos/skintific.svg';
import campDavidSvg from '../images/logos/campdavid.svg';
import picklesSvg from '../images/logos/pickles.svg';
import tesoriSvg from '../images/logos/tesori.svg';
import bedtimeSvg from '../images/logos/bedtime.svg';

import campDavidblackImg from '../images/CampDavid-black.svg';
import madebyberitnordstrandImg from '../images/madebyberitnordstrand.png';
import smartlapperImg from '../images/smartlapper.png';
import purNorskImg from '../images/pur-norsk.svg';
import jumpkingImg from '../images/jumpking.png';

import dejanCeo from '../images/dejan-ceo.jpeg';
import pricingPlans from '../images/pricing-plans.jpeg';

export default function Home() {
  return (
    <LayoutPage>
      <Helmet>
        <title>
          StuntCoders — home of customer-centric eCommerce developers
        </title>
      </Helmet>

      <div className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
            <svg
              className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <NavLeft />

            <main className="mx-auto mt-10 max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                  <span className="mr-1">eCommerce agency</span>
                  <br className="xl:hidden" />
                  {` `}
                  <span className="text-indigo-600">{getHeroPhrase()}</span>
                </h2>
                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  Our dedicated team saves frustration, time, worries, and a lot
                  of money for SMB eCommerce. That is why customers from{' '}
                  {getHeroRegionPhrase()} have been with us for{' '}
                  <strong>10+ years</strong>.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      className="focus:shadow-outline-indigo flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-indigo-500 focus:border-indigo-700 focus:outline-none md:py-4 md:px-10 md:text-lg"
                      to="/contact/"
                    >
                      Get started
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      className="focus:shadow-outline-indigo flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium leading-6 text-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-50 hover:text-indigo-600 focus:border-indigo-300 focus:outline-none md:py-4 md:px-10 md:text-lg"
                      to="/testimonials/"
                    >
                      What did our customers say?
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <StaticImage
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
            src="../images/marko-og-dejan.jpg"
            loading="auto"
            alt="Marko and Dejan coding"
          />
        </div>
      </div>

      <div className="overflow-hidden bg-gray-50 py-16 lg:py-24">
        <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
          <svg
            className="absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block"
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
            <h3 className="text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              A better way to manage your eCommerce
            </h3>
            <p className="mx-auto mt-4 max-w-3xl text-center text-xl leading-7 text-gray-500">
              Reach our team via phone, real-time chat, Slack, Skype, Zoom, or
              any other channel that suits you best.
            </p>
          </div>
          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="relative">
              <h4 className="text-2xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-3xl sm:leading-9">
                We're Here for You
              </h4>
              <p className="mt-3 text-lg leading-7 text-gray-500">
                Whether you need a suggestion on which ERP API is the best, how
                to set up your email, track deliverability issues, debug contact
                forms, perform backups and updates, or mitigate DDoS or hacker
                attacks, we are at your disposal.
              </p>
              <ul className="mt-10">
                <li>
                  <div className="flex">
                    <div className="flex-shrink-0">
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
                    </div>
                    <div className="ml-4">
                      <h5 className="text-lg font-medium leading-6 text-gray-900">
                        We reply within 90 minutes
                      </h5>
                      <p className="mt-2 text-base leading-6 text-gray-500">
                        No need to wait 24 hours to get your response during
                        work hours, and are available via phone call in a case
                        of emergency.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-10">
                  <div className="flex">
                    <div className="flex-shrink-0">
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
                            d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="text-lg font-medium leading-6 text-gray-900">
                        White glove service
                      </h5>
                      <p className="mt-2 text-base leading-6 text-gray-500">
                        We know your time is precious. And we understand you
                        have no time to place your products, create coupons,
                        enter the latest "about us" page? Shoot us an email, and
                        we'll let you know once it's been handled.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-10">
                  <div className="flex">
                    <div className="flex-shrink-0">
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
                            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="text-lg font-medium leading-6 text-gray-900">
                        Transparent pricing
                      </h5>
                      <p className="mt-2 text-base leading-6 text-gray-500">
                        Our price policy is simple, transparent, and fair.
                        Choose the best plan that fits your current needs and
                        feel free to change it as you go – we will adapt.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative -mx-4 mt-10 lg:mt-0">
              <svg
                className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
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
                className="relative mx-auto"
                width={490}
                src="../images/slack-min.png"
                loading="auto"
                alt="Slack communication"
              />
            </div>
          </div>
          <svg
            className="absolute right-full hidden translate-x-1/2 translate-y-12 transform lg:block"
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
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
              <div className="lg:col-start-2">
                <h4 className="text-2xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-3xl sm:leading-9">
                  Always be in the loop
                </h4>
                <p className="mt-3 text-lg leading-7 text-gray-500">
                  Already sent us an email? Now you can truly relax. We will
                  keep you in the loop until the task, small or big, has been
                  completed and your request has been fulfilled.
                </p>
                <ul className="mt-10">
                  <li>
                    <div className="flex">
                      <div className="flex-shrink-0">
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
                              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h5 className="text-lg font-medium leading-6 text-gray-900">
                          Nothing gets lost. Ever.
                        </h5>
                        <p className="mt-2 text-base leading-6 text-gray-500">
                          We know it applies to the Universe. But also to us. If
                          somehow our team didn’t reply within the time frame,
                          our internal system tools will nudge, ping, and
                          disturb every one of us so we can't lose track of your
                          tasks.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-10">
                    <div className="flex">
                      <div className="flex-shrink-0">
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
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h5 className="text-lg font-medium leading-6 text-gray-900">
                          Regular emails, transparent statuses
                        </h5>
                        <p className="mt-2 text-base leading-6 text-gray-500">
                          This means we will always be there to keep you
                          informed about the status of your task. When status
                          changes, our systems will notify you. If it stays open
                          for too long, you will be informed.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0">
                <svg
                  className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
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
                  className="relative mx-auto"
                  width={490}
                  src="../images/status-updates-min.png"
                  alt="StuntCoders status updates"
                  loading="auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-screen-xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold leading-9 text-gray-900 sm:text-4xl sm:leading-10">
                Trusted by {getRegionName()} companies
              </h2>
              <p className="mt-3 max-w-3xl text-lg leading-7 text-gray-500">
                You may know some of them, but do you know we've been supporting
                some of these businesses for 10+ years?
              </p>
              <div className="mt-8 sm:flex">
                <div className="rounded-md shadow">
                  <Link
                    className="focus:shadow-outline flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-indigo-500 focus:outline-none"
                    to="/contact/"
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
              <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <img
                  className="max-h-12"
                  src={bilxtraSvg}
                  alt="BilXtra web development"
                  loading="auto"
                />
              </div>
              <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <img
                  className="max-h-12"
                  src={skintificSvg}
                  alt="Skintific web development"
                  loading="auto"
                />
              </div>
              <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <img
                  className="max-h-12"
                  src={campDavidSvg}
                  alt="CampDavid web development"
                  loading="auto"
                />
              </div>
              <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <img
                  className="max-h-12"
                  src={picklesSvg}
                  alt="Pickles web development"
                  loading="auto"
                />
              </div>
              <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <img
                  className="max-h-12"
                  src={tesoriSvg}
                  alt="Tesori developers"
                  loading="auto"
                />
              </div>
              <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <img
                  className="max-h-12"
                  src={bedtimeSvg}
                  alt="Bedtime 9+ years developers"
                  loading="auto"
                />
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
                src="../images/terje.jpg"
                alt="Terje from Tesori"
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
                        src="../images/terje.jpg"
                        alt="Terje from Tesori testimonial"
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

      <a name="pricing" />
      <div className="relative bg-gray-900">
        <div className="absolute inset-x-0 bottom-0 h-80 xl:top-0 xl:h-full">
          <div className="h-full w-full xl:grid xl:grid-cols-2">
            <div className="h-full xl:relative xl:col-start-2">
              <img
                className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                src={pricingPlans}
                alt="Pricing plans"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
          <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
            <h2 className="text-sm font-semibold uppercase tracking-wide" />
            <p className="mt-3 text-3xl font-extrabold text-white">
              Fair. Transparent. Pricing.
            </p>
            <p className="mt-5 text-lg text-gray-300">
              Choose the best plan that fits your needs, or switch as you go.
              Because, your needs change over time, and your support should
              adapt.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
              <div className="mt-8 inline-flex rounded-md shadow">
                <Link
                  to="/pricing/"
                  className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                >
                  See pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-screen-xl py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src={campDavidblackImg}
                alt="StuntCoders client CampDavid"
                loading="auto"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src={madebyberitnordstrandImg}
                alt="BERIT"
                loading="auto"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src={smartlapperImg}
                alt="Client Smartlapper"
                loading="auto"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
              <img
                className="h-12"
                src={purNorskImg}
                alt="PurNorsk Client of StuntCoders"
                loading="auto"
              />
            </div>
            <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
              <img
                className="h-12"
                src={jumpkingImg}
                alt="JumpKing client of StuntCoders"
                loading="auto"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="overflow-hidden bg-gray-50 py-12 md:py-20 lg:py-24">
        <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <svg
            className="absolute top-full right-full translate-x-1/3 -translate-y-1/4 transform lg:translate-x-1/2 xl:-translate-y-1/2"
            width="404"
            height="404"
            fill="none"
            viewBox="0 0 404 404"
            role="img"
            aria-labelledby="svg-workcation"
          >
            <title id="svg-workcation">JumpKing</title>
            <defs>
              <pattern
                id="ad119f34-7694-4c31-947f-5c9d249b21f3"
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
              height="404"
              fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)"
            />
          </svg>
          <div className="relative">
            <svg className="mx-auto h-10" fill="none" viewBox="0 0 850 566">
              <path
                fill="#5850EC"
                d="M569.15,445.3c-95.89,13.58-191.62,13.49-287.79-0.19c0,12.82,0,25.21,0,37.6c0,2.55-0.1,5.1,0.02,7.65
                                      c0.35,7.68-2.18,13.88-9.36,17.32c-7.71,3.69-15.01,2.24-21.28-3.28c-10.99-9.67-21.77-19.58-32.63-29.39
                                      c-2.13-1.92-4.55-3.6-6.34-5.8c-6.89-8.5-16.07-10.83-26.52-11.41c-13.65-0.76-27.27-2.4-40.87-3.92
                                      c-15.83-1.77-23.16-10.14-23.2-25.95c-0.04-14.97-0.09-29.95-0.23-44.92c-0.02-1.86-0.21-3.88-0.96-5.53
                                      c-5.77-12.72-2.72-23.95,5.77-34.13c9.82-11.76,22.75-19.32,36.35-25.74c31.76-15.01,65.56-23.34,99.89-29.67
                                      c39.66-7.31,79.7-11.21,119.99-12.86c46.35-1.9,92.65-1.03,138.82,3.37c45.7,4.35,90.91,11.52,134.75,25.69
                                      c20.64,6.67,40.9,14.47,58.23,27.89c6.3,4.87,11.95,11.06,16.49,17.62c6.15,8.88,5.84,18.82,1.22,28.64
                                      c-0.97,2.06-1.55,4.5-1.57,6.78c-0.14,14.66-0.05,29.31-0.08,43.97c-0.03,14.56-7.19,23.05-21.67,24.76
                                      c-16.75,1.97-33.55,3.51-50.36,5.01c-4.78,0.43-8.75,1.75-12.4,5.11c-14.64,13.48-29.54,26.67-44.28,40.04
                                      c-5.5,4.99-11.82,6.87-18.96,5.02c-8.82-2.29-12.99-9.95-12.69-20.44c0.39-13.67,0.06-27.36,0.02-41.04
                                      C569.52,446.89,569.33,446.29,569.15,445.3z M425.48,304.65c-11.62,0-23.24-0.25-34.85,0.05c-40.64,1.04-81.02,4.81-120.94,12.69
                                      c-22.19,4.38-44.13,9.78-64.48,20.07c-7.71,3.9-15,8.48-19.95,15.89c-4.78,7.15-4.83,14.85,0.29,21.81c2.23,3.03,4.8,6.3,7.99,8.07
                                      c9.96,5.53,19.91,11.47,30.56,15.32c34.04,12.29,69.68,17.39,105.48,21.03c39.31,3.99,78.74,5.27,118.27,4.34
                                      c36.81-0.87,73.46-3.39,109.85-9.01c26.91-4.16,53.58-9.52,78.88-20.05c9.43-3.93,18.54-8.53,25.72-16.08
                                      c8.83-9.27,9.24-20.49-0.1-29.17c-5.96-5.53-13.05-10.31-20.4-13.8c-25.83-12.27-53.68-17.7-81.67-22.17
                                      C515.54,306.53,470.59,304,425.48,304.65z M135.44,396.24c0,10.64-0.01,20.63,0,30.62c0.01,9.58,2.36,12.08,11.82,12.97
                                      c13.94,1.31,27.84,3.45,41.8,3.9c13.36,0.43,23.43,5.93,32.73,15.03c12.16,11.89,25.13,22.97,37.88,34.25
                                      c1.36,1.2,3.95,2.27,5.38,1.76c1.16-0.41,1.97-3.29,2.01-5.09c0.19-9.39,0.09-18.79,0.09-28.18c0-6.19,0-12.38,0-18.72
                                      C221.1,433.4,175.49,423.83,135.44,396.24z M715.56,396.89c-40.16,27.27-85.65,36.71-131.35,46c-0.13,1.17-0.35,2.25-0.35,3.34
                                      c-0.02,14.64-0.06,29.27,0.05,43.91c0.01,1.6,0.57,4.14,1.58,4.56c1.39,0.58,3.55-0.19,5.18-0.87c1.26-0.52,2.22-1.77,3.29-2.72
                                      c14.79-13.3,29.42-26.8,44.5-39.78c3.41-2.94,8.21-5.15,12.66-5.82c11.94-1.81,24.04-2.54,36.06-3.82
                                      c7.27-0.77,14.53-1.65,21.76-2.73c3.87-0.58,6.5-3.08,6.56-7.09C715.68,420.42,715.56,408.98,715.56,396.89z"
              />
              <path
                fill="#5850EC"
                d="M230.88,273.58c0-72.19,0-143.83,0-215.84c17.95,0,35.83,0,54.05,0c2.79,22.51,5.56,44.87,8.33,67.23
                                      c0.41,0.04,0.82,0.08,1.22,0.12c3.29-22.44,6.58-44.89,9.88-67.34c18.04,0,35.66,0,53.53,0c0,66.13,0,131.99,0,198.23
                                      c-12.88,1.16-25.5,2.3-38.74,3.49c0-27.95,0-55.27,0-82.59c-0.37-0.03-0.73-0.05-1.1-0.08c-4.27,27.83-8.53,55.66-12.84,83.73
                                      c-7.21,0.78-14.13,1.52-21.8,2.34c-4.87-30.69-9.72-61.22-14.57-91.76c-0.26,0-0.52,0-0.78,0c0,31.58,0,63.15,0,95.12
                                      C255.43,268.73,243.35,271.11,230.88,273.58z"
              />
              <path
                fill="#5850EC"
                d="M630.74,57.73c14.64,0,28.75,0,43.38,0c4.76,24.7,9.55,49.51,14.33,74.32c0.39-0.05,0.77-0.11,1.16-0.16
                                      c0-24.61,0-49.23,0-74.13c12.4,0,24.45,0,36.87,0c0,84.88,0,169.85,0,255.44c-8.38-3.94-16.44-8.45-25.02-11.54
                                      c-7.77-2.8-10.46-7.7-11.95-15.49c-6.26-32.81-13.26-65.47-20.02-98.18c-0.12-0.59-0.48-1.13-1.51-1.64c0,33.39,0,66.78,0,100.76
                                      c-2.85-0.61-5-0.97-7.09-1.53c-8.45-2.24-16.84-4.73-25.35-6.71c-3.83-0.89-4.92-2.54-4.91-6.46c0.14-54.47,0.1-108.95,0.1-163.42
                                      c0-15.29,0-30.58,0-45.87C630.74,61.4,630.74,59.68,630.74,57.73z"
              />
              <path
                fill="#5850EC"
                d="M785.11,186.61c-1.86-0.42-3.53-0.79-5.35-1.2c0-10.01,0-19.86,0-30.13c14.91,0,29.78,0,45.38,0
                                      c0,1.6,0,3.29,0,4.98c0,48.42,0,96.85-0.01,145.27c0,1.43,0.04,2.88-0.21,4.28c-2.82,16.19-6.1,18.55-22.52,18.19
                                      c-16.4-0.35-32.81-0.08-49.22-0.1c-8.13-0.01-11.79-2.13-14.34-9.88c-1.67-5.05-2.81-10.54-2.82-15.84
                                      c-0.24-72.31-0.21-144.63-0.36-216.94c-0.02-9.78,2.5-18.36,10.47-24.41c2.46-1.87,6.02-3.16,9.1-3.21
                                      c17.2-0.3,34.4-0.15,51.61-0.15c8.66,0,16.85,6.45,17.13,15.14c0.56,17.62,0.17,35.28,0.17,53.24c-13.15,0-26.12,0-39.66,0
                                      c0-8.48,0.06-16.87-0.03-25.26c-0.03-3.2,0.88-7.18-4.02-7.81c-3.9-0.5-6.71,2.54-7.28,7.65c-0.23,2.05-0.25,4.13-0.25,6.2
                                      c-0.01,60.37-0.01,120.74-0.01,181.11c0,0.48,0,0.96,0,1.43c0.07,5.86,2.6,9.22,6.82,9.04c4.01-0.17,5.6-2.64,5.6-8.86
                                      c0.01-32.81,0.01-65.63,0-98.44C785.29,189.51,785.18,188.1,785.11,186.61z"
              />
              <path
                fill="#5850EC"
                d="M129.07,57.73c13.77,0,27.25,0,41.52,0c0,1.96,0,3.95,0,5.93c0,59.88,0,119.77,0.02,179.65
                                      c0,2.06-0.17,4.29,0.56,6.11c0.73,1.81,2.5,3.21,3.81,4.79c1.75-1.62,4.25-2.94,5.05-4.93c1.01-2.54,0.82-5.63,0.82-8.48
                                      c0.04-58.93,0.03-117.86,0.03-176.78c0-2.02,0-4.05,0-6.3c13.61,0,26.61,0,40.16,0c0.07,1.66,0.21,3.33,0.21,5.01
                                      c0.01,64.98,0.02,129.96,0,194.94c0,14.55-3.69,19.6-17.36,24.16c-14.77,4.93-29.52,9.9-44.27,14.89
                                      c-14.68,4.96-26.61-1.72-29.64-16.79c-0.69-3.41-1.09-6.94-1.09-10.42c-0.06-68.96-0.05-137.92-0.04-206.88
                                      C128.84,61.08,128.98,59.52,129.07,57.73z"
              />
              <path
                fill="#5850EC"
                d="M32.02,166.88c12.57,0,24.61,0,37.14,0c0.11,2.2,0.3,4.2,0.3,6.2c0.02,36.64,0.01,73.27,0.01,109.91
                                      c0,1.43-0.04,2.87,0.03,4.3c0.15,3,1.11,5.26,4.7,5.37c3.63,0.11,4.7-2.02,4.83-5.11c0.05-1.27,0.07-2.55,0.07-3.82
                                      c0-62.76,0-125.52,0-188.28c0-6.84-0.01-6.85-6.85-6.87c-6.51-0.01-13.02,0-19.99,0c0-10.4,0-20.46,0-30.82
                                      c22.25,0,44.47,0,67.33,0c0,1.77,0,3.47,0,5.17c0,81.08,0,162.16,0,243.24c0,15.29-7.16,22.37-22.56,22.37
                                      c-14.18,0-28.37,0.38-42.52-0.2c-5.17-0.21-10.51-2.14-15.29-4.34c-5.29-2.43-7.54-7.3-7.53-13.32
                                      c0.07-46.51,0.04-93.03,0.05-139.54C31.74,169.89,31.9,168.63,32.02,166.88z"
              />
              <path
                fill="#5850EC"
                d="M471.26,57.73c14.27,0,28.22,0,42.55,0c0,17.55,0,34.85,0,52.16c0.46,0.08,0.92,0.15,1.38,0.23
                                      c3.69-17.38,7.38-34.76,11.11-52.37c13.9,0,27.69,0,42.08,0c-0.49,2.33-0.83,4.6-1.44,6.79c-6.97,25.44-14.09,50.84-20.87,76.33
                                      c-0.93,3.48-0.93,7.58-0.11,11.1c8.6,36.84,17.46,73.63,26.25,110.43c0.22,0.92,0.4,1.85,0.79,3.63
                                      c-7.41-0.85-14.44-1.6-21.46-2.47c-4.73-0.58-9.43-1.42-14.17-1.93c-3.19-0.34-4.84-1.45-5.67-4.97
                                      c-5.1-21.48-10.54-42.88-15.88-64.3c-0.37-1.5-0.84-2.98-2.22-4.37c0,23.52,0,47.05,0,70.9c-14.46-1.09-28.22-2.13-42.35-3.19
                                      C471.26,189.73,471.26,123.91,471.26,57.73z"
              />
              <path
                fill="#5850EC"
                d="M407.91,254.6c-13.8,0-26.79,0-40.2,0c0-65.35,0-130.91,0-197.13c1.68,0,3.37,0,5.06,0
                                      c22.94,0,45.89,0.21,68.83-0.12c7.39-0.1,12.54,3.05,15.4,9.1c2.45,5.18,4.53,11.09,4.64,16.72c0.48,25.8,0.24,51.62,0.2,77.43
                                      c-0.01,7.49-1.6,14.55-6.54,20.49c-2.9,3.49-6.48,5.39-11.18,5.36c-10.03-0.06-20.07,0.35-30.1,0.09
                                      c-4.68-0.13-6.32,0.96-6.23,6.01c0.33,18.48,0.13,36.96,0.13,55.44C407.91,249.88,407.91,251.76,407.91,254.6z M408.26,90.02
                                      c0,21.51,0,42.58,0,63.6c8.85,1.09,11.72-0.35,11.78-6.38c0.16-17.02,0.06-34.04,0.06-51.05c0-3.86-2-5.89-5.78-6.14
                                      C412.43,89.92,410.54,90.02,408.26,90.02z"
              />
              <path
                fill="#5850EC"
                d="M580.84,57.66c13.61,0,26.47,0,39.62,0c0,72.39,0,144.59,0,217.14c-12.49-2.45-24.81-4.8-37.08-7.39
                                      c-1.02-0.22-1.79-1.99-2.49-3.16c-0.28-0.47-0.05-1.25-0.05-1.88c0-66.72,0-133.43,0-200.15
                                      C580.84,60.81,580.84,59.41,580.84,57.66z"
              />
              <path
                fill="#5850EC"
                d="M424.97,311.66c47.66,0.05,95.13,2.94,142.19,10.73c25.74,4.26,51.35,9.41,74.97,21.21
                                      c4.78,2.39,9.38,5.52,13.3,9.14c7.87,7.24,7.75,15.3,0.07,22.83c-7.21,7.05-16.3,10.99-25.55,14.5
                                      c-24.84,9.44-50.81,14.21-76.96,17.94c-47.06,6.71-94.41,9.27-141.9,8.41c-54.8-1-109.36-4.87-162.87-17.87
                                      c-15.32-3.72-30.44-8.21-44.11-16.37c-3.65-2.18-7.13-4.88-10.07-7.93c-6.29-6.53-6.16-13.69-0.04-20.37
                                      c6.41-7,14.76-10.95,23.35-14.42c25.12-10.14,51.53-15.1,78.16-18.96C338.43,314.27,381.62,311.66,424.97,311.66z M355.33,362.48
                                      c0.3-0.04,0.6-0.08,0.9-0.12c2.24,5.39,4.39,10.82,6.78,16.15c0.65,1.44,2.02,2.56,3.06,3.83c1.05-1.24,2.45-2.33,3.09-3.76
                                      c2.45-5.41,4.66-10.93,6.96-16.41c1.42,4.81,2.14,9.36,2.71,13.92c0.88,7.05,1.69,7.6,9.13,5.36c-1.67-10.44-3.34-20.95-5.03-31.45
                                      c-0.32-1.97-0.02-4.25-3.21-4.28c-2.72-0.03-4.77,0.12-5.92,3.29c-2.19,6.01-4.88,11.85-7.68,18.53
                                      c-2.88-6.89-5.58-12.82-7.82-18.93c-1.14-3.11-3.42-3.35-5.66-2.69c-1.33,0.39-2.78,2.18-3.16,3.6c-0.96,3.68-1.37,7.5-1.95,11.27
                                      c-1.09,7-2.14,14.01-3.2,21c8.21,1.32,8.18,1.32,9.13-6.1C354.01,371.29,354.69,366.89,355.33,362.48z M512.87,346.41
                                      c0,11.08-0.08,22.33,0.05,33.57c0.04,3.72,3.2,2.1,5.1,2.38c2.34,0.35,3.49-0.63,3.44-3.19c-0.11-6.27-0.04-12.55-0.04-20.23
                                      c6.13,7.24,11.57,13.18,16.42,19.57c2.86,3.77,5.98,4.64,10.38,3.37c0-11.94,0-23.78,0-35.87c-2.76,0-5.24,0-8.56,0
                                      c0,7.29,0,14.41,0,22.88c-6.07-7.2-11.29-12.99-16.02-19.16C520.84,346.06,517.72,344.85,512.87,346.41z M464.39,364.24
                                      c0.01-11.32-8.11-19.24-19.73-19.24c-11.64,0-19.84,7.9-19.9,19.17c-0.06,10.87,8.71,19.26,20.04,19.17
                                      C455.96,383.26,464.38,375.04,464.39,364.24z M272.18,345.98c0,12.21,0,24.15,0,36.05c8.34,0.9,8.34,0.9,8.35-6.81
                                      c0-1.76,0-3.52,0-5.28c2.65,2.26,4.7,4.39,5.83,6.94c2.72,6.13,7.48,6.12,13.67,5.06c-3.67-4.99-7-9.52-10.41-14.16
                                      c0.72-0.5,1.2-0.87,1.72-1.19c5.1-3.13,6.74-6.79,5.53-12.39c-0.99-4.57-4.57-7.8-9.88-8.16
                                      C282.14,345.72,277.24,345.98,272.18,345.98z M303.68,381.94c8.16,0.91,8.46,1.01,9.64-2.48c1.13-3.37,3.14-4.35,6.42-4.03
                                      c2.21,0.22,4.48-0.17,6.66,0.14c1.18,0.17,3.03,1.08,3.22,1.95c1.35,6.27,5.69,5.06,10.62,4.45c-4.67-11.81-9.11-23.31-13.81-34.71
                                      c-1.04-2.51-7.75-2.21-8.82,0.36C312.92,358.88,308.42,370.21,303.68,381.94z M403.02,370.09c3.05-0.3,5.58-0.42,8.08-0.81
                                      c5.83-0.9,9.16-4.67,9.65-10.72c0.45-5.52-2.35-10.79-7.61-11.77c-5.93-1.11-12.11-0.9-18.31-1.28c0,12.87,0,24.59,0,36.59
                                      c2.76,0,5.2,0,8.18,0C403.02,377.96,403.02,374.05,403.02,370.09z M583.15,377.35c5.41,5.83,12.33,7.45,18.85,4.71
                                      c4.36-1.83,7.2-6.3,7.12-11.47c-0.07-4.66-2.48-7.73-6.78-9.37c-2.07-0.79-4.32-1.31-6.16-2.48c-1.24-0.79-1.89-2.49-2.8-3.79
                                      c1.49-0.93,2.94-2.56,4.46-2.63c2.06-0.09,4.18,1.02,6.48,1.67c1.01-1.76,2.01-3.5,3.04-5.27c-4.27-3.58-8.91-4.27-13.76-3.48
                                      c-5.03,0.82-8.68,5.2-9.04,10.31c-0.36,5.07,1.87,8.21,7.31,10.29c1.63,0.62,3.58,0.83,4.84,1.88c1.48,1.24,2.37,3.19,3.52,4.83
                                      c-1.94,1.03-3.92,2.96-5.8,2.86c-2.48-0.13-4.88-1.85-7.65-3.03C585.71,373.85,584.51,375.49,583.15,377.35z M557.52,346
                                      c0,12.19,0,24.14,0,36.4c5.23,0,9.99,0.01,14.75,0c6.09-0.01,6.38-0.41,4.74-7.1c-3.62,0-7.36,0-11.12,0c0-2.95,0-5.39,0-8.32
                                      c3.92,0,7.5,0,10.96,0c0-2.5,0-4.49,0-7.02c-3.91,0-7.48,0-11.1,0c0-2.57,0-4.58,0-7.22c4.07,0,7.94,0,11.73,0
                                      c0-2.61,0-4.59,0-6.74C570.66,346,564.2,346,557.52,346z M266.87,352.88c0-2.4,0-4.61,0-6.8c-8.07,0-15.79,0-23.51,0
                                      c0,2.43,0,4.52,0,6.64c2.6,0.13,4.77,0.23,7.55,0.37c0,9.83,0,19.42,0,28.91c8.58,0.92,8.58,0.92,8.59-6.8c0-2.22,0-4.45,0-6.67
                                      c0-5.17,0-10.33,0-15.65C262.37,352.88,264.43,352.88,266.87,352.88z M471.34,382.02c6.84,0,13.1,0,19.27,0c0-2.37,0-4.35,0-6.62
                                      c-2.08,0-3.85-0.22-5.54,0.04c-4.54,0.69-5.63-1.32-5.46-5.57c0.31-7.87,0.09-15.76,0.09-23.85c-3.1,0-5.56,0-8.36,0
                                      C471.34,358.09,471.34,369.91,471.34,382.02z M495.65,346c0,11.59-0.07,22.55,0.12,33.51c0.02,0.97,1.6,2.44,2.72,2.74
                                      c1.71,0.47,3.65,0.12,5.55,0.12c0-12.55,0-24.4,0-36.38C501.23,346,498.75,346,495.65,346z"
              />
              <path
                fill="#5850EC"
                d="M455.69,364.26c-0.05,6.79-4.69,11.29-11.47,11.12c-6.42-0.16-10.8-4.82-10.72-11.43
                                      c0.07-6.6,4.54-11.08,11.05-11.08C451.43,352.89,455.75,357.3,455.69,364.26z"
              />
              <path
                fill="#5850EC"
                d="M280.78,363.25c0-4.25,0-7.2,0-11.45c2.75,1.09,5.31,1.5,6.86,2.97c0.9,0.86,0.91,4.15,0.02,5.08
                                      C286.15,361.41,283.59,361.96,280.78,363.25z"
              />
              <path
                fill="#5850EC"
                d="M322.07,356.75c1.63,4.49,2.94,8.12,4.36,12.01c-2.99,0-5.51,0-8.71,0
                                      C319.13,364.85,320.44,361.25,322.07,356.75z"
              />
              <path
                fill="#5850EC"
                d="M403.21,363.72c0-4.63,0-7.45,0-11.57c2.88,0.95,5.66,1.33,7.69,2.77c0.93,0.66,1.15,4.32,0.33,5.02
                                      C409.31,361.57,406.57,362.24,403.21,363.72z"
              />
            </svg>
            <blockquote className="mt-8">
              <div className="mx-auto max-w-3xl text-center text-2xl font-medium leading-9 text-gray-900">
                <p>
                  “A big thank you to everyone at StuntCoders for making my work
                  life so much easier! Thanks to your expertise, I now save
                  hours every day. I also appreciate that you always get back to
                  me immediately with any questions or concerns that I may have.
                  Your professionalism and dedication outshine any other IT
                  company that I have previously worked with. I highly recommend
                  StuntCoders.”
                </p>
              </div>
              <footer className="mt-8">
                <div className="md:flex md:items-center md:justify-center">
                  <div className="md:flex-shrink-0">
                    <StaticImage
                      className="mx-auto h-10 w-10 rounded-full"
                      src="../images/christina.png"
                      alt="Christina from JumpKing"
                      loading="auto"
                    />
                  </div>
                  <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                    <div className="text-base font-medium leading-6 text-gray-900">
                      Christina Chetkowski
                    </div>
                    <svg
                      className="mx-1 hidden h-5 w-5 text-indigo-600 md:block"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11 0h3L9 20H6l5-20z" />
                    </svg>
                    <div className="text-base font-medium leading-6 text-gray-500">
                      CEO, JumpKing
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      <div className="">
        <div className="relative bg-gray-800 pb-32">
          <div className="absolute inset-0">
            <StaticImage
              className="h-full w-full object-cover"
              src="../images/working-class-hero.jpeg"
              alt="Working class hero is something to be"
            />
            <div
              className="absolute inset-0 bg-gray-800 mix-blend-multiply"
              aria-hidden="true"
            />
          </div>
          <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-5xl">
              We are not Jacks of all trades.
              <br />
              We are Masters of eCommerce.
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-gray-300">
              We have been developing and implementing eCommerce solutions for
              over a decade and have plenty to offer! Since 2010. We have
              created some of the finest websites in Europe and solved some of
              the most complex issues around, and we are offering three
              different models of collaboration to fit your business goals best.
            </p>
          </div>
        </div>

        <section
          className="relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-4 sm:px-6 lg:px-8"
          aria-labelledby="contact-heading"
        >
          <h2 className="sr-only" id="contact-heading">
            Contact us
          </h2>
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
            <div className="flex flex-col rounded-2xl bg-white shadow-xl">
              <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-indigo-600 p-5 shadow-lg">
                  <svg
                    className="h-6 w-6 text-white"
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
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900">
                  Tiny Business
                </h3>
                <p className="mt-4 text-base text-gray-500">
                  We believe that the service we offer should be fair,
                  reasonably priced, and cover most of the cases you will ever
                  need. We believe that now, more than ever, it is important to
                  have a human touch that helps you navigate through technical
                  challenges.
                </p>
              </div>
            </div>

            <div className="flex flex-col rounded-2xl bg-white shadow-xl">
              <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-indigo-600 p-5 shadow-lg">
                  <svg
                    className="h-6 w-6 text-white"
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900">
                  Micro-Teams
                </h3>
                <p className="mt-4 text-base text-gray-500">
                  You own the business vision - we can take on the project
                  ownership. With the Micro-Team model, the StuntCoders team
                  handles every stage of development - from conceptualization to
                  delivery - and is solely responsible for the team performance.
                </p>
              </div>
            </div>

            <div className="flex flex-col rounded-2xl bg-white shadow-xl">
              <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-indigo-600 p-5 shadow-lg">
                  <svg
                    className="h-6 w-6 text-white"
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900">
                  Accelerated Development
                </h3>
                <p className="mt-4 text-base text-gray-500">
                  We help you grow your project with tailor-made individual team
                  members who have the right level of expertise and work for you
                  remotely and under your direct management. You avoid all the
                  trouble of administration and infrastructure while at the same
                  time significantly reducing your labor costs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-screen-xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            <span>Ready to dive in?</span>
            <br />
            <span className="text-indigo-600">We'll get you covered.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                className="focus:shadow-outline inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-indigo-500 focus:outline-none"
                to="/contact/"
              >
                Get in touch
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                className="focus:shadow-outline inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium leading-6 text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500 focus:outline-none"
                to="/testimonials/"
              >
                What did our customers say?
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-indigo-800">
        <div className="mx-auto max-w-screen-xl md:grid md:grid-cols-2 md:px-6 lg:px-8">
          <div className="py-12 px-4 sm:px-6 md:flex md:flex-col md:border-r md:border-indigo-900 md:py-16 md:pl-0 md:pr-10 lg:pr-16">
            <div className="md:flex-shrink-0">
              <svg
                height="60"
                viewBox="0 0 402 195"
                role="img"
                aria-labelledby="svg-naturlig"
                fill="#B4C6FC"
              >
                <g
                  transform="translate(0.000000,195.000000) scale(0.100000,-0.100000)"
                  stroke="none"
                >
                  <path
                    d="M2845 1902 c-21 -11 -30 -23 -27 -35 5 -23 -25 -70 -40 -61 -7 4 -7
                         9 1 14 17 10 2 40 -20 40 -14 0 -19 7 -19 28 0 21 -2 24 -10 12 -5 -8 -10 -27
                         -10 -41 0 -15 -6 -32 -14 -38 -12 -10 -17 -8 -27 11 -7 13 -13 30 -14 38 0 10
                         -10 15 -30 15 -27 0 -30 -3 -31 -35 -1 -71 -4 -90 -15 -90 -8 0 -10 13 -6 37
                         6 35 -5 63 -24 63 -5 0 -9 -7 -9 -15 0 -8 -8 -15 -18 -15 -11 0 -24 -11 -30
                         -25 -6 -14 -20 -25 -30 -25 -19 0 -59 -36 -55 -49 6 -14 -9 -41 -23 -41 -11 0
                         -13 6 -9 19 3 11 2 22 -4 25 -12 8 -69 -58 -77 -89 -5 -19 -9 -23 -19 -15 -14
                         12 -45 3 -46 -14 -2 -39 -9 -69 -19 -81 -9 -10 -7 -14 9 -17 19 -3 20 -5 7
                         -30 -13 -25 -13 -27 7 -30 39 -6 31 -28 -10 -25 -34 2 -38 0 -38 -23 0 -14 -8
                         -34 -17 -44 -20 -22 -23 -36 -7 -36 6 0 9 -12 7 -27 -3 -24 2 -28 41 -40 50
                         -14 59 -12 36 10 -24 25 -18 35 27 39 51 5 95 -14 110 -48 12 -26 15 -27 68
                         -28 29 -1 35 -5 36 -24 1 -13 7 -29 14 -35 10 -10 12 -8 7 6 -9 25 46 23 89
                         -4 27 -16 34 -27 34 -52 0 -18 7 -45 15 -61 19 -36 12 -46 -12 -17 -23 28 -78
                         40 -140 31 -27 -5 -65 -5 -84 0 l-34 8 40 1 c56 2 72 14 40 31 -20 11 -29 11
                         -49 1 -13 -8 -28 -11 -33 -8 -5 3 -26 2 -46 -3 -29 -6 -37 -5 -37 6 0 10 -10
                         12 -45 7 -29 -4 -50 -1 -60 7 -8 7 -23 9 -32 5 -16 -6 -15 -8 7 -20 14 -8 32
                         -14 40 -15 8 0 21 -9 28 -20 14 -22 14 -22 -46 -11 -27 5 -40 5 -34 -1 19 -19
                         292 -30 382 -14 34 5 50 4 65 -8 19 -15 19 -15 -7 -16 -15 0 -30 -5 -34 -11
                         -4 -7 -22 -9 -46 -6 -39 5 -39 5 -18 -10 21 -15 27 -14 71 1 26 10 52 15 58
                         12 17 -11 23 -63 11 -103 -6 -21 -15 -86 -20 -145 -8 -98 -12 -112 -49 -178
                         -23 -40 -41 -78 -41 -86 0 -8 -5 -14 -10 -14 -6 0 -26 -16 -45 -35 -23 -22
                         -41 -32 -53 -29 -14 5 -15 4 -2 -5 13 -10 13 -12 0 -21 -8 -5 -23 -10 -32 -10
                         -10 0 -18 -5 -18 -10 0 -6 14 -4 35 4 19 8 37 11 40 6 7 -11 -4 -40 -23 -63
                         -8 -9 -12 -20 -9 -23 10 -10 47 59 47 89 0 30 16 37 23 10 4 -13 5 -12 6 5 1
                         24 22 38 46 28 21 -8 8 -32 -31 -57 -19 -11 -34 -29 -34 -39 0 -10 -6 -25 -13
                         -32 -7 -7 -18 -25 -24 -40 -8 -17 -20 -28 -33 -28 -11 0 -20 -4 -20 -9 0 -5 9
                         -7 20 -4 16 4 20 0 20 -20 0 -14 4 -28 9 -31 5 -4 7 3 4 14 -3 11 0 20 6 20 6
                         0 11 7 11 15 0 11 7 10 38 -7 l37 -21 -37 32 -37 32 16 34 c9 19 20 32 24 30
                         4 -3 10 2 13 11 9 24 26 6 26 -27 0 -20 12 -45 35 -73 19 -24 36 -54 36 -67 1
                         -17 3 -19 6 -6 2 9 9 15 14 12 19 -12 7 8 -31 54 -45 53 -51 92 -21 129 11 12
                         30 22 45 22 20 0 29 -8 41 -36 8 -20 15 -55 15 -78 0 -29 5 -45 19 -53 13 -8
                         17 -20 14 -40 l-4 -28 13 28 13 29 19 -21 c14 -15 17 -30 13 -58 -3 -21 -3
                         -32 0 -25 2 6 8 10 12 8 10 -6 -2 76 -14 94 -5 9 -23 21 -38 28 -25 11 -28 17
                         -25 49 2 28 9 41 28 50 16 8 19 13 9 13 -17 0 -29 19 -29 46 0 21 48 17 60 -5
                         7 -13 7 -22 0 -26 -16 -10 -12 -28 5 -21 8 3 15 4 15 3 0 -13 39 -108 40 -96
                         0 8 -11 49 -25 89 -14 40 -25 77 -25 82 0 12 68 2 86 -13 21 -17 17 -46 -8
                         -63 -19 -13 -20 -16 -5 -16 10 0 22 11 29 25 12 27 28 24 28 -4 0 -10 10 -26
                         23 -37 22 -19 22 -19 5 2 -10 11 -18 28 -18 37 0 9 -4 19 -10 22 -19 12 -10
                         35 13 35 29 0 64 -24 89 -64 11 -17 18 -23 14 -13 -4 13 0 17 17 18 17 1 14 3
                         -10 10 -18 5 -33 15 -33 22 0 16 -70 57 -98 57 -11 0 -22 7 -26 15 -3 8 -14
                         15 -24 15 -28 0 -114 104 -118 143 -2 18 -8 65 -14 105 -15 110 -1 125 94 101
                         23 -6 58 -9 76 -7 31 3 32 4 15 18 -15 12 -17 12 -10 1 7 -12 1 -13 -36 -5
                         -24 4 -70 9 -102 9 -62 0 -71 11 -37 45 22 22 56 26 63 8 3 -7 6 -3 6 10 1 20
                         4 21 22 11 17 -9 25 -7 44 11 13 13 33 20 46 18 28 -4 36 -25 12 -31 -12 -3
                         -9 -5 9 -6 17 -1 31 6 37 17 13 24 3 62 -15 62 -8 0 -14 5 -14 10 0 6 5 10 10
                         10 6 0 10 7 10 16 0 13 7 15 40 9 26 -4 40 -3 40 4 0 11 -30 14 -108 11 -24
                         -1 -49 4 -57 10 -15 12 -55 -2 -55 -20 0 -6 -5 -10 -11 -10 -6 0 -9 7 -5 15 3
                         8 0 15 -6 15 -7 0 6 19 29 43 47 48 83 111 83 144 0 19 5 23 30 23 19 0 30 -5
                         30 -14 0 -7 12 -16 28 -18 15 -3 36 -8 47 -12 17 -6 17 -5 -2 10 -28 20 -30
                         39 -4 24 26 -13 31 -13 31 5 0 14 18 20 50 16 41 -5 135 1 141 10 3 6 8 9 10
                         8 2 -2 15 4 28 13 21 15 23 22 19 83 -3 43 -9 70 -19 76 -12 8 -12 10 1 19 13
                         9 13 11 0 19 -8 6 -12 13 -8 16 3 4 0 23 -8 42 -9 19 -13 38 -10 41 3 3 1 11
                         -6 19 -9 11 -7 15 11 20 22 6 22 6 2 20 -14 9 -33 12 -58 7 -36 -6 -37 -5 -18
                         10 11 8 25 16 32 16 22 0 24 19 3 30 -17 9 -26 7 -51 -10 -24 -18 -33 -19 -44
                         -10 -19 16 -19 30 0 30 22 0 18 21 -5 27 -23 6 -27 23 -5 23 8 0 15 5 15 10 0
                         15 -23 12 -46 -5 -10 -8 -27 -15 -37 -15 -9 0 -26 -5 -37 -12 -10 -7 -22 -9
                         -26 -5 -11 10 26 77 46 85 16 6 17 9 5 26 -10 13 -23 17 -45 14 -23 -4 -34 0
                         -41 14 -5 10 -21 18 -34 18 -14 0 -25 5 -25 10 0 14 -10 12 -45 -8z m-79 -203
                         c-3 -17 -6 -39 -6 -47 0 -15 -2 -15 -15 -1 -12 12 -13 21 -4 47 14 42 34 42
                         25 1z m-136 -72 c0 -13 -50 -67 -63 -67 -4 0 1 13 13 30 12 16 22 39 23 49 1
                         15 4 17 14 9 7 -6 13 -15 13 -21z m91 -30 c-8 -8 -11 -7 -11 4 0 20 13 34 18
                         19 3 -7 -1 -17 -7 -23z m499 16 c-8 -3 -19 -12 -23 -20 -5 -7 -13 -11 -18 -7
                         -16 9 10 34 35 33 14 0 16 -2 6 -6z m-296 -67 c-4 -10 -15 -16 -28 -14 -27 4
                         -24 21 6 29 28 7 30 6 22 -15z m-367 -40 c6 -45 -3 -59 -27 -46 -15 8 -19 17
                         -15 31 4 13 2 19 -9 19 -24 0 -19 18 7 23 34 6 40 3 44 -27z m220 -83 c-2 -34
                         1 -38 28 -44 32 -7 29 -9 -22 -15 -32 -4 -33 -3 -33 34 0 31 13 62 27 62 1 0
                         1 -17 0 -37z m-393 -25 c-4 -6 -19 -8 -34 -5 -17 4 -38 -1 -59 -14 -45 -27
                         -49 -18 -6 12 25 19 43 24 70 21 20 -2 32 -8 29 -14z m660 -13 c-9 -14 -20
                         -25 -25 -25 -5 0 -9 -6 -9 -14 0 -19 -17 -29 -31 -20 -7 4 3 20 27 44 46 44
                         61 50 38 15z m-365 -24 c0 -14 2 -34 3 -44 2 -11 -10 -25 -35 -40 -33 -18 -39
                         -19 -47 -7 -7 10 -10 11 -10 3 0 -7 -9 -13 -21 -13 -17 0 -20 4 -14 29 4 21 2
                         30 -9 34 -9 4 -16 18 -16 33 0 18 4 24 13 21 8 -3 19 -2 25 2 7 4 34 7 61 7
                         46 0 50 -1 50 -25z m251 -22 c0 -54 -67 -93 -88 -51 -13 24 -5 41 30 62 35 21
                         58 17 58 -11z m-230 -99 c0 -13 -7 -20 -18 -20 -26 0 -34 11 -21 27 17 20 39
                         16 39 -7z m110 12 c0 -15 -24 -32 -44 -32 -18 0 -19 1 -1 20 18 20 45 27 45
                         12z m-110 -62 c0 -5 -4 -10 -9 -10 -6 0 -13 5 -16 10 -3 6 1 10 9 10 9 0 16
                         -4 16 -10z m101 -5 c-15 -42 -21 -52 -40 -69 -21 -19 -21 -19 -22 0 -2 25 2
                         68 6 74 6 10 60 5 56 -5z m-123 -60 c14 -31 16 -75 3 -75 -10 0 -31 54 -31 81
                         0 27 15 23 28 -6z m95 -149 c16 -12 17 -17 5 -35 -15 -25 -46 -24 -61 1 -8 12
                         -7 21 2 32 16 19 30 20 54 2z"
                  />
                  <path
                    d="M13 1548 c-7 -9 -8 -170 -4 -453 5 -382 8 -440 21 -440 13 0 15 47
                         14 368 -1 301 1 367 12 367 8 0 32 -35 53 -77 22 -43 53 -99 68 -126 l28 -47
                         -5 -228 c-5 -244 -4 -262 15 -262 22 0 25 54 25 465 0 344 -2 404 -15 415 -24
                         20 -28 -7 -23 -160 3 -77 2 -140 -2 -140 -4 0 -44 74 -90 165 -46 91 -84 165
                         -86 165 -1 0 -6 -6 -11 -12z"
                  />
                  <path
                    d="M924 1538 c-13 -19 -16 -455 -4 -573 5 -55 12 -135 15 -178 6 -82 23
                         -130 50 -141 34 -13 91 -6 112 14 50 46 68 318 42 635 -6 77 -9 161 -6 188 5
                         37 3 49 -9 54 -8 3 -17 4 -19 1 -10 -10 -10 -133 0 -233 12 -109 11 -401 -1
                         -524 -4 -48 -12 -69 -29 -87 -29 -29 -45 -30 -76 -5 -21 17 -25 32 -32 113 -4
                         51 -10 237 -13 413 -3 176 -9 324 -14 328 -4 5 -12 3 -16 -5z"
                  />
                  <path
                    d="M1955 1543 c-56 -14 -70 -53 -86 -242 -12 -137 -2 -356 22 -533 12
                         -85 39 -128 81 -128 62 0 90 66 92 219 l1 86 -50 0 c-38 0 -50 -4 -50 -15 0
                         -10 12 -16 34 -18 l33 -3 -5 -84 c-6 -90 -22 -138 -49 -143 -33 -6 -46 38 -64
                         218 -23 242 -10 558 25 593 5 5 24 12 43 16 39 8 53 42 16 40 -13 -1 -32 -4
                         -43 -6z"
                  />
                  <path
                    d="M406 1531 c-3 -5 -11 -55 -17 -112 -5 -56 -12 -105 -14 -108 -2 -4
                         -9 -77 -15 -164 -7 -87 -22 -228 -35 -315 -12 -86 -20 -163 -17 -170 9 -26 27
                         -4 34 44 19 136 38 274 43 322 7 49 9 52 35 52 31 0 34 -6 45 -115 5 -51 18
                         -139 41 -272 6 -41 34 -45 34 -5 0 15 -7 65 -15 112 -8 47 -19 121 -24 165 -6
                         44 -19 163 -31 265 -15 129 -26 190 -37 202 -10 12 -13 26 -9 45 4 15 8 34 9
                         42 2 16 -19 26 -27 12z m26 -317 c3 -87 3 -89 -21 -92 -20 -3 -23 0 -18 20 3
                         12 9 63 13 113 9 108 21 88 26 -41z"
                  />
                  <path
                    d="M584 1529 c-10 -17 16 -29 64 -29 l42 0 2 -52 c1 -29 3 -145 4 -258
                         3 -544 3 -540 18 -540 11 0 14 58 18 313 3 172 1 358 -3 413 -9 113 -3 124 61
                         124 43 0 54 8 39 27 -15 17 -234 19 -245 2z"
                  />
                  <path
                    d="M1244 1529 c-5 -8 -9 -70 -10 -139 0 -69 -1 -259 -2 -423 -2 -300 3
                         -352 32 -328 9 7 10 29 5 78 -11 93 -11 303 -1 303 5 0 39 -79 77 -176 66
                         -167 87 -206 103 -190 6 7 -12 63 -57 171 -11 28 -34 85 -51 128 l-30 79 34
                         39 c48 56 70 134 63 223 -8 103 -25 161 -61 201 -34 39 -88 56 -102 34z m76
                         -57 c64 -65 69 -289 6 -341 -14 -12 -19 -11 -35 3 -18 16 -19 33 -20 192 0
                         110 4 174 10 174 6 0 23 -13 39 -28z"
                  />
                  <path
                    d="M1536 1531 c-4 -5 -6 -204 -5 -441 1 -315 4 -432 13 -435 6 -2 46 -5
                         89 -7 77 -3 77 -3 77 22 0 25 -1 26 -70 22 l-70 -4 -1 268 c-2 519 -3 577 -16
                         581 -6 2 -14 0 -17 -6z"
                  />
                  <path
                    d="M1760 1525 c-14 -17 -16 -132 -12 -617 2 -242 3 -258 20 -258 17 0
                         18 21 16 441 -2 243 -5 443 -7 445 -2 3 -10 -3 -17 -11z"
                  />
                  <path
                    d="M3425 1529 c-3 -8 -4 -207 -3 -444 l3 -430 68 -3 c67 -3 104 9 91 29
                         -3 5 -32 9 -65 9 l-59 0 -1 103 c-6 658 -8 730 -18 740 -7 7 -12 6 -16 -4z"
                  />
                  <path
                    d="M3650 1530 c-12 -8 -15 -52 -17 -257 -2 -136 0 -333 4 -436 5 -157 8
                         -187 21 -185 12 3 14 64 13 443 -1 241 -3 440 -4 442 -2 1 -9 -2 -17 -7z"
                  />
                  <path
                    d="M3977 1534 c-4 -4 -7 -20 -7 -36 0 -16 -13 -114 -30 -216 -16 -103
                         -36 -250 -45 -327 -25 -222 -34 -208 -59 90 -30 346 -50 485 -72 485 -18 0
                         -18 -23 1 -135 8 -49 17 -130 20 -180 5 -78 11 -141 29 -291 3 -17 7 -78 11
                         -135 4 -57 11 -114 16 -126 8 -23 33 -31 43 -15 6 11 42 261 51 357 4 39 20
                         150 36 248 33 197 39 278 23 284 -5 2 -13 0 -17 -3z"
                  />
                  <path d="M2328 393 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
                  <path d="M2357 329 c-4 -16 -3 -18 9 -8 16 13 19 29 5 29 -5 0 -11 -9 -14 -21z" />
                  <path
                    d="M2631 103 c12 -24 25 -41 27 -38 3 2 0 11 -7 19 -9 11 -9 15 1 19 10
                         4 10 6 -1 6 -8 1 -20 9 -28 19 -8 9 -4 -2 8 -25z"
                  />
                </g>
              </svg>
            </div>
            <blockquote className="mt-8 md:flex md:flex-grow md:flex-col">
              <div className="relative text-lg font-medium leading-7 text-white md:flex-grow">
                <svg
                  className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-indigo-600"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative">
                  We really appreciate how quickly things are handled with you
                  guys!!! Looking forward to years to come!
                </p>
              </div>
              <footer className="mt-8">
                <div className="flex">
                  <div className="inline-flex flex-shrink-0 rounded-full border-2 border-white">
                    <StaticImage
                      className="h-12 w-12 rounded-full"
                      src="../images/therese.png"
                      alt="Testimonial from Therese"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-base font-medium leading-6 text-white">
                      Therese Aarsæther
                    </div>
                    <div className="text-base font-medium leading-6 text-indigo-200">
                      CEO, Naturlig Liv
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
          <div className="border-t-2 border-indigo-900 py-12 px-4 sm:px-6 md:border-t-0 md:border-l md:py-16 md:pr-0 md:pl-10 lg:pl-16">
            <div className="md:flex-shrink-0">
              <svg
                height="60"
                viewBox="0 0 598 595"
                role="img"
                aria-labelledby="svg-naturlig"
                fill="#B4C6FC"
              >
                <path
                  d="M586.7,310.4c-0.2,0.9-0.5,1.9-0.5,2.8c-1.3,35.2-9.5,68.8-23.7,101c-10.6,23.8-24,46-40.7,66.1
                       c-5.3,6.3-10.7,12.6-16.4,18.5c-24.1,24.8-51.8,44.7-83.1,59.7c-22.3,10.6-45.6,18-69.8,22.7c-16.1,3.1-32.4,4.7-48.8,4.8
                       c-2.6,0-5.3,0.4-7.9,0.5c-2.3,0-4.6,0-6.9,0c-0.8-0.2-1.7-0.5-2.5-0.5c-25.5-1-50.5-5.3-74.9-13.1c-32.1-10.3-61.6-25.5-88.3-46.2
                       c-9-7-17.7-14.5-25.9-22.5c-12.6-12.3-24-25.5-34.1-40c-2.6-3.7-4.9-7.6-7.3-11.4c-3.9-6.3-8-12.6-11.5-19.1
                       c-12.3-22.7-21.2-46.7-26.8-71.9c-2.9-13.2-5.2-26.6-6.2-40.1c-0.8-10.3-1.3-20.5-1-30.8c1.3-43.1,11.5-84.1,30.8-122.7
                       c9.8-19.6,21.8-37.7,35.8-54.5c9.7-11.6,20.3-22.5,31.7-32.5c17.4-15.2,36.1-28.3,56.6-39c24.3-12.6,49.8-21.6,76.7-27
                       c14.5-2.9,29.2-4.7,44-5.4c1,0,2.1-0.3,3.1-0.5c6.7,0,13.5,0,20.2,0c2.6,0.3,5.2,0.7,7.9,0.9c41.4,2.5,80.3,13.7,117,33.1
                       c13.3,7,26.1,14.9,37.8,24.2c14.8,11.8,29.4,24,42,38.3c28.2,32.2,48.9,68.6,61.3,109.6c4.6,15.4,8,31,9.6,47
                       c0.7,6.9,1.1,13.8,1.6,20.7c0.1,1,0.3,1.9,0.5,2.8C586.7,294.1,586.7,302.3,586.7,310.4z M19.6,301.7c0.2,15,1.6,29.9,4.1,44.7
                       c5.6,32.2,16.5,62.5,32.9,90.7c16.3,28.3,37,53,61.9,74.1c13.6,11.5,28.2,21.5,43.7,30.2c40.4,22.7,83.9,34.2,130.2,35.5
                       c23.1,0.6,45.8-1.8,68.3-6.9c28.4-6.4,55.2-17.1,80.1-32c17-10.2,32.8-22,47.4-35.4c8-7.4,15.6-15.2,22.3-23.9
                       c4-5.2,8.1-10.3,12.3-15.4c4.2-5.1,7.9-10.4,11.4-16c25.8-40.7,40-85.1,42.8-133.1c1.3-22.5,0-44.8-4-67
                       c-5.9-32.6-17.4-63.1-34.4-91.5c-13.4-22.3-29.1-42.8-48.5-60.2c-5.2-4.7-10.1-9.8-15.5-14.1c-26.2-21.1-55.1-37.4-87.1-47.9
                       c-13.6-4.5-27.5-8.2-41.7-10.6c-12.9-2.1-25.8-3.2-38.9-3.8c-13.4-0.6-26.8,0.3-40.1,1.5c-13.5,1.3-26.8,4.1-39.9,7.5
                       c-33.2,8.8-63.8,23.4-91.7,43.5c-20.9,15.1-39.3,32.8-55.3,53c-18.4,23-32.8,48.3-43.1,76c-6.4,17.1-11.1,34.8-13.9,52.8
                       C20.5,269.5,19.4,285.5,19.6,301.7z"
                />
                <path
                  d="M119,261.8c7.5-25.6,19.8-48.3,37-68.4c17.1-20.1,37.7-35.6,61.5-46.8c23.9-11.3,49.1-16.9,75.6-17.2
                       c35.9-0.4,69,9,99.3,28.2c39.1,24.9,64.9,59.9,78.6,103.9c1.5,0,2.9,0,4.4,0c-24.5-86.6-106.6-143.4-195.8-136
                       C192,132.7,131,198,114.8,261.5c0.3,0.1,0.6,0.3,1,0.3C116.7,261.8,117.7,261.8,119,261.8z"
                />
                <path
                  d="M472.5,334.4c-11.5,38.4-32.8,70-64.5,94.4c-31.8,24.4-67.9,37-108,37.9c-35.1,0.8-67.9-8.1-97.9-26.4
                       c-40.6-24.8-67.5-60.4-81.4-105.8c-1.5,0-2.9,0-4.3,0C134,402.9,204.3,475.4,305.3,471c90-3.9,155.1-70.5,171.6-136.5
                       C475.5,334.4,474.2,334.4,472.5,334.4z"
                />
                <path
                  d="M362.4,308c0.1-0.2,0.1-0.4,0.2-0.6c-0.3-0.2-0.6-0.6-1-0.7c-1.3-0.5-1.7-1.5-1.7-2.8c0-2.7,0-5.5,0-8.2
                       c0-1,0.4-1.7,1.3-2.1c0.9-0.3,1.8-0.8,2.8-0.9c2.1-0.3,3.1,0.4,3.2,2.5c0.1,2.9,0.1,5.8,0,8.8c0,1.2-0.5,2.2-1.7,2.7
                       c-0.3,0.1-0.4,0.7-0.7,1.2c4,0.5,6.3,0.3,7.9-0.3c-2.2-2.7-2.2-2.7-2.2-7.1c0-1.8,0.1-3.6-0.1-5.3c-0.3-4.1-2.9-5.8-6.8-4.4
                       c-1.2,0.4-2.2,1-3.4,1.6c-0.3-0.7-0.5-1.3-0.8-2.1c-1.9,0.7-3.5,1.2-5.7,2c0.9,0.6,1.5,0.9,1.9,1.3c0.4,0.5,1,1.1,1,1.7
                       c0.1,2.9,0,5.8,0,8.8c0,1.2-0.5,2.2-1.8,2.7c-0.3,0.1-0.5,0.7-0.9,1.2C357.1,308,359.8,308,362.4,308z"
                />
                <path
                  d="M162.5,308.1c-2.5-3.2-2.5-3.2-2.5-7.5c0-1.8,0.1-3.5,0-5.3c-0.2-4-2.7-5.7-6.5-4.5c-1.2,0.4-2.4,1.1-3.7,1.7
                       c-0.2-0.7-0.4-1.3-0.6-2.1c-1.9,0.5-3.8,0.7-5.5,2.1c0.7,0.4,1.3,0.7,1.7,1.1c0.4,0.5,0.9,1.1,0.9,1.7c0.1,2.8,0.1,5.7,0,8.5
                       c0,1.3-0.5,2.4-1.9,2.9c-0.3,0.1-0.5,0.7-0.8,1.2c3.7,0.5,6.8,0.4,8.4-0.3c-0.1-0.2-0.2-0.6-0.3-0.7c-2-0.6-2.3-2.2-2.3-4
                       c0-1.9,0-3.9,0-5.8c0-2.9,0.9-3.9,3.7-4.3c2.4-0.4,3.6,0.4,3.7,2.9c0.1,2.7,0.1,5.5,0,8.2c0,1.3-0.5,2.4-1.9,2.9
                       c-0.3,0.1-0.4,0.7-0.7,1.2C157,308.1,159.6,308.1,162.5,308.1z"
                />
                <path
                  d="M431.9,307.9c2.7,0.6,6.4,0.5,8.3-0.1c0-0.2,0.1-0.5,0-0.5c-2.4-1-2.5-3-2.5-5.3c0.1-5.9,0-11.9,0-17.8
                       c0-1,0-1.9,0-2.9c-2.6,0.2-4,0.7-5.6,1.8c2.4,2.1,2.4,2.1,2.4,5.7c0,4.2-0.1,8.3,0,12.5c0.1,2.5,0,4.8-2.6,6
                       C432,307.4,432,307.6,431.9,307.9z"
                />
                <path
                  d="M222.2,295.8c0.7-3.2,0.7-3.9-0.3-4.4c-2.2-1.1-4.5-1.6-6.9-0.5c-3.1,1.3-3.8,4.8-1.4,7.1c1,1,2.3,1.6,3.5,2.4
                       c0.9,0.6,2,1.2,2.8,2c1.1,1,1.3,2.3,0.8,3.3c-0.6,1.1-2.1,1.7-3.4,1.4c-1.4-0.3-2.3-1.3-2.8-2.5c-0.3-0.7-0.2-1.8-1.3-2.1
                       c-1,2.1-0.9,3.9,0.3,4.7c2.4,1.5,4.9,2,7.5,0.7c3.5-1.8,4-5.7,1-8.3c-1.1-1-2.5-1.6-3.8-2.5c-1-0.7-2-1.5-2.7-2.4
                       c-0.9-1.2-0.2-2.7,1.3-3c1.6-0.4,3.2,0.2,4.1,1.7C221.2,294,221.6,294.7,222.2,295.8z"
                />
                <path
                  d="M275.5,295.3c0.2,0,0.4-0.1,0.6-0.1c0-0.8,0.1-1.6,0-2.3c-0.1-0.6-0.5-1.3-1-1.6c-1.8-0.9-3.7-1.2-5.7-0.7
                       c-1.8,0.5-3.2,1.5-3.6,3.5c-0.4,1.9,0.4,3.3,1.8,4.4c1.1,0.9,2.4,1.5,3.6,2.3c0.9,0.6,2,1.3,2.7,2.1c1.3,1.6,0.6,3.6-1.4,4.2
                       c-1.5,0.5-3.2-0.2-4.1-1.6c-0.4-0.7-0.5-1.5-0.9-2.2c-0.2-0.3-0.7-0.5-1.4-1c0,1.4-0.1,2.4,0,3.3c0.1,0.6,0.3,1.2,0.7,1.6
                       c2,1.8,5.7,2,8,0.6c3.1-1.9,3.5-5.6,0.7-8c-1.1-0.9-2.4-1.5-3.5-2.4c-1-0.7-2.1-1.4-2.9-2.3c-1.2-1.5-0.4-3.2,1.6-3.4
                       c1.5-0.2,2.8,0.4,3.7,1.7C274.8,293.9,275.1,294.6,275.5,295.3z"
                />
                <path
                  d="M312.4,294.3c0,3.2,0,6.5,0,9.7c0,1.2-0.5,2.2-1.7,2.7c-0.4,0.1-0.6,0.6-1.3,1.4c3.6,0,6.6,0.2,9.6-0.4
                       c-0.3-0.5-0.7-0.9-1.1-0.9c-1.1-0.2-1.9-0.8-2-1.8c-0.1-3.1-0.4-6.2,0-9.2c0.3-2.6,2.6-3,4.6-1.3c0.2,0.2,0.6,0.3,0.9,0.4
                       c1.6-1.8,1.7-2.6,0.7-3.7c-1.1-1.1-2.3-1.2-3.8-0.1c-0.6,0.4-1.1,0.9-1.6,1.4c-0.2,0.1-0.5,0.1-0.7,0.2c-0.2-0.8-0.5-1.5-0.7-2.4
                       c-1.8,0.7-3.5,1.3-5.7,2C310.7,293.2,311.4,293.7,312.4,294.3z"
                />
                <path
                  d="M462.3,308.4c0.3,0,0.6,0,0.9,0c0.6-1.5,1.2-3,1.9-4.5c1.9-4.2,2.8-8.9,6.1-12.5c0,0,0-0.2-0.1-0.4
                       c-1.9,0-3.8,0-6,0c0.3,0.5,0.4,0.7,0.5,0.8c1.8,1.4,1.9,1.7,1.2,3.7c-0.6,1.7-1.2,3.3-1.8,5c-0.4,0.9-0.8,1.9-1.1,2.8
                       c-1.6-3-2.7-5.8-3.7-8.7c-0.3-1-0.4-1.9,0.7-2.5c0.3-0.2,0.5-0.6,0.9-1.1c-2.6,0-5,0-7.8,0c3,2.4,3.4,5.7,4.7,8.5
                       C459.9,302.4,461.1,305.4,462.3,308.4z"
                />
                <path
                  d="M490.4,291.7c1,0.3,1.7,0.6,2.6,0.8c0,1.1,0,2,0,3c0,3-0.1,6,0,9c0.1,3.6,1.6,4.7,5.2,3.8
                       c1-0.2,2.3-0.2,2.7-1.5c-0.2-0.2-0.3-0.3-0.3-0.3c-0.4,0-0.9-0.1-1.3-0.1c-2.7,0.2-3.1-0.1-3.2-2.8c-0.1-2.7,0-5.5,0-8.2
                       c0-1,0.1-2.1,0.1-3c3.8-0.5,3.8-0.5,4.2-1.5c-1.3-0.1-2.6-0.2-4-0.3c-0.2-1-0.4-2-0.7-3.1C493.8,289,492.2,290.3,490.4,291.7z"
                />
                <path
                  d="M282.9,292.5c0,1.2,0,2.2,0,3.3c0,3.1,0,6.2,0.1,9.3c0,1,0.4,2.2,1,2.9c1.4,1.5,5.3,0.7,6.8-1.3
                       c-0.6-0.1-1.1-0.2-1.5-0.1c-2.9,0.2-3.2-0.1-3.3-3c0-1.9,0-3.7,0-5.6c0-1.8,0-3.7,0-5.6c1.4-0.1,2.5,0,3.5-0.2
                       c0.3-0.1,0.6-0.5,1.2-1.1c-1.8-0.2-3.2-0.3-4.5-0.4c-0.2-1.1-0.4-2-0.6-3.2c-1.1,1-1.8,1.7-2.7,2.3c-0.8,0.6-1.6,1.2-2.8,2.1
                       C281.2,292,281.8,292.2,282.9,292.5z"
                />
                <path
                  d="M229.3,292.4c0,1.8,0,3.4,0,5c0,2.7,0,5.3,0.1,8c0,1.4,0.4,2.7,2,3.1c2,0.5,4,0.1,5.7-1.2
                       c0.1-0.1,0-0.5-0.1-0.9c-0.6,0-1.1,0.1-1.6,0.1c-2.4,0.2-3-0.3-3-2.8c0-1.9,0-3.9,0-5.8c0-1.8,0-3.7,0-5.6c1.4-0.1,2.4-0.1,3.5-0.2
                       c0.3-0.1,0.6-0.6,1.1-1.1c-1.7-0.1-3-0.2-4.4-0.4c-0.1-1-0.3-1.9-0.4-3.2c-1.9,1.5-3.5,2.8-5.5,4.4
                       C227.7,292.1,228.4,292.2,229.3,292.4z"
                />
                <path
                  d="M335.3,306.6c-0.9-0.1-1.3-0.1-1.8-0.1c-2.8,0.2-3.2-0.2-3.3-3c0-2.5,0-5,0-7.4c0-1.2,0-2.4,0-3.7
                       c1.4-0.1,2.5-0.1,3.5-0.2c0.3,0,0.6-0.6,1.1-1.1c-1.7-0.1-3-0.2-4.4-0.3c-0.2-1.1-0.3-2-0.5-3.2c-1.9,1.5-3.5,2.9-5.3,4.3
                       c1,0.3,1.8,0.5,2.6,0.8c0,4.2-0.1,8.3,0,12.3c0.1,3.1,1.5,4.3,4.6,3.7c0.9-0.2,1.7-0.5,2.5-0.8C334.6,307.6,334.8,307.2,335.3,306.6
                       z"
                />
                <path
                  d="M452.2,308.1c-0.4-0.7-0.5-1.1-0.8-1.2c-2-0.6-2.1-2.1-2.1-3.8c0-2.4,0-4.8,0-7.2c0-1.7,0-3.5,0-5.4
                       c-2.2,0.3-4,0.8-5.9,2c0.6,0.5,1,0.8,1.4,1c0.9,0.4,1.3,1.1,1.3,2.1c0,2.7,0,5.3-0.1,8c0,1.4-0.3,2.6-1.9,3.2
                       c-0.3,0.1-0.4,0.7-0.8,1.3C446.4,308.1,449.1,308.1,452.2,308.1z"
                />
                <path d="M449.7,283.1c0-1.1-0.9-2-2-2c-1.2,0-2,0.8-1.9,2c0,1.2,0.8,1.7,1.8,1.9C448.7,285.2,449.7,284.2,449.7,283.1z" />
                <path
                  d="M409.7,521.8c0,0.2,0,0.4,0.1,0.6c0.5,0,1-0.1,1.5-0.1c0-0.1,0-0.3,0-0.4C410.8,521.8,410.2,521.8,409.7,521.8z
                       "
                />
                <path
                  d="M119,261.8c-1.4,0-2.3,0-3.3,0c-0.3,0-0.6-0.2-1-0.3C131,198,192,132.7,279.6,125.4
                       c89.2-7.4,171.2,49.5,195.8,136c-1.5,0-2.9,0-4.4,0c-13.7-44-39.5-79-78.6-103.9c-30.3-19.2-63.4-28.6-99.3-28.2
                       c-26.4,0.3-51.6,5.9-75.6,17.2c-23.8,11.3-44.4,26.8-61.5,46.8C138.9,213.5,126.5,236.2,119,261.8z"
                />
                <path
                  d="M472.5,334.4c1.7,0,3,0,4.3,0c-16.5,66-81.5,132.6-171.6,136.5c-101,4.4-171.3-68.1-188.8-136.4
                       c1.4,0,2.8,0,4.3,0c13.9,45.4,40.7,80.9,81.4,105.8c30,18.3,62.8,27.2,97.9,26.4c40-0.9,76.2-13.4,108-37.9
                       C439.7,404.5,461,372.9,472.5,334.4z"
                />
                <path
                  d="M257.8,504c0,2.1-0.1,4.2,0,6.3c0.6,10-0.9,19.8-2.2,29.6c-0.2,1.3,0,2.6,0.1,3.9c0,1.2,0,2.5,0,3.7
                       c0,2.2-0.1,4.4-0.1,6.6c0,1.6-0.4,2.1-2.3,2.7c0.3,0.5,0.6,1,0.9,1.5c0.2,0.4,0.6,0.8,0.5,1.2c0,0.3-0.6,0.6-1,0.6
                       c-1.2,0.1-2.5,0-3.7,0c-1.5,0-3,0-4.5-0.1c-2-0.1-2.7-0.7-3-2.7c-0.2-1.6-0.4-3.1-0.6-4.9c1.2-0.5,2.5-1,3.6-1.6
                       c0.5-0.3,1.2-0.7,1.3-1.1c0.3-1.8,0.5-3.7,0.6-5.5c0.1-3.4,0-6.7,0.3-10.1c0.9-10.6,2.1-21.2,3-31.7c0.4-4,0.4-8,0.6-11.9
                       c0.2-3.1,0.6-3.4,3.7-3.5c2.4-0.1,4.1,0.8,5.4,2.8c3.5,5.6,7,11.1,10.5,16.6c1,1.6,1.9,3.2,2.9,4.7c2.7,4,4.4,8.5,5.9,13
                       c0.7,2.3,1.8,4.4,2.7,6.6c0.3,0.7,0.9,1.3,1.3,2c1.7-0.9,1.8-2.3,1.9-3.7c0.3-6.1,0.6-12.2,0.9-18.3c0-1.1-0.3-2.3-0.3-3.4
                       c0.1-3.8,0.3-7.6,0.5-11.7c-1.1-1-3-0.5-4.8-1.1c-0.6-1.5-0.2-3.1,0.1-4.6c0.2-1.3,1.3-1.8,2.6-1.8c4.6,0.1,9.2,0.3,13.8,0.5
                       c0.5,0,1.3,0.7,1.4,1.2c1.1,3.8-0.5,4.8-3.3,5.1c-0.9,0.1-1.9,0.2-2.9,0.4c0,3-0.1,5.8,0,8.6c0.7,17.2,1,34.4,0.5,51.6
                       c-0.1,4-0.4,4-4.3,4.2c-3.6,0.2-5.9-0.6-6.8-4.6c-0.6-2.4-1.6-4.8-2.2-7.3c-0.6-2.7-1.7-5.2-3.2-7.5c-1.5-2.5-2.9-5.1-4.2-7.7
                       c-2.9-6.1-5.7-12.2-8.7-18.2c-1.5-3.1-3.3-6-5-9c-0.4-0.6-0.9-1.2-1.4-1.8C258.3,503.8,258,503.9,257.8,504z M272.1,525
                       c-0.5-2.9-3.8-10.1-5.4-11.6C267.1,516.2,270.1,522.9,272.1,525z M262.4,503c0.1,3.1,1.9,7,3.6,8.2
                       C265.7,508.1,264.6,505.4,262.4,503z M270.3,512.6c-0.3-2-0.4-3.5-2.1-4.5C268,510,268.8,511.1,270.3,512.6z M256.3,497.4
                       c-0.3,0-0.5,0-0.8,0c-0.1,1.2-0.1,2.5-0.2,3.7c0.2,0,0.4,0,0.6,0C256,499.9,256.2,498.6,256.3,497.4z M278.1,525.3
                       c0,2.6,0,2.6,1.8,4C279.2,527.7,278.7,526.5,278.1,525.3z M252.2,533.3c-0.2,0-0.4-0.1-0.6-0.1c-0.2,1.2-0.4,2.5-0.6,3.7
                       c0.2,0,0.4,0.1,0.7,0.1C251.8,535.8,252,534.6,252.2,533.3z M289.6,538.9c-1,2-1,2,0,3.5C289.6,541.2,289.6,540.3,289.6,538.9z
                       M259,500.8c0.2-1.4,0.3-2.3-0.5-3.2C257.7,498.7,258,499.5,259,500.8z M273.6,528c-0.3,1.7,0,2.5,1.4,2.8
                       C274.6,530.1,274.2,529.3,273.6,528z M251.2,539.6c-1.2,0.5-1.4,1.2-0.2,2C251,541,251.1,540.3,251.2,539.6z M289.5,496.5
                       c-1.3,0.5-1.3,1.1-0.2,1.9C289.4,497.6,289.5,497,289.5,496.5z M276.1,522.4c0.2-0.1,0.4-0.2,0.6-0.3c-0.4-0.9-0.8-1.9-1.3-2.8
                       c-0.2,0.1-0.4,0.2-0.6,0.2C275.3,520.5,275.7,521.5,276.1,522.4z M246.5,552.7c0-0.2,0-0.4,0-0.7c-0.5,0-1,0.1-1.5,0.1
                       c0,0.2,0,0.3,0,0.5C245.6,552.7,246,552.7,246.5,552.7z M256.8,488.1c-0.3,0.5-0.6,0.9-0.6,1c0.2,0.3,0.6,0.5,0.9,0.8
                       c0.1-0.2,0.4-0.4,0.4-0.5C257.4,489,257.2,488.7,256.8,488.1z M277.6,536.6c0.1,1.4,0.3,2,1.8,2.1
                       C278.8,537.9,278.4,537.5,277.6,536.6z M245.2,555.5c0-0.2,0-0.3,0-0.5c-0.6,0-1.2-0.1-1.8-0.1c0,0.2,0,0.4,0,0.6
                       C244,555.5,244.6,555.5,245.2,555.5z"
                />
                <path
                  d="M391.4,529.1c1.4-1.2,2.8-2.4,4.3-3.8c-0.3-0.8-0.7-1.7-1.1-2.6c-5.7-12.8-11.4-25.5-17.2-38.3
                       c-1.1-2.5-2.2-5-3.3-7.5c-0.4-1-0.2-1.8,0.6-2.3c2.4-1.6,4.7-3.3,7.7-3.3c1.4,0,2.8,0.3,4.1,0.8c3.2,1.3,6,3.4,8.5,5.8
                       c2,2,4.3,3.7,6.4,5.6c1,0.9,2,2,2.9,3c1,1.1,2.1,2.1,3.1,3.2c1.5-1.3,1.4-2.7,1.6-4.1c0.9-7,1.6-14.1,2.7-21.1
                       c0.3-2.2,0.9-4.6,2.1-6.4c1-1.5,3-2.3,4.5-3.5c0.1-0.1,0.3-0.1,0.5-0.1c5.6-1.8,5.8-1.7,8,3.6c3.1,7.6,6,15.3,9.3,22.9
                       c2,4.7,4.5,9.2,6.8,13.8c1.2,2.4,2.4,4.9,3.6,7.4c0.7-0.1,1.2-0.1,1.7-0.2c2.6-0.6,3-0.4,3.9,2.1c0.6,1.5,1,3.2,1.5,4.7
                       c-5,2-9.7,3.9-14.5,5.7c-1.2,0.4-2.5,0.5-3.6,0.7c-0.9-1.9-1.6-3.3-2.4-5.2c0.4-0.3,1-1,1.6-1.5c0.9-0.6,1.1-1.3,0.6-2.3
                       c-0.2-0.5-0.5-1-0.6-1.5c-0.6-5.9-3.9-10.7-5.9-16.1c-0.9-2.5-2.2-4.8-3.3-7.2c-1.5-3.3-2.6-6.8-2.8-10.5c-0.1-2.2-1.7-3.6-2.7-5.4
                       c-1.1,0.5-1.1,1.4-1.3,2.2c-0.7,4-1.4,8-2.1,12c-1,5.4-2.1,10.8-3.2,16.1c-0.2,1.1-0.7,1.9-2,2.1c-0.8,0.2-1.6,0.7-2.1,0.9
                       c-6.5-4.2-12.5-8.8-18.3-13.8c-0.5-0.4-1-0.9-1.9-1.6c0.8,0.1,1.2,0.2,1.8,0.3c-0.7-2.2-2.2-3.2-4-3.9c-0.9-0.3-1.6,0.4-1.4,1.4
                       c0.2,1.1,0.7,2.2,1.1,3.2c4.7,10.3,9.4,20.6,14.2,30.9c0.3,0.7,0.6,1.5,0.9,2.3c-0.6,0.6-1.8,1-0.9,2.1c0.5,0.6,1.2,1.1,2.1,1.9
                       c-0.9,0.5-1.5,0.8-2.2,1.2c2,1.1,3.5,0.9,7.3-1.1c-0.8,0.9-1.2,1.5-1.8,2.1c0.4,0.2,0.6,0.4,0.8,0.3c0.9-0.2,1.9-0.5,2.8-0.8
                       c1.2-0.4,1.9,0.2,2.3,1.2c0.4,1.2-0.2,1.9-1.3,2.2c-0.8,0.2-1.5,0.4-2.4,0.6c0.2,0.3,0.3,0.4,0.6,0.8c-2.2,1.2-4.5,1.8-6.9,2.4
                       c0.1-0.3,0.3-0.7,0.6-1.5c-0.9,0.4-1.5,0.6-2,0.9c0,0.1,0.1,0.2,0.1,0.4c0.5,0.1,0.9,0.1,1.4,0.2c-2.1,1.2-4.8,1.2-6.6,3
                       c-0.3,0.3-1.1,0.4-1.5,0.2c-1.2-0.7-2.3-1.6-3.3-2.5C390.5,530.6,390.8,529.7,391.4,529.1c0.2,1.3,0.9,2,2.4,1.9
                       C393.4,528.8,393.4,528.8,391.4,529.1z M396.7,485.3c-0.3-0.7-0.4-1.1-0.7-1.4c-2.4-2.4-4.7-4.8-7.2-7.1c-0.6-0.6-1.5-0.8-2.4-1.2
                       c-1-0.4-1.6,0-1.9,0.9C388.5,479.5,392.4,482.3,396.7,485.3z M399.3,518.6c1.3-0.9,1.4-1.6,0.8-2.5c-0.6-0.9-1-1.8-1.5-2.7
                       c-0.9-1.8-1.7-3.7-2.6-5.5c-0.2-0.3-0.6-0.6-0.9-0.8c-0.2,0.1-0.3,0.2-0.5,0.3C396,511.1,397.6,514.7,399.3,518.6z M433.7,478.1
                       c-0.8-2.7-1.7-5.4-3.6-8C429.9,472.8,431.6,476.4,433.7,478.1z M413.2,472.4c-1.5,2.1-1.7,5.1-0.3,8.4
                       C413.2,477.7,414,475.3,413.2,472.4z M382.3,482.4c0.3,1.8,0.7,3.6,2.4,5.3C384.6,484.8,384.2,483.9,382.3,482.4z M441.7,496.5
                       c-0.3,0.1-0.5,0.3-0.8,0.4c0.4,1,0.7,2.1,1.1,3.1c0.1,0.2,0.8,0.4,1.1,0.3c0.2-0.1,0.5-0.8,0.4-1.1
                       C442.9,498.3,442.3,497.5,441.7,496.5z M392.3,500.1c-0.6-3.2-1.5-5.1-3-6.5C389.7,496.1,390.6,498.1,392.3,500.1z M390.7,506.1
                       c0.1,2,0.6,4,1.7,5.7C393,509.5,391.8,507.8,390.7,506.1z M379,482.6c0.2-0.1,0.5-0.3,0.7-0.4c-0.4-1.4-0.4-3-2.6-3.2
                       C377.7,480.1,378.3,481.3,379,482.6z M381.4,480.1c-0.5-2.5-0.8-2.9-2.8-3.1C379.7,478.2,380.5,479.1,381.4,480.1z M437.8,496.9
                       c-0.2,0.1-0.4,0.1-0.7,0.2c0,1.3-0.1,2.7,2,3.9C438.6,499.2,438.2,498,437.8,496.9z M395.9,520.9c0.6-1.7,0.4-2.5-0.9-3
                       C395.2,518.8,395.4,519.6,395.9,520.9z M389.7,504.4c0.2-0.1,0.4-0.2,0.5-0.3c-0.3-0.5-0.5-1.1-0.8-1.6c-0.2,0.1-0.4,0.2-0.5,0.3
                       C389.2,503.3,389.5,503.8,389.7,504.4z M416.9,458.7c-0.2-0.1-0.5-0.2-0.7-0.3c-0.1,0.5-0.2,1.1-0.2,1.6c0.2,0,0.3,0.1,0.5,0.1
                       C416.6,459.7,416.7,459.2,416.9,458.7z"
                />
                <path
                  d="M223.9,118.9c-5.8,4.8-13.1,5.6-19.4,8.7c-1.8-1.7-2.3-3.8-2.7-5.9c-0.1-0.6,0.4-1.5,0.9-2
                       c0.7-0.7,1.6-1.1,2.4-1.7c1.5-1.1,1.6-1.3,1-3.1c-0.3-0.8-0.7-1.6-1-2.5c-5.9-13.7-11.7-27.3-17.6-41c-0.5-1.2-1.1-2.4-1.8-3.8
                       c-2.3,1.3-4.3,2.5-6.4,3.7c-3.1-0.9-3.2-3.4-3.3-6.3c2.9-1.7,5.9-3.3,8.8-5.1c3.7-2.3,7.5-3.8,11.8-4.5c3.7-0.6,7.4-1.8,11.1-2.5
                       c2.2-0.5,4.6-0.7,6.9-0.8c7.6-0.4,13.4,3.1,17,9.6c3.3,5.9,2.6,12-1,17.6c-1.4,2.2-3.1,4.3-4.7,6.5c-0.6,0.9-1.2,1.9-1.9,3.1
                       c1,0.7,1.7,1.3,2.5,1.8c5.5,3.6,11,7.2,16.4,10.9c2.2,1.5,4.4,2.2,7,1c0.1,0,0.2,0,0.3-0.1c5.3-1.4,6-1.1,8.2,4.2
                       c-1.6,1-3.2,2.1-4.8,3.2c-0.2,0.1-0.4,0.3-0.7,0.4c-3.8,1-7.7,2-11.9,3.1c-0.8-1.2-1.8-2.5-2.7-3.9c-0.5-0.6-0.9-1.3-1.5-1.8
                       c-5.2-4.5-10.5-9-15.7-13.4c-1.7-1.5-2.3-1.5-4.2-0.3c-1.9,1.2-3.7,2.4-5.6,3.6c-1.8,1.1-2.3,2.1-1.6,4c1.3,3.3,2.7,6.6,4.3,9.7
                       c1.7,3.3,2.6,3.5,5.8,1.7c0.4-0.2,0.8-0.4,1.2-0.7C223.1,113.9,223,116.4,223.9,118.9z M194.2,64.1c0.6,1.3,1.1,2.2,1.6,3.1
                       c1.1,2.5,2.3,5,3.1,7.6c0.9,2.7,1.5,5.4,2.1,8.2c0.6,2.8,2.5,5.2,3.9,7.8c0.5,0.9,1.3,0.9,2.1,0.4c2.1-1.4,4.3-2.8,6.3-4.4
                       c2-1.7,3.6-4,5.8-5.4c3.3-2.1,5.3-5.1,6.9-8.5c0.4-0.9,0.6-2,0.7-3.1c0.1-3.7-1-6.7-4.2-8.9c-4.4-3.1-9.1-4.9-14.4-2.8
                       C203.5,59.9,199.1,62,194.2,64.1z M190.8,73.5c-0.4-3.6-1.3-5.7-2.6-6.6C187.9,68.7,188.8,71,190.8,73.5z M193.9,74.9
                       c0.2,1.1,0.4,2.2,0.8,3.2c0.4,1,0,2.5,1.8,3C196.4,78.5,195.3,76.7,193.9,74.9z M217.7,54.4c2.3,1.3,3,1.5,4.9,1.3
                       C221.3,53.8,219.5,54.2,217.7,54.4z M193.2,60.5c2.1,0.4,2.1,0.4,3.3-1.5C195.1,59.6,194.2,60,193.2,60.5z M231.9,72.5
                       c-1,0.2-1.5,0.6-1.3,1.6c0,0.2,0.6,0.5,0.8,0.4C232.3,74,232.4,73.4,231.9,72.5z M230.9,68.3c-0.1,1.4-0.8,2.5,0.8,3.1
                       C232.3,70.3,232.2,69.5,230.9,68.3z M225.5,78.3c-0.2-0.1-0.4-0.3-0.5-0.4c-0.8,0.6-1.6,1.2-1.2,2.6
                       C224.3,79.8,224.9,79.1,225.5,78.3z M222.4,81.7c-1.4,0.8-2.3,1.5-2.8,3C221.2,84,222,83.3,222.4,81.7z M256.3,106.1
                       c-0.1-0.2-0.2-0.5-0.3-0.7c-0.7,0.3-1.4,0.6-2.2,0.9C255,107.1,255.7,106.8,256.3,106.1z M177.9,69.5c0.3,0.1,0.6,0.1,0.9,0.2
                       c0.1-0.5,0.2-1,0.3-1.5c-0.3-0.1-0.9-0.2-0.9-0.2C178.1,68.5,178,69,177.9,69.5z M213,117.8c0.2,0,0.4,0,0.6,0
                       c0.3-1.3,0.3-1.3-0.9-2.3C212.8,116.5,212.9,117.1,213,117.8z M201.3,58.6c1.1,0.3,1.7,0,2.2-1.1C202.3,57.3,201.7,57.5,201.3,58.6z
                       M219.7,87.7c0.1,0.1,0.2,0.2,0.2,0.3c0.3-0.2,0.7-0.3,1-0.5c0.2-0.2,0.3-0.5,0.8-1.2c-0.8,0.3-1.1,0.4-1.3,0.5
                       C220.1,87.1,219.9,87.4,219.7,87.7z M254.1,103.8c-0.3-0.1-0.6-0.3-0.7-0.3c-0.2,0.2-0.3,0.5-0.5,0.7c0.2,0.1,0.5,0.2,0.7,0.1
                       C253.8,104.4,253.9,104.1,254.1,103.8z"
                />
                <path
                  d="M209.9,514.7c0.4,2.5,0.8,4.7,1.2,6.9c1,5.2,2.1,10.4,3.1,15.6c0.5,2.4,1.6,4.2,3.9,5.3
                       c1.2,0.5,2.3,1.4,3.3,2.2c1.1,0.8,1.5,1.9,1.1,3.2c-0.4,1.2-0.7,2.3-1.1,3.6c-2.1-0.5-4.1-1-6.1-1.4c-0.2,0-0.4-0.1-0.5-0.1
                       c-3.2-1.8-6.4-3.7-9.6-5.5c-0.3-0.2-0.6-0.4-0.8-0.6c0.2-1.1,0.3-1.9,0.5-2.8c0.7-2.6,0.5-5.2,0.2-7.9c-0.6-5.4-0.7-10.9-1-16.4
                       c-0.2-3.3-0.2-3.4-3.6-4c-1.8-0.4-3.6-0.8-5.4-1.3c-2.2-0.6-3.2-0.2-4.1,1.8c-1.3,3-2.5,6-3.7,9.1c-0.3,0.7-0.5,1.5-0.6,2.3
                       c-0.3,1.9,0,2.3,1.7,3.1c0.5,0.2,1,0.4,1.5,0.6c0.5,0.2,1,0.3,1.5,0.5c0.2,2.6-1.5,4.3-2.6,6.4c-2.4,0.4-4.6-0.4-6.7-1.2
                       c-4.2-1.8-8.3-3.9-12.5-5.9c-0.2-0.1-0.4-0.3-0.7-0.6c0.1-2.2,1.2-4,2.3-5.7c0.6-0.9,1.5-0.9,2.4-0.7c1.4,0.3,2.8,0.5,4.3,0.8
                       c0.6-1.1,1.2-2.1,1.6-3.1c3.3-8.2,6.4-16.5,9.8-24.7c2.4-5.9,5-11.7,7.5-17.6c0.5-1.2,0.9-2.4,1.5-4c-2-0.6-3.8-1.1-5.5-1.6
                       c-2.1-0.6-2.4-1.5-2-3.6c0.3-1.6,1.5-2.3,2.5-3.7c2.6,0.7,5.4,1.4,8.1,2.1c5,1.3,9.8,3,14,6.2c2.5,1.9,5.5,3.2,8.1,5.1
                       c2.3,1.6,4.2,3.5,6.4,5.1c2.2,1.7,3.5,3.9,4.3,6.5c0.9,3.1,1.9,6.3,1.3,9.6c-1.6,8.1-7.3,13.3-15.6,14.4c-2.3,0.3-4.6,0.6-6.8,1
                       C211.9,514.1,211,514.4,209.9,514.7z M206.8,476.3c-0.2,0.4-0.5,0.7-0.6,1c-1.8,6.2-4.4,11.9-8.5,16.9c-0.2,0.2-0.3,0.5-0.3,0.7
                       c-0.7,2.3-1.5,4.5-2.2,6.8c-0.4,1.2-0.2,2.1,1.3,2.4c2.6,0.5,5.2,1.1,7.8,1.4c3.1,0.4,6.3,0.6,9.5,0.6c2,0,4.1-0.1,6-0.6
                       c1.7-0.4,3.5-0.9,4.8-2c3-2.3,4.8-5.4,4.2-9.4c-0.8-5.4-2.8-10-8.1-12.6c-1.6-0.8-3.2-1.4-4.9-2.1
                       C212.9,478.5,209.9,477.5,206.8,476.3z M201.1,474.2c-2,0.3-2.9,2.2-3.2,6C198.9,478.2,200,476.2,201.1,474.2z M195.5,488.7
                       c2-0.3,3.4-3.1,3.5-5.9C197.7,485.1,196.6,486.9,195.5,488.7z M232.2,490.7c0.3-0.7,0.6-1.1,0.5-1.4c-0.4-1.5-1.4-2.5-2.5-3.3
                       c-0.2,0.1-0.3,0.2-0.5,0.3C230.5,487.7,231.3,489,232.2,490.7z M208.5,472.8c-0.1,0.3-0.2,0.6-0.4,0.8c1,0.4,2.1,0.8,3.1,1.1
                       c0.1-0.2,0.2-0.5,0.3-0.7C210.6,473.7,209.5,473.2,208.5,472.8z M227.7,507.9c1.6-1,1.6-1,1.3-2.7
                       C228.3,506,227.1,506.2,227.7,507.9z M227.2,508.9c-0.9-0.8-1.6-0.8-2.1,0.1c-0.1,0.2,0,0.6,0.1,0.7
                       C226.1,510.3,226.6,509.7,227.2,508.9z M220.3,549.9c0.1-0.2,0.2-0.3,0.3-0.5c-1.1-1.1-1.1-1.1-2.8-0.6
                       C218.9,549.3,219.6,549.6,220.3,549.9z M181.6,527.1c0.2,0.2,0.4,0.3,0.6,0.5c0.8-0.3,1.2-0.9,0.7-2.1
                       C182.5,526,182,526.5,181.6,527.1z M207.9,510.5c0,0.2,0,0.5,0,0.7c0.6,0,1.2,0,1.8,0c0-0.1,0-0.2-0.1-0.5
                       C209.1,510.7,208.5,510.6,207.9,510.5z M217.4,478.3c-0.3-1.2-0.8-1.5-1.8-0.6C216.2,477.9,216.8,478.1,217.4,478.3z M192.1,469.2
                       c0.5-0.5,0.8-0.9,1-1.2c0-0.1-0.5-0.6-0.6-0.6c-0.4,0.2-0.7,0.4-0.9,0.8C191.5,468.3,191.8,468.7,192.1,469.2z M213.4,508.8
                       c0-0.2,0-0.3,0-0.5c-1,0-2,0-2.9,0c0,0.2,0,0.3,0,0.5C211.4,508.8,212.4,508.8,213.4,508.8z M218.3,508.3c-1.4-0.7-1.4-0.7-2.8,0.2
                       C216.6,508.4,217.4,508.4,218.3,508.3z M180.9,525c-0.2-0.1-0.4-0.3-0.6-0.4c-0.2,0.4-0.4,0.9-0.7,1.3c0.1,0.1,0.3,0.2,0.4,0.3
                       C180.4,525.8,180.6,525.4,180.9,525z"
                />
                <path
                  d="M404,121.7c1.6-1.3,30.6-40.8,31.7-43.2c-1.5-0.8-3-1.7-4.5-2.6c-2.2-1.2-2.4-2-1.2-4.1
                       c0.4-0.6,0.7-1.2,1.1-1.7c0.5-0.4,1.1-0.6,2.1-1.1c1.6,0.8,3.5,1.8,5.3,2.8c5.3,2.9,10.3,6,14.4,10.7c3.5,4,7.2,7.8,10.5,12
                       c3.5,4.3,3.9,9.2,3.4,14.3c-0.9,8.4-8.6,14-15.8,14.3c-2.7,0.1-5.5-0.3-8.2-0.4c-1.7-0.1-3.5-0.2-5.5-0.3c-0.2,1.6-0.4,2.9-0.5,4.2
                       c-0.3,6.4-0.6,12.7-0.9,19.1c-0.1,2.3,0.3,4.4,2.4,5.8c0.1,0.1,0.3,0.2,0.4,0.4c4,3.9,4.1,4.4,0.7,9c-3.2-0.9-5.4-2.4-7.6-4.7
                       c-1.2-1.3-2.6-2.4-4-3.5c-1-0.9-2.1-1.9-3.2-2.9c0.3-0.8,0.5-1.5,0.9-2.1c2.3-3.6,2.2-7.8,3.1-11.7c0.9-3.9,1.4-7.8,2.1-11.8
                       c0.1-0.7,0.3-1.4,0.4-2.1c0.3-1.8,0-2.4-1.6-3.2c-2.2-1.1-4.4-2.3-6.6-3.3c-1.7-0.8-2.6-0.7-3.7,0.8c-2.2,3-4.5,5.9-6.5,9.1
                       c-1.8,2.8-1.4,3.6,1.3,5.4c0.5,0.3,1,0.6,1.6,1c-0.4,2.6-2.5,3.8-4.1,5.7c-2.5-0.4-4.6-1.7-6.5-3.2c-3.2-2.5-6.3-5.1-9.5-7.7
                       c-1.7-1.4-1.7-1.7-0.5-3.5c2.7-3.9,3.1-4,7.5-2C402.9,121.3,403.4,121.5,404,121.7z M443.3,84.2c-0.8,1.3-1.4,2.1-1.9,3.1
                       c-2.3,4.2-5.7,7.4-8.9,10.8c-0.7,0.7-1.9,1.1-2.4,1.9c-1.5,2.2-2.8,4.5-4.2,6.7c-0.5,0.8-0.4,1.6,0.5,2c2.3,1.1,4.5,2.4,6.9,3.3
                       c2.6,1,5.6,1.3,8.1,2.4c3.3,1.5,6.6,2,10.1,1.5c1.3-0.2,2.6-0.5,3.7-1.1c3-1.7,5-4,5.3-7.7c0.5-5.4-0.2-10.4-4.7-13.9
                       C451.9,90.2,447.7,87.4,443.3,84.2z M433.8,85.6c1.7-1.4,3.4-2.8,4.5-5C436.5,80.7,435.8,81.5,433.8,85.6z M429.8,94.4
                       c2.2-0.9,3.4-2.9,4.4-4.9C432.3,90.7,430.7,92.3,429.8,94.4z M464.5,104.2c0.2,0,0.5-0.1,0.7-0.1c0.8-1.9-0.5-3.3-2-4.5
                       C463.6,101.1,464.1,102.7,464.5,104.2z M456,119.8c0.2,0.2,0.4,0.4,0.6,0.6c0.6-0.6,1.3-1.2,1.9-1.9c-0.1-0.1-0.3-0.3-0.4-0.4
                       C457.1,118.3,456,118.5,456,119.8z M441.9,117.9c0.1-0.3,0.2-0.6,0.2-0.9c-1-0.2-2-0.5-3-0.7c-0.1,0.2-0.1,0.5-0.2,0.7
                       C439.9,117.3,440.9,117.6,441.9,117.9z M439.4,158.9c-0.6-1.1-1.1-1.8-2.5-1.5C437.3,158.5,437.9,159.2,439.4,158.9z M445.9,81.5
                       c-0.1,0.2-0.3,0.3-0.4,0.5c1.4,1.7,1.4,1.7,3.2,1.5C447.6,82.7,446.7,82.1,445.9,81.5z M447,118.4c-1.3-1.2-1.3-1.2-3-0.5
                       C445.3,118.1,446.1,118.3,447,118.4z M455.2,121.4c0-0.3-0.1-0.6-0.1-0.8c-0.8-0.3-1.6-0.8-2,1.2
                       C453.9,121.6,454.5,121.5,455.2,121.4z M430.4,73.5c0.7,0.4,1.3,0.7,1.7-0.2c0.1-0.2-0.1-0.6-0.2-0.7
                       C431.1,72.1,430.6,72.5,430.4,73.5z M406.7,127.6c0.1,0.2,0.2,0.5,0.3,0.7c0.7-0.1,1.4-0.3,1.5-1.4c0-0.1-0.2-0.3-0.4-0.5
                       C407.7,126.8,407.2,127.2,406.7,127.6z M436.1,118.1c-0.1,0.2-0.1,0.4-0.2,0.6c0.6,0.2,1.2,0.3,1.8,0.5c0-0.2,0.1-0.4,0.1-0.5
                       C437.2,118.4,436.6,118.3,436.1,118.1z M451.6,87.6c0.4,1,0.9,1.4,2,1.3C453.3,87.8,452.8,87.4,451.6,87.6z M406.5,125.6
                       c-0.1-0.2-0.3-0.3-0.4-0.5c-0.3,0.4-0.7,0.7-1,1.1c0.1,0.1,0.2,0.2,0.3,0.4C405.7,126.2,406.1,125.9,406.5,125.6z M432.8,125.9
                       c0.2,0,0.4,0,0.6,0.1c0-0.4-0.1-0.8-0.1-1.2c-0.1,0-0.3,0-0.4,0C432.9,125.1,432.8,125.5,432.8,125.9z"
                />
                <path
                  d="M335.4,105.4c0.5-1.8,0.9-3.2,1.3-4.6c0.3-1.1,1.1-1.6,2.2-1.4c2.1,0.3,4.2,0.6,6.3,1c1.1,0.2,2.2,0.5,3.5,0.8
                       c0.2-0.7,0.5-1.2,0.6-1.8c1.2-4.1,2.4-8.1,3.6-12.2c0.1-0.5,0.4-1,0.8-1.4c2.5-2.7,3.5-6,3.6-9.7c0-1.1,0.5-2.2,1-3.3
                       c2.8-6.9,5.7-13.7,8.6-20.6c0.4-0.9,0.7-1.8,1.2-2.9c-1.3-1-2.6-1.8-3.8-2.7c-1.5,1.6-2.8,2.9-4.1,4.4c-0.8-0.5-1.5-1-2.1-1.4
                       c-1.1-0.7-1.3-1.6-1-2.8c0.7-2.6,1.4-5.3,2.1-7.9c0.3-1.1,1.2-1.3,2-1.4c2-0.2,3.8,0.3,5.6,1.2c1,0.5,2,1.1,3.1,1.5
                       c6.7,2.9,13.5,5.8,20.3,8.7c0.6,0.2,1.1,0.5,1.6,0.9c2.4,1.9,4.9,3.8,7.3,5.8c0.4,0.3,0.9,0.7,1.1,1.1c2.6,4.3,4.2,8.8,3.6,13.9
                       c-0.1,0.8-0.5,1.5-0.8,2.2c-0.1,0.3-0.4,0.6-0.6,0.9c-4.1,5.9-4.3,6-11.2,8.1c-0.9,0.3-1.8,0.6-2.8,0.9c0.2,1.9,1.7,2.8,2.4,4.1
                       c0.7,1.2,1.4,2.4,1.9,3.7c0.7,2.1,1.2,4.3,1.7,6.4c0.6,2.7,0.6,5.5-0.2,8.1c-0.2,0.7-0.6,1.2-0.9,1.9c-0.3,0.7-0.8,1.4-0.8,2.1
                       c0,2-1.2,3.2-2.5,4.5c-1.2,1.3-2.5,2.1-4.4,1.7c-0.7-0.2-1.8,0-2.3,0.4c-1.3,1.2-2.7,1-4.2,1c-0.7,0-2.1-0.8-2.1,1c0,0-0.7,0-1,0
                       c-10.4-0.8-20.1-4.3-29.3-8.8c-2.3-1.1-4.4-2.4-6.9-2.9C338.4,105.8,337.2,105.7,335.4,105.4z M372.2,82.8c-2.4-0.5-4.8-1-7.3-1.4
                       c-2.3-0.4-2.7-0.2-3.7,2c-1,2.2-1.9,4.4-2.7,6.6c-1.5,4.2-3.1,8.3-4.4,12.5c-0.8,2.7-0.4,3.4,2,4.7c2.2,1.2,4.4,2.2,6.6,3.4
                       c2.3,1.3,4.8,1.9,7.4,2c2.4,0.1,4.8,0,7.2,0.1c2.6,0.1,4.9-0.9,7-2.1c1.8-1,3.3-2.5,3.6-4.6c0.4-2.2,0.8-4.3,1-6.5
                       c0.2-3.1-0.8-5.7-3.3-7.7c-0.2-0.2-0.6-0.5-0.6-0.8c0.2-1.6-0.4-2.3-2-2.1c-0.4,0-0.8-0.4-1.1-0.6c-2.5-1.5-5-3-7.5-4.5
                       c-0.4-0.3-0.8-0.6-1.2-1c1.5,0.5,3,0.9,4.5,1.5c1.5,0.5,3,1.1,4.5,1.7c-2.6-3-8.8-5.1-11.3-4C371.4,82.3,371.8,82.6,372.2,82.8z
                       M365.9,75c0.8,0.3,1.2,0.5,1.6,0.5c4.5,1,9,2,13.5,2.9c0.6,0.1,1.3,0.3,1.8,0.1c3.2-1,6.4-2,9.6-3.1c1.4-0.5,2.2-1.7,2.5-3.2
                       c0.4-2,0.9-3.9,1.5-5.9c0.9-3.3-0.2-6.1-3.3-7.7c-5-2.6-10.4-4.5-15.8-5.9c-2.5-0.7-2.6-0.6-3.6,1.7c-2.2,5.6-4.4,11.2-6.6,16.8
                       C366.6,72.4,366.3,73.6,365.9,75z M396.7,70.4c0.2,0,0.4,0.1,0.6,0.1c0.9-2.3,1.5-4.6,1.7-7c0.1-0.9-0.2-1.6-1.1-1.7
                       C397.4,64.8,397,67.6,396.7,70.4z M387.7,86.4c0.6-1.4,0-2.1-0.8-2.7c-1.2-1-2.7-1.3-4.4-1C384.2,83.9,385.8,85.1,387.7,86.4z
                       M374.8,45.6c2,2,4.6,2.9,7,2.3C379.5,46.4,377.4,45.9,374.8,45.6z M381.1,51.8c-2.4-1.8-4.4-2.4-6.5-1.6
                       C376.9,51.1,378.7,52.1,381.1,51.8z M378.2,80.3c0.1-0.2,0.1-0.5,0.2-0.7c-1.9-1-3.7-1.9-5.9-1.7c-0.1,0.2-0.1,0.4-0.2,0.5
                       C374.2,79,376.2,79.6,378.2,80.3z M390,91.7c-0.5,2.1,0,3.4,1.4,4.8C391.8,94.6,391.3,93.4,390,91.7z M370,43.4
                       c1.3,1.2,1.9,2.6,3.7,2C372.5,43.8,372.5,43.8,370,43.4z M378.7,114.7c0,0.2,0,0.5,0,0.7c0.8,0.6,1.6,0.4,2.7-0.8
                       C380.2,114.6,379.5,114.7,378.7,114.7z M390.4,90c-0.2-1.7-0.2-1.7-1.7-2.3C389.3,88.5,389.8,89.1,390.4,90z M375.3,115.2
                       c0,0.2,0,0.4,0,0.6c0.5,0,1-0.1,1.5-0.1c0-0.2,0-0.3,0-0.5C376.3,115.2,375.8,115.2,375.3,115.2z M345.3,104
                       c-0.1,0.2-0.2,0.4-0.3,0.6c0.5,0.2,1,0.4,1.4,0.5c0.1-0.1,0.1-0.3,0.2-0.4C346.2,104.5,345.8,104.2,345.3,104z"
                />
                <path
                  d="M150.3,144.3c1.1,2.7,2.2,5.2,3.5,8.1c1.7-1.2,3-2.2,4.4-3c1.4-0.8,3-1,4.7-0.5c0.5,1.7,0.3,3.4-0.8,4.7
                       c-3.5,4.1-7.7,7.5-11.9,10.9c-1.1-0.9-2.1-1.7-2.8-2.3c-0.3-1.6-0.5-3-0.8-4.5c0.2,0,0.6,0.1,1.2,0.2c-0.1-0.6-0.1-1.3-0.4-1.7
                       c-2.4-3.6-3.6-7.7-5.1-11.6c-1.7-4.4-3.5-8.7-4.8-13.2c-2.1-7.2-5.4-13.9-7.9-20.9c-1.1-3.2-2.2-6.4-3.1-9.6
                       c-1.1-3.9,1.9-9.1,6.8-10.1c0.7-0.1,1.6,0.2,2.2,0.5c8.4,4.9,16.7,9.9,24.7,15.6c6.2,4.4,12.6,8.6,18.9,12.8
                       c0.7,0.5,1.6,0.7,2.4,1.2c1.6,1,3.3,2,5.5,3.4c1.4,0.1,2.5-1.7,4.2-2.7c0.9,1.4,1.8,2.7,2.7,4.1c-1.1,0.8-1.9,1.3-3.2,2.2
                       c1.1,0.2,1.5,0.2,1.8,0.3c0,0.1,0,0.3-0.1,0.4c-1.6,1.5-3.3,2.9-4.8,4.5c-1.7,1.8-3.7,3-6.3,2.8c-1-0.9-2-1.8-3.3-2.9
                       c0.6-0.9,1.3-1.8,2.1-2.9c-0.4-0.5-0.7-1.1-1.2-1.5c-1-0.8-2.1-1.6-3.3-2.2c-5.1-2.6-5.3-2.5-9.2,1.5
                       C161.1,133.3,155.8,138.7,150.3,144.3z M147.6,137.9c2.3-2.6,4.2-4.7,6.1-6.9c1.9-2.1,3.9-4.1,5.9-6.1c2-2.1,4.5-3.6,6.5-6.1
                       c-1.1-0.8-1.9-1.7-2.9-1.8c-2.2-0.2-3.8-1.5-5.5-2.5c-5.1-3-10.1-6.2-15.2-9.2c-1.4-0.9-2.9-1.7-4.4-2.4c-0.5-0.2-1.1-0.2-1.7-0.3
                       c0.5,1.2,1,2.2,1.2,3.2c1.5,6.5,2.9,12.9,4.4,19.4C143,129.5,145.2,133.5,147.6,137.9z M189.6,126.1c0.2,0.1,0.4,0.2,0.6,0.3
                       c0.2-0.4,0.5-0.9,0.7-1.3c-0.2-0.1-0.4-0.2-0.5-0.3C190.1,125.2,189.8,125.6,189.6,126.1z"
                />
                <path
                  d="M475.1,206.1c0.4,1.1,1.1,2.7,1.9,4.5c-1.3,0.7-2.8,1.4-4.3,2.1c-0.6-1.2-1-2-1.6-3.2c-0.4,0.7-0.6,1.1-0.7,1.3
                       c-1.3-1.7-2.5-3.6-3.9-5.2c-1.7-2-2.6-4.2-2.1-6.8c1.1-0.9,2.1-1.8,3.6-3.1c0.6,1,1.2,2.1,1.9,3.2c3.9-2.4,5.8-5.5,7.1-9.1
                       c0.2-0.6-0.3-1.7-0.8-2.3c-4.1-5.5-8.4-11-12.6-16.5c-0.3-0.4-0.5-0.7-0.8-1c-2.3-3-2.3-3-6-2c-1.4,0.4-2.9,0.8-4.7,1.3
                       c0.9,1.7,1.7,3.1,2.3,4.6c0.6,1.5,0.7,3.1,0,4.8c-1.8,0.2-3.5-0.1-4.7-1.6c-3.4-4.1-6.2-8.6-8.9-13.2c1-0.9,1.9-1.7,2.9-2.7
                       c1.3,0.4,2.7,1.2,4.1-0.6c0.1,0.2,0.2,0.4,0.2,0.6c-0.1,0.4-0.2,0.7-0.3,1.2c0.5,0,1.1,0.1,1.5,0c8-3.2,16.5-4.6,25-6.1
                       c7.5-1.3,14.8-3.2,22.2-4.8c3.5-0.7,7-1.3,10.5-1.8c4.6-0.7,8.8,3.3,9.3,8.2c0.1,0.6-0.4,1.4-0.8,1.9c-6,7-11.9,14.1-18,21
                       c-5.4,6.1-11,12-16.6,17.9c-0.5,0.5-0.8,1.2-1.2,1.7C478.3,202.3,476.9,204,475.1,206.1z M483.8,186.2c0.8-1,1.6-1.9,2.3-2.9
                       c0.7-1,1.1-2.2,1.8-3.1c4.5-5.5,9.1-10.9,13.5-16.4c1-1.3,1.9-2.7,3.1-4.4c-1.8,0.4-3,0.7-4.2,0.8c-5.2,0.4-10.4,1-15.6,1.2
                       c-5.2,0.1-10.2,1.3-15,3c-0.6,0.2-1.3,0.6-2,0.9C473.1,172.2,478.3,179,483.8,186.2z M473,208.4c-0.2,0.2-0.3,0.4-0.5,0.5
                       c0.4,0.3,0.8,0.6,1.3,0.9c0.1-0.2,0.2-0.3,0.3-0.5C473.7,209.1,473.3,208.7,473,208.4z"
                />
                <path
                  d="M461.6,479.1c0.9,2.6,1.8,5.2,2.8,7.9c2.1,0,3-1.7,4.6-2.3c1.5-0.6,3-1,4.8-0.5c0.5,1.8,0.3,3.6-1,4.9
                       c-3.8,3.7-7.9,7-12.3,10.1c-1-0.9-1.9-1.7-2.5-2.3c-0.2-1.7-0.4-3.1-0.6-4.5c0.2,0,0.6,0,1.2,0c-0.1-0.5-0.1-1.1-0.3-1.5
                       c-3.7-7.3-5.8-15.2-8-23c-2.1-7.3-4.5-14.4-6.8-21.6c-1.2-3.7-2.3-7.4-3.2-11.2c-1.1-4.5,2.2-9.1,7.2-10.1c0.6-0.1,1.4,0.2,2,0.5
                       c8,5.2,15.9,10.6,23.5,16.5c6.2,4.9,12.5,9.5,18.8,14.3c0.5,0.4,1.1,0.6,1.6,0.9c1.8,1.2,3.6,2.4,6,4c1-0.5,2.5-1.3,4.3-2.3
                       c0.8,1.3,1.6,2.6,2.5,4c-1.1,0.7-2,1.2-3.4,2c1.1,0.2,1.4,0.3,1.8,0.4c0,0.1,0,0.3-0.1,0.4c-1.6,1.3-3.5,2.5-4.8,4
                       c-0.9,1-2.2,0.7-3.1,1.9c-0.6,0.8-2.4,0.7-3.5,1c-0.6-0.8-0.9-1.4-1.4-1.9c-0.4-0.4-1-0.7-1.6-1.2c0.4-0.6,0.6-1.1,1-1.6
                       c0.4-0.5,0.8-0.9,1.4-1.5c-2.4-3.2-5.7-4.8-9.3-5.8c-0.6-0.2-1.5,0.4-2,0.8c-2.8,2.5-5.5,5-8.2,7.5
                       C469,472.3,465.4,475.6,461.6,479.1z M459,472.3c6.6-6.1,12.8-11.9,19.2-17.8c-0.7-1-1.6-1.8-3-2.2c-1-0.3-2-0.7-2.9-1.2
                       c-1.6-1-3.1-2-4.7-3.1c-4.8-3.2-9.5-6.5-14.3-9.7c-1-0.7-2.1-1.6-3.6-1.5c0.4,1.2,0.8,2.2,1,3.2c1.1,6.5,2.2,13.1,3.4,19.6
                       C455,464.1,457,468.1,459,472.3z"
                />
                <path
                  d="M151.6,507.3c1,1.1,2.2,2.4,3.4,3.9c-1.1,1.1-2.2,2.1-3.4,3.2c-0.9-0.9-1.6-1.6-2.6-2.6
                       c-0.1,0.9-0.1,1.4-0.1,1.7c-1.6-1.1-3.2-2.2-4.7-3.4c-0.8-0.7-2.2-0.8-2.2-2.4c0-0.3-1.3-0.4-1.6-0.9c-0.6-0.9-0.8-1.9-1.2-2.7
                       c0.8-1.3,1.4-2.4,2.2-3.8c1,0.4,2,0.9,3.3,1.4c1.6-1.3,2.3-3.3,2.8-5.2c1.6-5.3,1.5-5.5-3.1-8.6c-6.2-4.2-12.5-8.4-19-12.8
                       c-2.3,1.5-4.7,3.1-7.4,4.8c2.3,2.6,5.7,4.3,5.1,8.3c-1.6,0.6-3.3,0.9-4.8,0c-4.5-2.8-8.6-6.1-12.7-9.6c0.7-1.2,1.3-2.3,1.8-3.2
                       c1.4-0.4,2.7-0.8,4.1-1.3c0.3,0.2,0.6,1.3,1.6,0.4c6.9-5.8,14.9-10.1,22.8-14.4c6.1-3.3,11.8-7.3,17.8-10.8c3.2-1.9,6.5-3.7,9.8-5.4
                       c3.9-2,9.5,0.3,11.3,4.9c0.2,0.6,0.1,1.4-0.1,2c-3.3,9.3-6.8,18.4-11,27.3c-3.2,6.8-6.1,13.7-9.1,20.6c-0.5,1-0.6,2.2-1,3.3
                       C153.3,503.6,152.6,505.1,151.6,507.3z M131.6,471c7.5,5,14.6,9.8,21.9,14.7c0.5-1.1,1.3-2.1,1.2-3.1c-0.1-1.9,0.6-3.5,1.2-5.1
                       c2.5-6.6,5-13.2,7.5-19.8c0.4-1.2,1-2.4,0.7-3.6c-1.9,0.9-3.6,1.8-5.3,2.6c-5.3,2.3-10.6,4.5-15.9,6.8
                       C138.7,465.2,135.3,468.1,131.6,471z M151.5,511.5c0.1-0.1,0.2-0.3,0.4-0.4c-0.2-0.2-0.3-0.6-0.6-0.7c-0.3-0.1-0.7,0.1-1.5,0.2
                       C150.7,511.1,151.1,511.3,151.5,511.5z"
                />
                <path
                  d="M290.7,59.3c1.5,5,1.8,9.8,1.8,15c-1.4-0.3-2.6-0.3-3.6-0.7c-0.6-0.3-1.1-1.1-1.3-1.8c-0.4-1.4-1.3-1.9-2.6-1.8
                       c-3.9,0.3-7.8,0.6-11.6,0.9c-1.3,0.1-1.9,0.9-1.7,2.1c0.2,1.6,0.3,3.2,0.6,4.7c1,4.9,1,9.9,0.9,14.8c0,1,0,2.1,0,3.5
                       c1.8-0.2,3.4-0.3,4.9-0.6c6.4-1.5,12.8-1.6,19.3-1.5c1.4,0,2.8,0.5,4-0.8c0.2-0.2,0.9,0,1.6,0.1c0-1.1,0-1.9-1.3-2
                       c-1.2-0.1-1.7-0.8-1.8-1.9c2.2-1.7,4.5-1.8,6.3-0.3c0.4,0.4,0.8,1,0.8,1.6c0.5,3.9,0.9,7.7,1.3,11.6c0,0.2-0.1,0.5-0.2,0.8
                       c-13.5-0.6-26.9,1.1-40.3,1.5c-0.4,0-0.9,0.1-1.3,0.1c-2.3,0-2.9-0.4-3.2-2.6c-0.2-1.8,0-3.7,0-5.7c0.7,0.2,1.3,0.4,1.9,0.4
                       c1.6,0,2.5-0.8,2.4-2.5c-0.1-1.8-0.3-3.5-0.5-5.3c-0.6-5.4-1.1-10.7-1.7-16.1c0-0.4-0.1-0.9-0.3-1.3c-1.4-2.2-1.1-4.6-1.2-7
                       c-0.2-5.5-0.4-11-0.6-16.5c-0.1-2.3-0.7-3-2.9-3.3c-1.4-0.2-2.8-0.3-4.2-0.5c-0.4,0-0.9-0.1-1.2-0.3c-1.2-0.9-1.7-5.5-0.6-6.5
                       c0.5-0.5,1.4-0.8,2.2-0.8c7.9-0.8,15.9-1.6,23.8-2.2c6.1-0.4,12.2-0.4,18.3-0.6c0.6,0,1.2-0.3,1.8-0.4c1.1-0.3,2.2-0.6,3.4-0.8
                       c0.2,0.5,0.5,0.8,0.5,1.1c0.5,3.2,1,6.3,1.3,9.5c0.3,3.3-2,5.8-4.9,5.4c-1.5-0.2-1.9-0.7-1.8-2.3c0.1-1.9-0.3-3.6-2-4.7
                       c-1.4-1-1.4-0.9-3,0.4c-0.4,0.3-0.9,0.4-1.4,0.4c-4.5,0.3-9,0.6-13.5,0.9c-2.4,0.2-4.8,0.3-7.1,0.6c-1.2,0.1-2.4,0.5-3.6,0.8
                       c0.5,3.9,1,7.5,1.5,11c0.3,2.4,0.6,4.7,0.9,7.1c0.2,1.8,0.6,2.2,2.1,2c4.2-0.6,8.5-0.7,12.7-0.4c1.2,0.1,1.7-0.5,1.9-1.7
                       C287.7,60.4,287.8,60.4,290.7,59.3z M267.4,42.3c2.3,1.1,3.8,0.6,5.8-0.6C271,41,269.4,41,267.4,42.3z M282.8,98.6
                       c0,0.2,0,0.4,0.1,0.6c1-0.1,2.1-0.1,3.1-0.2c0.9-0.1,1.9-0.3,2.8-0.4c0-0.1,0-0.3-0.1-0.4C286.8,98.3,284.8,98.5,282.8,98.6z
                       M297.6,37.1c-1.6,0-3.2,0-4.8,0c0,0.2,0,0.4,0,0.6C294.4,37.8,295.9,38.4,297.6,37.1z M256,37.8c0.5,1.8,1.2,1.4,2,0.8
                       c0.2-0.1,0.2-0.4,0.4-0.8C257.5,37.8,256.9,37.8,256,37.8z M262.8,38.8c0.8,1,1.5,1,2.5,0.3C264.4,38.4,263.7,38.1,262.8,38.8z
                       M298.2,98.6c0-0.1,0-0.2,0-0.3c-1.1,0-2.2,0-3.2,0c0,0.1,0,0.2,0,0.3C296,98.6,297.1,98.6,298.2,98.6z M271.1,91.7
                       c0.9-0.7,1-1.3-0.3-2C270.9,90.6,271,91.1,271.1,91.7z M266.8,50.3c0.3-0.1,0.5-0.1,0.8-0.2c-0.2-0.5-0.4-1-0.5-1.5
                       c-0.2,0.1-0.4,0.1-0.6,0.2C266.6,49.2,266.7,49.7,266.8,50.3z M298.6,101.2c0-0.2,0-0.5-0.1-0.7c-0.5,0.1-1,0.2-1.6,0.4
                       c0,0.2,0.1,0.3,0.1,0.5C297.6,101.2,298.1,101.2,298.6,101.2z M301.7,97.2c0,0.1,0.1,0.3,0.1,0.4c0.4-0.1,0.9-0.2,1.3-0.3
                       c-0.1-0.2-0.2-0.4-0.2-0.7C302.4,96.9,302.1,97.1,301.7,97.2z"
                />
                <path
                  d="M347.8,508.8c1.9,4.7,2.3,9.6,3.1,14.7c-2.4-0.1-4.6,0.4-5.4-2.4c-0.3-0.9-1-1.3-1.8-1.2
                       c-4.1,0.6-8.2,1.2-12.3,1.8c-1,0.2-1.5,0.9-1.3,2c0.3,1.6,0.6,3.3,1,4.9c1.1,4.5,1.7,9,1.9,13.7c0.1,1.4,0.3,2.8,0.5,4.5
                       c2.5-0.6,4.7-1,6.9-1.7c5.3-1.6,10.8-2.1,16.3-2.3c1.5-0.1,3.2,0.2,4.5-1.1c0.2-0.2,0.8,0,1.4,0c-0.1-1.1,0-1.9-1.4-2
                       c-0.7,0-1.4-0.8-2.1-1.3c2-2.2,4.5-2.6,6.6-1.2c0.4,0.3,0.7,0.8,0.8,1.3c0.8,3.8,1.5,7.6,2.3,11.5c0.1,0.3-0.1,0.7-0.1,1
                       c-3.4,0.3-6.6,0.4-9.9,0.8c-10.1,1.3-20.2,2.7-30.3,4c-0.4,0.1-0.9,0.2-1.3,0.2c-1.7,0.1-2.4-0.1-2.8-1.8c-0.5-2-0.7-4.1-1-6.5
                       c1,0.1,1.6,0.2,2.1,0.2c1.7-0.2,2.5-1.2,2.2-2.9c-1.3-7-2.6-13.9-3.9-20.9c0-0.2,0-0.4-0.1-0.5c-2.3-4.2-1.9-8.9-2.6-13.4
                       c-0.6-3.5-0.8-7-1.1-10.6c-0.2-2.2-1-3-3.2-3.1c-1.3-0.1-2.7-0.2-4-0.1c-1.2,0.1-1.8-0.4-2.2-1.4c-0.1-0.3-0.2-0.7-0.3-1
                       c-1.1-3.9-0.6-4.7,3.3-5.3c10.8-1.7,21.5-3.4,32.3-5.1c2.5-0.4,5.1-0.5,7.7-0.7c0.7-0.1,1.4-0.3,2-0.5c1.1-0.4,2.1-0.8,3.1-1.1
                       c0.3,0.2,0.5,0.3,0.5,0.4c0.8,3.4,1.8,6.9,2.3,10.3c0.5,3.2-1.6,5.5-4.3,5.5c-1.7,0-2.2-0.6-2.1-2.3c0.1-1.9-1.4-4.5-3.1-4.9
                       c-0.6-0.2-1.4,0-2,0.2c-0.2,0.1-0.2,0.7-0.3,1.1c-8.3,1.5-16.8,1.9-25.2,4.3c0.5,2.3,1.1,4.4,1.5,6.4c0.8,3.8,1.5,7.6,2.3,11.5
                       c0.4,1.9,0.9,2.4,2.7,1.9c3.9-1.1,7.9-1.1,11.9-1.3c1.3-0.1,2.2-0.4,2-1.8C344.4,510.4,345.6,509.5,347.8,508.8z M328.5,492.8
                       c-1.7-0.7-3.3-0.5-5,0.9C325.6,494.6,327.1,493.9,328.5,492.8z M342.9,548.5c0.1,0.2,0.1,0.5,0.2,0.7c2-0.3,4-0.7,6-1
                       c0-0.2-0.1-0.4-0.1-0.5C347,548,344.9,548.3,342.9,548.5z M348.2,486.8c1.6,0.3,3.2,0.7,4.9-0.4
                       C351.4,485.9,351.4,485.9,348.2,486.8z M311.6,490.2c1,1.6,1.7,1.1,2.2,0.3c0.1-0.1,0-0.3-0.1-0.6
                       C313.1,489.9,312.5,490,311.6,490.2z M358.1,547.6c0-0.2,0-0.4,0.1-0.6c-1.1,0.1-2.1,0.1-3.2,0.2c0,0.1,0,0.3,0,0.4
                       C356.1,547.6,357.1,547.6,358.1,547.6z M320.6,491.1c0-0.3,0-0.5,0-0.8c-0.6,0-1.2,0-1.8,0c0,0.2,0,0.5,0,0.7
                       C319.3,491,319.9,491.1,320.6,491.1z M361.5,545.5c0.1,0.2,0.1,0.5,0.2,0.7c0.4-0.2,0.9-0.3,1.3-0.5c0,0-0.1-0.4-0.1-0.4
                       C362.4,545.4,362,545.4,361.5,545.5z M332.3,549.5c0,0.2,0.1,0.4,0.1,0.6c0.7,0.2,1.4,0.4,1.8-1
                       C333.5,549.3,332.9,549.4,332.3,549.5z M323.5,500c-0.2,0.1-0.4,0.2-0.6,0.3c0.2,0.5,0.4,0.9,0.6,1.4c0.2-0.1,0.4-0.2,0.6-0.2
                       C323.9,500.9,323.7,500.5,323.5,500z M330.7,542.5c0.2,0,0.5,0,0.7,0c-0.1-0.6-0.2-1.1-0.3-1.7c-0.2,0-0.4,0-0.6,0.1
                       C330.6,541.5,330.6,542,330.7,542.5z M357.2,549.5c0,0.2,0.1,0.4,0.1,0.7c0.5-0.2,1-0.3,1.5-0.5c0-0.2-0.1-0.3-0.1-0.5
                       C358.2,549.3,357.7,549.4,357.2,549.5z M328.4,551.4c0,0.2,0,0.3,0,0.5c0.5,0,1.1,0,1.6,0c0.1,0,0.2-0.4,0.4-0.9
                       C329.6,551.2,329,551.3,328.4,551.4z M356.3,491.9c-0.2-0.2-0.4-0.3-0.5-0.5c-0.1,0.2-0.3,0.5-0.3,0.7c0,0.1,0.3,0.2,0.5,0.4
                       C356,492.3,356.2,492.2,356.3,491.9z"
                />
                <path
                  d="M78.6,173.5c-2.3,1.2-2.3,1.2-3.2,3.2c0.8,0.9,1.5,1.8,2.3,2.8c0.6,0.8,0.9,1.6,0.1,2.4
                       c-0.8,0.8-1.5,1.8-2.9,1.3c-0.7-0.3-1.3-0.6-1.9-0.9c-1.6-0.7-3.2-1.5-4.9-2c-1.2-0.4-1.8-1.1-1.5-2.1c0.3-1.6,0.8-3.3,1.5-4.7
                       c0.9-1.8,2.2-3.4,3.3-5.1c3.1-5,6.1-10,9.2-14.9c0.6-1,1.6-1.9,2.4-2.8c0.9-0.9,2-1.5,2.7-2.5c2.6-3.5,6.3-4.7,10.4-5.1
                       c1.4-0.1,2.8-0.1,4.2-0.1c0.9,0,1.9,0.1,2.5,0.6c3.4,2.4,6.7,4.9,7.6,9.4c0.3,1.5,0.4,3,0.7,4.5c0.1,0.6,0.3,1.2,0.6,2.1
                       c1.5-0.8,2.7-1.5,4.1-2.1c1.2-0.5,2.4-1,3.7-1.2c2-0.3,4-0.5,6.1-0.7c2.5-0.2,5,0,7.2,1.3c1.7,1,3.2,2.2,5.2,2.8
                       c1.1,0.4,1.7,2,2.6,2.9c1.1,1.2,0.8,2.4,0.4,3.7c-0.2,0.5-0.2,1.2,0,1.6c1.1,1.6,0.7,3.3,0.4,5c-0.1,0.4-0.1,1,0.1,1.3
                       c0.8,1,0.3,1.8,0,2.7c-1.9,8.6-6.5,16-11,23.4c-0.2,0.4-0.4,0.9-0.8,1.1c-2,1.1-2.4,3.2-3.2,5c-0.5,1.1-0.7,2.4-1,3.6
                       c-2.1,0.5-3.6-0.7-5-1.8c-0.4-0.3-0.4-1.4-0.2-2c0.5-1.8,1-3.6,1.6-5.3c0.3-1,0.8-1.9,1.2-3c-3.9-1.9-7.6-3.7-11.4-5.5
                       c-0.7-0.3-1.5-0.7-2-1.2c-2.3-2.6-5.1-4-8.4-4.6c-0.9-0.2-1.8-0.7-2.6-1.2c-5.9-3.5-11.7-7-17.6-10.5
                       C80.3,174.6,79.4,174,78.6,173.5z M110.5,172.5c1-2.4,2.1-4.9,3.1-7.3c-0.6,0.1-1,0.3-1.2,0.6c-1.4,2.5-2.8,5.1-4.1,7.7
                       c-0.4,0.8-0.4,1.6,0.8,1.8c-0.6,1.5-1.2,3-1.6,4.5c-0.9,2.9-0.9,3.2,1.7,4.7c4.7,2.8,9.6,5.4,14.4,8c0.6,0.3,1.3,0.6,1.9,0.9
                       c2,0.7,2.8,0.5,4.1-1.2c1.1-1.5,2.1-3.1,3.3-4.5c3.9-4.7,4.8-10.4,5-16.2c0.2-5-2.3-8.2-7-9.7c-1.7-0.5-3.4-0.8-5.2-1
                       c-1.9-0.2-3.7,0.4-5.3,1.5c-0.7,0.5-1.2,1.3-2.4,0.9c-0.3-0.1-0.9,0.8-1.3,1.3c-0.3,0.4-0.4,0.9-0.7,1.3
                       C114.2,168.1,112.3,170.3,110.5,172.5z M101.6,178.8c0.4-0.9,0.7-1.4,0.9-2c1.4-3.6,2.7-7.3,4.1-10.9c0.2-0.7,0.6-1.4,0.5-2
                       c-0.4-3.1-0.9-6.1-1.5-9.1c-0.3-1.5-1.3-2.4-2.8-2.9c-1.9-0.7-3.7-1.6-5.6-2.4c-2.5-1-5.3-0.3-6.9,1.8c-3.3,4.4-5.8,9.3-7.9,14.4
                       c-0.8,1.9-0.7,2.1,1.1,3.2c5.1,3,10.3,5.9,15.5,8.8C99.7,178,100.5,178.3,101.6,178.8z M93.6,147.7c2.7,0.8,5.2,1.5,7.6,2.2
                       C97.8,147,95.3,146.4,93.6,147.7z M110.7,164.8c1.6-1.7,2.8-3.1,4.4-4.8C112.2,160.2,111,161.5,110.7,164.8z M75.6,166.1
                       c0.3,0.1,0.5,0.2,0.8,0.3c0.8-1.5,1.7-3,2.5-4.6c0.1-0.3-0.2-0.7-0.3-1.1c-0.2,0-0.4,0-0.6,0C77.2,162.5,76.4,164.3,75.6,166.1z
                       M79.6,166.9c1.6-1.3,2.3-3.1,2.5-5.1C80.6,163.1,79.8,164.8,79.6,166.9z M104.6,173c0.2,0.1,0.3,0.2,0.5,0.3c1.8-2,2.4-3.6,2.1-5.7
                       C106.2,169.7,105.4,171.4,104.6,173z M72.8,169.9c0.2,0.2,0.5,0.3,0.7,0.5c0.5-1,2.3-1.1,1.5-3.5C74.2,168.2,73.5,169.1,72.8,169.9z
                       M120.6,158.7c0,0.3,0.1,0.6,0.1,0.8c1.2-0.2,2.4-0.4,3.6-0.6C122.9,157.4,121.7,157.9,120.6,158.7z M140.6,170
                       c-0.9,1.3-0.9,1.3-0.1,2.4C140.6,171.7,140.6,171.1,140.6,170z M116.2,158.9c0.1,0.1,0.1,0.3,0.2,0.4c0.5-0.2,1-0.3,1.5-0.6
                       c0.1-0.1,0.1-0.4,0.1-1C117.2,158.2,116.7,158.5,116.2,158.9z"
                />
                <path
                  d="M114.8,387.9c-1.2,0.4-2.3,0.8-3.4,1.1c-0.9,0.3-1.8,0.3-2.3-0.8c-0.4-1-1.2-2.1-0.1-3.2c0.5-0.5,1-1,1.5-1.5
                       c1.2-1.2,2.6-2.4,3.7-3.8c0.9-1.1,1.8-1.2,2.8-0.6c1.3,0.9,2.6,1.9,3.6,3.1c1.5,1.8,2.8,3.9,4.2,5.8c1.9,2.6,3.6,5.3,5.7,7.7
                       c3.8,4.4,6,9.5,8,14.8c0.6,1.7,1,3.4,0.5,5.2c-0.7,2.5-1.2,5-2,7.4c-0.7,2-2.3,3.2-4.2,4.2c-4.1,2-8.2,2.8-12.5,1.1
                       c-0.8-0.3-1.7-0.4-2.6-0.5c-1,1.6,0,3-0.1,4.5c-0.1,1.3,0,2.6-0.2,3.9c-0.4,2-1,3.9-1.6,5.9c-0.8,2.5-2,4.8-4,6.4
                       c-1.4,1.2-3.1,2-4.4,3.6c-0.7,0.9-2.4,0.8-3.6,1.3c-1.5,0.6-2.4-0.5-3.6-0.8c-2.7-0.8-5.3-1.8-8-2.7c-0.5-0.2-1.2-0.2-1.6-0.5
                       c-7.6-5.2-13.1-12.4-18.4-19.7c-1-1.5-1.5-3.4-3-4.6c-1.4-1.1-2.7-2.2-4.1-3.3c0.6-1.8,2-2.8,3.4-3.6c0.4-0.3,1.4-0.1,1.9,0.3
                       c1.6,1.1,3.1,2.4,4.6,3.6c0.8,0.7,1.5,1.5,2.3,2.3c3.2-3,6.3-5.8,9.4-8.7c0.7-0.6,1.5-1.2,2.4-1.5c2.6-1,4.4-2.9,6.2-4.8
                       c1-1.1,1.8-2.4,3-3.3c5.4-4.2,10.8-8.3,16.3-12.4C117.2,391.6,117.3,390.7,114.8,387.9z M105.3,421.6c-1.8-1.7-3.5-3.5-5.3-5.2
                       c-2.2-1.9-2.7-2-5-0.1c-4.3,3.3-8.4,6.8-12.6,10.2c-0.7,0.6-1.3,1.2-1.9,1.9c-1.2,1.4-1.3,2.3-0.3,3.9c1.1,1.8,2.3,3.6,3.4,5.4
                       c1.6,2.8,3.8,4.9,6.4,6.6c1.6,1,3.4,2,5,3c2,1.2,4.2,1.4,6.4,1.4c1.5,0,3-0.3,4.2-1.3c2.3-2,4.2-4.4,5.4-7.1
                       c0.5-1.2,0.6-2.8,0.6-4.2c0.1-1.3-1.3-2.6-0.2-4c0.1-0.2-0.4-0.9-0.7-1.3c-0.3-0.4-0.8-0.7-1-1.1
                       C108.3,426.9,106.8,424.2,105.3,421.6c1,0.9,2,1.9,3,2.9c1,1,1.5,2.5,3.1,3.3c-1.1-3.6-4.7-7.8-7.8-8.8
                       C104.4,420.1,104.8,420.8,105.3,421.6z M102.8,411c1,1,1.3,1.4,1.7,1.8c2.9,2.7,5.8,5.4,8.8,8c0.6,0.5,1.2,1.1,2,1.3
                       c2.8,0.7,5.7,1.3,8.5,1.9c1.5,0.3,2.7-0.2,3.8-1.4c1.4-1.6,3-3,4.4-4.5c1.7-1.8,2.1-4.7,0.8-6.8c-2.9-4.7-6.5-8.8-10.3-12.7
                       c-1.5-1.5-1.8-1.4-3.4-0.2c-4.6,3.7-9.2,7.4-13.9,11.1C104.5,409.9,103.8,410.4,102.8,411z M129.9,422c2.4-1,4-2.8,5.2-4.8
                       c0.2-0.4,0-1,0-1.9C133.2,417.7,131.6,419.9,129.9,422z M115.4,430.7c1.1-2.6,0.1-4.5-2.6-5.4C113.7,427.1,114.5,428.8,115.4,430.7z
                       M124.3,392.3c1.2,3.1,2.3,4.3,4.2,4.5C127.6,394.8,126,393.5,124.3,392.3z M107,416.8c1.1,1.6,2,3.3,4.4,4.4
                       C110,419,108.9,417.6,107,416.8z M122.2,395.5c0.8,1.8,2,3.3,3.9,4C125.2,397.8,124.2,396.2,122.2,395.5z M113.4,440
                       c1.6-1.5,1.7-1.9,0.8-3.6C113.3,437.5,113,438.7,113.4,440z M121.2,388c0.5,1.5,0.3,2.9,2.2,3.3C123.4,389.7,122.9,388.8,121.2,388z
                       M116.1,434.3c0.1,0,0.3-0.1,0.4-0.1c-0.1-0.5-0.1-1.1-0.2-1.6c-0.5,0.2-0.7,0.5-0.7,0.8C115.7,433.7,115.9,434,116.1,434.3z
                       M96.3,450.9c0.1-0.2,0.3-0.4,0.4-0.6c-0.4-0.8-1-1.1-2.6-0.7C95.1,450.2,95.7,450.5,96.3,450.9z M91.9,448c0,0.2-0.1,0.4-0.1,0.6
                       c0.4,0.1,0.9,0.2,1.7,0.4c-0.5-0.6-0.6-0.8-0.8-0.9C92.5,448,92.2,448.1,91.9,448z"
                />
                <path
                  d="M534.5,414.4c-5.3,8.4-10.6,16.6-16,25.2c-1.4-0.7-3.1-1.4-4.9-2.2c0.2-0.6,0.4-1.1,0.6-1.7
                       c-0.5-0.1-0.9-0.2-1.3-0.3c0.8-2.9,1.9-5.5,3.4-8c1.4-2.4,1.5-2.5-0.6-4.1c-4.2-3.2-8.3-6.2-13-8.6c-10.4-5.3-20.8-10.6-30.7-17.3
                       c-0.8,0.9-1.7,1.8-2.4,2.8c-1.5,2.4-3,4.8-4.4,7.3c-0.7,1.1-0.5,2.1,0.4,3.1c1.4,1.4,2.7,2.8,4.2,4.4c-0.6,1.4-1.1,2.8-1.8,4.5
                       c-0.9-0.5-1.5-0.9-2.2-1.3c-2.6-1.5-5.2-3.1-7.8-4.6c-0.8-0.4-1.5-0.7-1.6-1.9c0-1.8,0-2,1.5-3.1c-0.6-2.2,0.1-4.3,1.4-6.1
                       c1.9-2.7,3.7-5.4,5.7-8c6.4-8.5,12.5-17.2,17.5-27c1,0.4,2.1,0.7,3.1,1.2c2,1,3.9,2,5.9,3c1.5,0.8,3,1.6,3.1,3.5c0.7,0,1.1,0,1.5,0
                       c0.4,0.9-0.4,3-1.3,3.9c-0.8,0.8-1.6,0.6-2.4,0.1c-1.4-0.9-2.9-1.7-4.3-2.6c-1.6-1-1.9-1-3.1,0.5c-1,1.3-1.8,2.6-2.7,4
                       c-1.6,2.5-3.2,5.1-4.9,7.9c1,0.9,1.9,1.9,3,2.6c8.9,6.1,17.9,12.1,26.9,18.1c1.2,0.8,2.2,1.7,3.3,2.6c0.1,0.1,0.2,0.3,0.4,0.4
                       c3.4,0.8,5.5,3.8,8.4,5.3c1.3,0.7,2.3,0.8,3.2-0.3c1.4-1.7,2.9-3.4,4.3-5c0.5-0.6,1-1.3,1.6-1.7c0.5-0.3,1.5-0.3,1.9,0
                       C531.9,411.7,533.2,413.1,534.5,414.4z M494.8,407.4c1.9,2.8,6.5,5.6,9.2,5.9c0-0.2,0.1-0.4,0-0.5c-2.5-1.6-5-3.2-7.6-4.8
                       C496,407.8,495.5,407.7,494.8,407.4z M488.1,399.3c2.3,2.5,4.3,3.6,6.5,3.6C492.7,401,490.4,400.3,488.1,399.3z M474.5,385.9
                       c1.5-0.7,2.3-1.9,2.4-3.5C475.6,383.2,474.7,384.3,474.5,385.9z M475.8,397.4c-0.9-2.4-1.1-2.6-2.7-1.3
                       C474,396.5,474.7,396.9,475.8,397.4z M516.1,431.4c0.2,0.1,0.4,0.1,0.5,0.2c0.3-0.7,0.7-1.3,1.2-2.4C516,430,516,430,516.1,431.4z
                       M529.7,412.6c-0.2-0.1-0.4-0.3-0.6-0.4c-0.6,0.8-1.1,1.6-1.7,2.4c0.2,0.1,0.4,0.3,0.6,0.4C528.6,414.1,529.2,413.4,529.7,412.6z
                       M507.5,413.7c-0.1,0.3-0.3,0.6-0.4,0.8c0.7,0.3,1.4,0.6,2.2,0.8c0.1-0.2,0.2-0.4,0.3-0.6C508.8,414.4,508.2,414,507.5,413.7z
                       M529.7,416.5c-1.9,0.2-1.9,0.2-1.7,2.1C528.6,417.8,529.1,417.3,529.7,416.5z M518.2,435.7c-0.2,0.1-0.4,0.2-0.6,0.3
                       c0.2,0.4,0.5,0.8,0.7,1.2c0,0,0.4-0.2,0.6-0.2C518.7,436.5,518.4,436.1,518.2,435.7z M519,432.5c0.2,0.1,0.3,0.2,0.5,0.4
                       c0.6-0.5,1.4-0.9,0.9-2.5C519.8,431.2,519.4,431.8,519,432.5z M476,391c-1.2,1.2-1,1.9,0,3C476,392.8,476,392.2,476,391z
                       M524.1,425.2c-0.2-0.2-0.4-0.3-0.6-0.5c-0.4,0.6-0.7,1.3-1.1,1.9c0.2,0.1,0.3,0.2,0.5,0.3C523.3,426.3,523.7,425.7,524.1,425.2z
                       M464.8,412.4c-0.3-0.3-0.5-0.7-0.7-0.7c-0.2,0-0.5,0.3-0.7,0.4c0.2,0.2,0.4,0.5,0.7,0.7C464.1,412.8,464.4,412.6,464.8,412.4z"
                />
                <path
                  d="M95.8,308c0.9-0.7,1.2-1.1,1.7-1.3c1.8-0.5,2.5-1.9,2.5-3.6c0-5.4,0-10.8,0-16.2c0-1.8-0.6-3.3-2.6-3.8
                       c-0.4-0.1-0.7-0.5-1-0.8c0.3-0.3,0.4-0.5,0.5-0.5c5.4,0.1,10.8-0.2,16.1,0.5c6.6,0.9,10.4,5.6,10.6,12c0.3,6.3-3.4,11.4-9.7,13.2
                       c-1.4,0.4-2.9,0.7-4.4,0.7c-3.9,0.1-7.8,0.1-11.7,0C97.3,308.2,96.9,308.1,95.8,308z M104.1,283.5c0,6.8-0.1,13.4,0,20
                       c0,2.1,1.1,2.9,3.2,3.2c4.8,0.7,9-1.8,10.8-6.3c1-2.5,1.1-5.1,0.8-7.8C118.1,284.8,110.6,281.6,104.1,283.5z"
                />
                <path
                  d="M384.4,292.5c0.8-0.4,1.1-0.6,1.5-0.8c1.3-0.5,2.7-0.9,4.1-1.3c0.3,0.8,0.5,1.4,0.8,2.1c0.9-0.5,1.7-1,2.5-1.3
                       c3.2-1.5,6.4-0.5,8.1,2.6c2.3,4.2,1,10.4-2.8,13.2c-1.7,1.3-3.6,1.8-5.7,1.4c-0.7-0.2-1.4-0.3-2.2-0.5c-0.6,2.9-0.6,5.3,2.5,6.8
                       c-1.6,1-5.9,1.2-8.4,0.4c0-0.2-0.1-0.5,0-0.5c2.3-1.1,2.6-3,2.6-5.3c-0.1-4.8-0.1-9.6-0.1-14.3c0-0.2-0.1-0.3-0.2-0.7
                       C386.4,293.8,385.6,293.3,384.4,292.5z M390.4,299.1c0,0,0.1,0,0.1,0c0,1.5-0.1,3,0,4.5c0.3,2.2,1.4,3.3,3.2,3.6
                       c1.9,0.3,3.7-0.5,4.5-2.5c1.4-3.1,1.3-6.3-0.3-9.4c-0.4-0.7-1-1.3-1.6-1.7c-1.5-1.1-3.2-0.8-4.8-0.1c-1.5,0.7-1.3,1.9-1.3,3.1
                       C390.4,297.5,390.4,298.3,390.4,299.1z"
                />
                <path
                  d="M176.5,306.9c0-2.3,0-4.2,0-6.1c0-4.2-0.1-8.3,0-12.5c0.1-2.1,0-4.1-2.8-4.9c1.9-1.5,3.8-1.9,6-2.1
                       c0,3.8,0,7.4,0,11.4c1.1-0.6,1.8-0.9,2.6-1.3c3.8-1.9,7.6-0.4,9,3.6c0.9,2.5,0.8,5-0.1,7.5c-1.7,4.5-5,6.5-9.7,5.8
                       C179.9,308,178.4,307.4,176.5,306.9z M179.7,299.3C179.7,299.3,179.7,299.3,179.7,299.3c0.1,1.3,0,2.7,0.1,4c0.2,2.3,1.4,3.6,3.3,4
                       c2,0.4,3.9-0.5,4.7-2.6c1.2-3,1.2-6.1-0.2-9c-1.2-2.6-3.6-3.3-6.2-2.2c-1.1,0.5-1.7,1.1-1.6,2.4C179.8,297,179.7,298.1,179.7,299.3z
                       "
                />
                <path
                  d="M362.4,308c-2.7,0-5.3,0-8.4,0c0.4-0.5,0.5-1.1,0.9-1.2c1.3-0.5,1.7-1.5,1.8-2.7c0.1-2.9,0.1-5.8,0-8.8
                       c0-0.6-0.6-1.2-1-1.7c-0.4-0.4-0.9-0.7-1.9-1.3c2.1-0.7,3.8-1.3,5.7-2c0.3,0.8,0.5,1.4,0.8,2.1c1.2-0.6,2.2-1.2,3.4-1.6
                       c3.9-1.4,6.5,0.3,6.8,4.4c0.1,1.8,0.1,3.5,0.1,5.3c0,4.3,0,4.3,2.2,7.1c-1.6,0.7-3.9,0.8-7.9,0.3c0.3-0.5,0.4-1.1,0.7-1.2
                       c1.3-0.5,1.7-1.5,1.7-2.7c0-2.9,0.1-5.8,0-8.8c-0.1-2.1-1.1-2.8-3.2-2.5c-0.9,0.1-1.9,0.5-2.8,0.9c-0.9,0.3-1.3,1-1.3,2.1
                       c0,2.7,0,5.5,0,8.2c0,1.2,0.4,2.2,1.7,2.8c0.4,0.1,0.6,0.5,1,0.7C362.6,307.6,362.5,307.8,362.4,308z"
                />
                <path
                  d="M162.5,308.1c-2.9,0-5.5,0-8.3,0c0.3-0.5,0.4-1.1,0.7-1.2c1.4-0.5,1.9-1.6,1.9-2.9c0.1-2.7,0.1-5.5,0-8.2
                       c-0.1-2.5-1.2-3.3-3.7-2.9c-2.9,0.5-3.7,1.4-3.7,4.3c0,1.9,0,3.9,0,5.8c0,1.8,0.2,3.4,2.3,4c0.2,0.1,0.2,0.4,0.3,0.7
                       c-1.6,0.7-4.8,0.8-8.4,0.3c0.3-0.5,0.5-1,0.8-1.2c1.4-0.6,1.8-1.6,1.9-2.9c0.1-2.8,0.1-5.7,0-8.5c0-0.6-0.5-1.2-0.9-1.7
                       c-0.4-0.4-1-0.7-1.7-1.1c1.7-1.4,3.6-1.6,5.5-2.1c0.2,0.8,0.4,1.4,0.6,2.1c1.4-0.6,2.5-1.3,3.7-1.7c3.8-1.2,6.3,0.5,6.5,4.5
                       c0.1,1.8,0,3.5,0,5.3C160,304.9,160,304.9,162.5,308.1z"
                />
                <path
                  d="M414.9,297.7c0-1.4,0.1-2.4,0-3.5c-0.3-1.7-1.5-2.6-3.2-2.5c-2,0-2.8,1.1-2.4,3.1c0.1,0.3,0.1,0.7,0.3,1.3
                       c-0.8,0.3-1.5,0.7-2.3,1c-1.5-2.4-1.3-3.9,0.6-5.2c2-1.3,4.3-1.7,6.6-1.3c2.4,0.4,3.4,1.4,3.5,3.9c0.1,3.1,0,6.2,0.1,9.3
                       c0,1.9,0.1,1.9,2.1,2.4c0.3,1.5-0.8,2-1.9,2.4c-1.8,0.7-2.5-0.8-3.6-1.9c-0.6,0.3-1.2,0.7-1.8,1c-0.4,0.2-0.8,0.4-1.2,0.5
                       c-2.3,0.8-4.7,0-5.6-1.7c-1-1.8-0.2-4.4,1.9-5.8c1.2-0.8,2.7-1.3,4-1.9C412.9,298.4,413.8,298.1,414.9,297.7z M415,299.9
                       c-2.2,0-4.2,0.8-5.2,1.9c-0.8,0.9-1.1,1.8-0.6,2.9c0.6,1.1,1.6,1.6,2.9,1.4c1.7-0.2,2.8-1.4,2.9-3.1C415,301.9,415,300.9,415,299.9z
                       "
                />
                <path
                  d="M307.4,306.3c-1.1,3-2.9,3.2-5.5,0.3c-0.5,0.3-1,0.6-1.5,0.9c-0.5,0.2-0.9,0.5-1.4,0.7c-2.3,0.8-4.7,0-5.6-1.7
                       c-1-1.9-0.3-4.4,1.9-5.8c1.2-0.8,2.7-1.3,4-1.9c0.9-0.4,1.8-0.7,2.9-1c0-1.2,0.1-2.3,0-3.5c-0.2-1.7-1.5-2.6-3.2-2.5
                       c-2,0-2.8,1-2.4,3.1c0,0.2,0.1,0.3,0.1,0.5c0,0.2,0,0.3,0,0.8c-0.6,0.3-1.4,0.6-2.1,0.9c-1.5-2.3-1.3-4,0.6-5.2
                       c2.4-1.6,5.1-1.9,7.9-1c1.7,0.5,2.2,1.9,2.2,3.6c0,2.9,0,5.8,0,8.8C305.3,305.5,305.3,305.5,307.4,306.3z M302.3,299.7
                       c-2.2-0.1-3.7,0.7-5,1.9c-0.9,0.8-1.3,1.9-0.7,3.1c0.6,1.1,1.9,1.6,3.2,1.3c1.7-0.4,2.5-1.4,2.6-3.1
                       C302.3,301.9,302.3,300.8,302.3,299.7z"
                />
                <path
                  d="M130,297.6c-0.5,2.1,0.1,3.8,1.2,5.4c1,1.5,2.4,2.8,4.4,2.6c1.7-0.2,3.4-1,5.4-1.5c-0.6,2.3-2.1,3.3-3.8,4
                       c-3.8,1.7-8.3-0.3-9.8-4.3c-1.1-2.9-1-5.7,0.2-8.5c1.4-3.3,4.4-5.2,7.5-4.8c3.2,0.4,5.3,2.6,6.1,6.7
                       C137.5,297.8,133.7,297,130,297.6z M137.1,295.9c0.1-2.5-1-3.9-3.1-4.1c-2.1-0.2-3.6,1.3-3.9,4.1
                       C132.5,295.9,134.8,295.9,137.1,295.9z"
                />
                <path
                  d="M340.5,297.6c-0.5,2,0,3.5,0.8,4.9c1.7,3.1,4.5,3.9,7.7,2.4c0.7-0.3,1.3-1.3,2.3-0.7c-1.2,4.5-8,6.1-11.7,2.2
                       c-3.7-3.8-3-11.6,1.3-14.7c2.1-1.5,4.4-1.9,6.8-0.7c2.4,1.1,3.7,3.1,4,6.1C348,297.8,344.3,297,340.5,297.6z M347.8,296
                       c-0.3-2.9-1.5-4.2-3.5-4.3c-2,0-3.3,1.3-3.7,4c0.6,0.1,1.2,0.2,1.8,0.2C344.1,296,345.9,296,347.8,296z"
                />
                <path
                  d="M209.5,297.5c-3.8,0-7.4,0-10.9,0c-0.6,3.2,0.6,6,2.8,7.5c2.8,1.8,5.2,0.1,8.1-1.4c-0.4,1.1-0.5,1.6-0.8,2
                       c-1.9,2.4-4.4,3.6-7.4,3c-3.2-0.6-5.2-2.7-5.9-5.8c-0.8-3.6-0.4-7.1,2.2-10c2-2.2,4.8-2.9,7.5-1.9
                       C207.8,291.8,209.3,294,209.5,297.5z M205.8,296c-0.4-3-1.6-4.2-3.6-4.3c-2,0-3.3,1.4-3.6,4.1c0.7,0.1,1.4,0.2,2,0.2
                       C202.3,296,204,296,205.8,296z"
                />
                <path
                  d="M253.8,297.5c-3.8,0-7.4,0-11,0c-0.6,2.2,0,3.9,1,5.5c1,1.6,2.5,2.9,4.6,2.7c1.7-0.2,3.4-1,5.2-1.6
                       c-1,4.4-7.5,6.2-11.3,2.8c-4.3-3.7-3.6-12.3,1.2-15.4C247.8,288.6,253.2,291.4,253.8,297.5z M250,295.9c-0.4-2.8-1.6-4.1-3.6-4.1
                       c-2,0-3.3,1.4-3.6,4.1C245.1,295.9,247.5,295.9,250,295.9z"
                />
                <path
                  d="M488.1,297.3c-3.9,0.1-7.6,0.1-11.1,0.2c-0.5,3.2,0.7,6,2.9,7.4c2.7,1.7,5,0.2,7.8-1.1
                       c-0.2,0.8-0.2,1.4-0.4,1.7c-1.8,2.4-4.2,3.6-7.2,3.1c-3.1-0.5-5.1-2.4-6-5.3c-0.9-2.8-0.7-5.6,0.5-8.3c1.5-3.1,4.4-4.9,7.4-4.6
                       C485.2,290.8,487.4,293.1,488.1,297.3z M477.1,295.8c2.3,0,4.6,0,7,0c-0.1-2.6-1.3-4-3.3-4C478.7,291.7,477.3,293.2,477.1,295.8z"
                />
                <path
                  d="M431.9,307.9c0-0.3,0-0.4,0.1-0.5c2.6-1.3,2.6-3.6,2.6-6c-0.1-4.2,0-8.3,0-12.5c0-3.6,0-3.6-2.4-5.7
                       c1.6-1.2,3-1.6,5.6-1.8c0,1,0,1.9,0,2.9c0,5.9,0,11.9,0,17.8c0,2.2,0.1,4.2,2.5,5.3c0.1,0,0,0.3,0,0.5
                       C438.3,308.4,434.7,308.4,431.9,307.9z"
                />
                <path
                  d="M222.2,295.8c-0.6-1.1-1-1.8-1.4-2.4c-1-1.5-2.6-2.1-4.1-1.7c-1.5,0.4-2.2,1.8-1.3,3c0.7,1,1.8,1.7,2.7,2.4
                       c1.2,0.9,2.6,1.5,3.8,2.5c3,2.5,2.5,6.5-1,8.3c-2.6,1.3-5.2,0.8-7.5-0.7c-1.2-0.8-1.3-2.6-0.3-4.7c1.1,0.3,1,1.4,1.3,2.1
                       c0.6,1.3,1.4,2.2,2.8,2.5c1.4,0.3,2.9-0.3,3.4-1.4c0.6-1.1,0.4-2.3-0.8-3.3c-0.8-0.8-1.9-1.3-2.8-2c-1.2-0.8-2.5-1.5-3.5-2.4
                       c-2.4-2.4-1.7-5.8,1.4-7.1c2.4-1,4.7-0.6,6.9,0.5C222.9,291.9,222.9,292.6,222.2,295.8z"
                />
                <path
                  d="M275.5,295.3c-0.4-0.7-0.7-1.4-1.1-2c-0.9-1.3-2.1-1.8-3.7-1.7c-2,0.2-2.8,1.9-1.6,3.4c0.8,0.9,1.9,1.6,2.9,2.3
                       c1.2,0.8,2.5,1.4,3.5,2.4c2.8,2.4,2.4,6.1-0.7,8c-2.3,1.4-5.9,1.2-8-0.6c-0.4-0.4-0.7-1-0.7-1.6c-0.1-1,0-1.9,0-3.3
                       c0.7,0.5,1.2,0.6,1.4,1c0.4,0.7,0.5,1.5,0.9,2.2c0.9,1.5,2.6,2.1,4.1,1.6c2-0.6,2.7-2.6,1.4-4.2c-0.7-0.9-1.7-1.5-2.7-2.1
                       c-1.2-0.8-2.5-1.4-3.6-2.3c-1.4-1.1-2.2-2.5-1.8-4.4c0.4-1.9,1.8-3,3.6-3.5c2-0.6,3.9-0.2,5.7,0.7c0.5,0.3,0.9,1,1,1.6
                       c0.2,0.7,0,1.5,0,2.3C275.9,295.2,275.7,295.3,275.5,295.3z"
                />
                <path
                  d="M312.4,294.3c-0.9-0.6-1.7-1.1-2.9-2c2.1-0.8,3.8-1.4,5.7-2c0.3,0.9,0.5,1.6,0.7,2.4c0.3-0.1,0.6-0.1,0.7-0.2
                       c0.6-0.4,1-1,1.6-1.4c1.5-1.1,2.7-1.1,3.8,0.1c1,1.1,0.9,1.9-0.7,3.7c-0.3-0.1-0.6-0.2-0.9-0.4c-2-1.7-4.3-1.3-4.6,1.3
                       c-0.4,3-0.1,6.2,0,9.2c0,1.1,0.9,1.6,2,1.8c0.4,0.1,0.8,0.4,1.1,0.9c-3,0.6-6,0.4-9.6,0.4c0.7-0.8,0.9-1.3,1.3-1.4
                       c1.3-0.5,1.7-1.5,1.7-2.7C312.4,300.8,312.4,297.5,312.4,294.3z"
                />
                <path
                  d="M462.3,308.4c-1.2-3-2.4-6-3.7-8.9c-1.3-2.8-1.7-6.1-4.7-8.5c2.8,0,5.1,0,7.8,0c-0.4,0.5-0.6,0.9-0.9,1.1
                       c-1.1,0.6-1.1,1.6-0.7,2.5c1,2.9,2.1,5.8,3.7,8.7c0.4-0.9,0.8-1.8,1.1-2.8c0.6-1.7,1.3-3.3,1.8-5c0.7-2.1,0.5-2.3-1.2-3.7
                       c-0.2-0.1-0.3-0.4-0.5-0.8c2.1,0,4.1,0,6,0c0.1,0.2,0.1,0.3,0.1,0.4c-3.3,3.5-4.2,8.2-6.1,12.5c-0.7,1.5-1.3,3-1.9,4.5
                       C462.9,308.4,462.6,308.4,462.3,308.4z"
                />
                <path
                  d="M490.4,291.7c1.8-1.5,3.4-2.7,5.2-4.2c0.3,1.1,0.5,2.1,0.7,3.1c1.3,0.1,2.6,0.2,4,0.3c-0.4,1-0.4,1-4.2,1.5
                       c0,1-0.1,2-0.1,3c0,2.7,0,5.5,0,8.2c0.1,2.7,0.5,3,3.2,2.8c0.4,0,0.9,0,1.3,0.1c0.1,0,0.1,0.1,0.3,0.3c-0.4,1.3-1.7,1.3-2.7,1.5
                       c-3.5,0.9-5-0.2-5.2-3.8c-0.1-3,0-6,0-9c0-1,0-1.9,0-3C492.1,292.3,491.4,292.1,490.4,291.7z"
                />
                <path
                  d="M282.9,292.5c-1-0.3-1.7-0.4-2.7-0.7c1.1-0.8,2-1.4,2.8-2.1c0.8-0.7,1.6-1.4,2.7-2.3c0.2,1.2,0.4,2.1,0.6,3.2
                       c1.3,0.1,2.7,0.2,4.5,0.4c-0.6,0.5-0.9,1-1.2,1.1c-1,0.2-2.1,0.1-3.5,0.2c0,2,0,3.8,0,5.6c0,1.9,0,3.7,0,5.6c0.1,2.9,0.4,3.2,3.3,3
                       c0.5,0,0.9,0.1,1.5,0.1c-1.5,2.1-5.4,2.8-6.8,1.3c-0.6-0.7-1-1.9-1-2.9c-0.1-3.1-0.1-6.2-0.1-9.3
                       C282.9,294.7,282.9,293.7,282.9,292.5z"
                />
                <path
                  d="M229.3,292.4c-0.9-0.2-1.6-0.4-2.7-0.6c1.9-1.5,3.6-2.9,5.5-4.4c0.2,1.2,0.3,2.1,0.4,3.2
                       c1.4,0.1,2.7,0.2,4.4,0.4c-0.5,0.5-0.8,1-1.1,1.1c-1,0.2-2.1,0.1-3.5,0.2c0,2,0,3.8,0,5.6c0,1.9,0,3.9,0,5.8c0.1,2.5,0.6,3,3,2.8
                       c0.5,0,1-0.1,1.6-0.1c0,0.4,0.2,0.8,0.1,0.9c-1.7,1.3-3.7,1.7-5.7,1.2c-1.5-0.4-1.9-1.7-2-3.1c-0.1-2.6,0-5.3-0.1-8
                       C229.3,295.8,229.3,294.2,229.3,292.4z"
                />
                <path
                  d="M335.3,306.6c-0.5,0.6-0.6,1-0.9,1.2c-0.8,0.3-1.7,0.6-2.5,0.8c-3.1,0.6-4.6-0.6-4.6-3.7c-0.1-4.1,0-8.1,0-12.3
                       c-0.8-0.3-1.5-0.5-2.6-0.8c1.8-1.5,3.4-2.8,5.3-4.3c0.2,1.2,0.3,2.1,0.5,3.2c1.3,0.1,2.6,0.2,4.4,0.3c-0.5,0.5-0.8,1.1-1.1,1.1
                       c-1,0.2-2.1,0.1-3.5,0.2c0,1.3,0,2.5,0,3.7c0,2.5,0,5,0,7.4c0,2.9,0.5,3.2,3.3,3C333.9,306.5,334.4,306.5,335.3,306.6z"
                />
                <path
                  d="M452.2,308.1c-3.1,0-5.8,0-8.7,0c0.3-0.6,0.5-1.2,0.8-1.3c1.5-0.6,1.8-1.9,1.9-3.2c0.1-2.7,0-5.3,0.1-8
                       c0-1-0.3-1.7-1.3-2.1c-0.4-0.2-0.8-0.6-1.4-1c1.8-1.2,3.6-1.7,5.9-2c0,1.9,0,3.7,0,5.4c0,2.4,0,4.8,0,7.2c0,1.7,0.1,3.2,2.1,3.8
                       C451.7,307,451.8,307.4,452.2,308.1z"
                />
                <path
                  d="M416.5,284.7c0.1,2.4-1.7,4.3-4,4.3c-2.3,0.1-4.3-1.8-4.3-4.1c-0.1-2.3,1.8-4.2,4.1-4.3
                       C414.7,280.6,416.5,282.3,416.5,284.7z M412.4,282c-1.6,0-2.9,1.3-2.8,2.9c0.1,1.6,1.4,2.8,3,2.7c1.5-0.1,2.6-1.3,2.6-2.8
                       C415.2,283.2,414,282,412.4,282z"
                />
                <path
                  d="M449.7,283.1c0,1.1-1,2-2.1,1.9c-1.1-0.1-1.8-0.7-1.8-1.9c0-1.2,0.7-2,1.9-2
                       C448.8,281.2,449.7,282.1,449.7,283.1z"
                />
                <path d="M409.7,521.8c0.5,0,1,0.1,1.6,0.1c0,0.1,0,0.3,0,0.4c-0.5,0-1,0.1-1.5,0.1C409.7,522.2,409.7,522,409.7,521.8z" />
              </svg>
            </div>
            <blockquote className="mt-8 md:flex md:flex-grow md:flex-col">
              <div className="relative text-lg font-medium leading-7 text-white md:flex-grow">
                <svg
                  className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-indigo-600"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative">
                  For us that I see very valuable is for example when our page
                  was hacked, I didn't even have to think about it, just emailed
                  you in StuntCoders and you fixed it. Saves frustration, time
                  and worries, and basically also a lot of money for my
                  business.
                </p>
              </div>
              <footer className="mt-8">
                <div className="flex">
                  <div className="inline-flex flex-shrink-0 rounded-full border-2 border-white">
                    <StaticImage
                      className="h-12 w-12 rounded-full"
                      src="../images/stine.jpg"
                      alt="Testimonial from Stine BareBra Barnemat"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-base font-medium leading-6 text-white">
                      Stine Svarthe
                    </div>
                    <div className="text-base font-medium leading-6 text-indigo-200">
                      CEO, Bare Bra Barnemat
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      <div className="overflow-hidden bg-white">
        <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block" />
          <div className="mx-auto max-w-prose text-base lg:max-w-none">
            <p className="text-base font-semibold uppercase leading-6 tracking-wide text-indigo-600">
              A word from our CEO
            </p>
            <h1 className="mt-2 mb-8 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Dejan Jacimovic
            </h1>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative mb-8 lg:col-start-2 lg:row-start-1 lg:mb-0">
              <svg
                className="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block"
                width="404"
                height="384"
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="de316486-4a29-4312-bdfc-fbce2132a2c1"
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
                  height="384"
                  fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                />
              </svg>
              <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
                <figure>
                  <div className="pb-7/12 relative lg:pb-0">
                    <img
                      className="absolute inset-0 h-full w-full rounded-lg object-cover object-center shadow-lg lg:static lg:h-auto"
                      src={dejanCeo}
                      alt="Dejan Jacimovic, CEO of StuntCoders"
                      width="1184"
                      height="1376"
                    />
                  </div>
                </figure>
              </div>
            </div>
            <div>
              <div className="mx-auto max-w-prose text-base lg:max-w-none">
                <p className="mb-5 text-lg leading-7 text-gray-500">
                  It’s not our place to tell you what your business needs; it’s
                  our job to make it happen. So if you have a great idea, get in
                  touch and we will give you an honest answer — if it can be
                  done, we will find a way. We are still working on the
                  lightsaber.
                </p>
              </div>
              <div className="prose mx-auto text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
                <p>
                  StuntCoders is not a ‘full-service agency’, we are not a
                  marketing agency, we are not a design agency — we implement
                  technology to build astonishing solutions, and we are amongst
                  the best at what we do.
                </p>
                <h2>Our Experience</h2>
                <p>
                  StuntCoders is in the business of building e-commerce
                  solutions since 2010. With more than 10 years of experience in
                  web development, we understand how to provide the support that
                  will improve your business and help you gain a competitive
                  advantage.
                </p>
                <p>
                  Having an impressive web presence can make a crucial
                  difference in a crowded market. We understand the importance
                  of having a compelling website that encourages visitors to
                  stay, engages and come back for more. Our approach can help in
                  creating a lasting impression on your visitors and converting
                  them into actual customers.
                </p>

                <h2>Our Guarantee</h2>
                <p>
                  If we are fortunate enough to earn your trust, we will provide
                  you with the professional, prompt and expert service you
                  deserve. In the unlikely event that something goes wrong with
                  your order or product, we will work to resolve them as quickly
                  as possible at no additional expense. We want you to be happy
                  with the product and the service you receive, and we will do
                  whatever we can to ensure that is the case — that is my
                  personal guarantee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-gray-800">
        <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
          <StaticImage
            className="h-full w-full object-cover"
            src="../images/stunt-family.jpg"
            alt="StuntCoders is a messy family"
          />
        </div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="md:ml-auto md:w-1/2 md:pl-10">
            <div className="text-base font-semibold uppercase leading-6 tracking-wider text-gray-300">
              Word-class support
            </div>
            <h2 className="mt-2 text-3xl font-extrabold leading-9 tracking-tight text-white sm:text-4xl sm:leading-10">
              Working as your family
            </h2>
            <p className="mt-3 text-lg leading-7 text-gray-300"> </p>
            <div className="mt-8">
              <div className="inline-flex rounded-md shadow">
                <Link
                  className="focus:shadow-outline inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-600 focus:outline-none"
                  to="/about-us/"
                >
                  <span>Learn more about us</span>
                  <svg
                    className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
