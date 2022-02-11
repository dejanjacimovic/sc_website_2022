import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import LayoutPage from '../../components/layout_page';
import NavLeft from '../../components/nav_left';

export default function Selekkt() {
  return (
    <LayoutPage>
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
                  <span className="mr-1">Direct to consumer</span>
                  <br className="xl:hidden" />
                  <span className="text-indigo-600">
                    Marketplace on Magento
                  </span>
                </h2>
                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  StuntCoders worked closely with Selekkt to develop and grow
                  their brand through 10+ years and continues to manage their
                  platform today with a dedicated team of 5 engineers and
                  designers.
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <StaticImage
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
            src="../../images/cases/selekkt-main.jpeg"
            loading="auto"
            alt="Selekkt case study"
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
              The Story
            </h3>
            <p className="mx-auto mt-4 max-w-3xl text-center text-xl leading-7 text-gray-500">
              The story of the transformation of the Selekkt system is a story
              of combining all best practices of StuntCoders to achieve
              high-performing and happy development teams, to ensure that
              Product Owners can reliably promise the delivery to their business
              and for operations to come to low costs of change, low running
              costs and reliable software quality.
            </p>
          </div>
          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="relative">
              <h4 className="text-2xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-3xl sm:leading-9">
                Collaborating Since 2010
              </h4>
              <p className="mt-3 text-lg leading-7 text-gray-500">
                When we started working on Selekkt's Marketplace platform in
                2010, the system was a large PHP legacy platform with over 1
                million lines of intertwined code, encrypted files running on
                outdated server infrastructure.
              </p>
              <p className="mt-3 text-lg leading-7 text-gray-500">
                The change was constant, development was extensive, and the
                technical debt was high. The system is now based on modern
                architecture, running on Kubernetes on DigitalOcean, with mature
                DevOps reducing the overall maintenance cost by 3x.
              </p>
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
                className="relative mx-auto rounded-lg border-gray-200 shadow-xl"
                width="490"
                src="../../images/cases/selekkt-growth.jpg"
                loading="auto"
                alt="Selekkt - Collaborating since 2010"
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
                  YOY Growth
                </h4>
                <p className="mt-3 text-lg leading-7 text-gray-500">
                  What started as a journey of 1.000 creative people sell unique
                  products on selekkt.com turned into 40.000 vendors. Far from
                  the mainstream, you will find furniture and furnishings,
                  unusual fashion and bags, hand-printed posters and prints, but
                  also delicacies and elegant technical accessories.
                </p>
                <p className="mt-3 text-lg leading-7 text-gray-500">
                  StuntCoders supports in raising the quality and working
                  methods within the development teams. The software
                  professionals from StuntCoders bring knowledge and experience
                  to the table with the Agile methodology, continuous
                  improvement, attention to security and architecture.
                </p>
                <p className="mt-3 text-lg leading-7 text-gray-500">
                  When landing on selekkt.com, customers now experience a fast,
                  design-oriented storefront and feel a unique shopping
                  experience instead of a large marketplace.
                </p>
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
                  className="relative mx-auto rounded-lg border-gray-200 shadow-xl"
                  width="490"
                  src="../../images/cases/selekkt-good-vibes.jpeg"
                  alt="Selekkt's Growth"
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
                src="../../images/cases/janrode.jpeg"
                alt="Jan Rode's testimonial"
                loading="auto"
              />
            </div>
            <div className="relative lg:ml-10">
              <svg
                className="absolute top-0 left-0 h-36 w-36 -translate-x-8 -translate-y-24 transform text-indigo-200 opacity-50"
                stroke="currentColor"
                fill="none"
                viewbox="0 0 144 144"
              >
                <path
                  stroke-width="2"
                  d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
                />
              </svg>
              <blockquote className="relative">
                <div className="text-2xl font-medium leading-9 text-gray-900">
                  <p>
                    There’s so much mutual trust between us that we don’t even
                    think of them as a vendor anymore.
                  </p>
                </div>
                <footer className="mt-8">
                  <div className="flex">
                    <div className="flex-shrink-0 lg:hidden">
                      <StaticImage
                        className="h-12 w-12 rounded-full"
                        src="../../images/cases/janrode.jpeg"
                        alt="Jan Rode's testimonial"
                        loading="auto"
                      />
                    </div>
                    <div className="ml-4 lg:ml-0">
                      <div className="text-base font-medium leading-6 text-gray-900">
                        Jan Rode
                      </div>
                      <div className="text-base font-medium leading-6 text-indigo-600">
                        Managing partner, selekkt Digital GmbH
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <div className="relative bg-gray-900">
        <div className="absolute inset-x-0 bottom-0 h-80 xl:top-0 xl:h-full">
          <div className="h-full w-full xl:grid xl:grid-cols-2">
            <div className="h-full xl:relative xl:col-start-2">
              <StaticImage
                className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                src="../../images/pricing-plans.jpeg"
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
            <h2 className="text-sm font-semibold uppercase tracking-wide">
              <span className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
                Valuable Metrics
              </span>
            </h2>
            <p className="mt-3 text-3xl font-extrabold text-white">
              Team. Length. Stack.
            </p>
            <p className="mt-5 text-lg text-gray-300">
              Learn more about what efforts we have put together to help Selekkt
              grow.
            </p>
            <div className="mt-8 overflow-hidden">
              <dl className="-mx-8 -mt-8 flex flex-wrap">
                <div className="flex flex-col px-8 pt-8">
                  <dt className="order-2 text-base font-medium leading-6 text-gray-300">
                    in the team
                  </dt>
                  <dd className="order-1 bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-2xl font-extrabold leading-8 text-transparent sm:text-3xl sm:leading-9">
                    5+ engineers
                  </dd>
                </div>
                <div className="flex flex-col px-8 pt-8">
                  <dt className="order-2 text-base font-medium leading-6 text-gray-300">
                    of collaboration
                  </dt>
                  <dd className="order-1 bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-2xl font-extrabold leading-8 text-transparent sm:text-3xl sm:leading-9">
                    10+ years
                  </dd>
                </div>
                <div className="flex flex-col px-8 pt-8">
                  <dt className="order-2 text-base font-medium leading-6 text-gray-300">
                    framework of choice
                  </dt>
                  <dd className="order-1 bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-2xl font-extrabold leading-8 text-transparent sm:text-3xl sm:leading-9">
                    Magento
                  </dd>
                </div>
                <div className="flex flex-col px-8 pt-8">
                  <dt className="order-2 text-base font-medium leading-6 text-gray-300">
                    orchestration
                  </dt>
                  <dd className="order-1 bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-2xl font-extrabold leading-8 text-transparent sm:text-3xl sm:leading-9">
                    Kubernetes
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50">
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
                Get started
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
    </LayoutPage>
  );
}
