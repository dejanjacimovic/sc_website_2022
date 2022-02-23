import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import LayoutPage from '../../components/layout_page';
import NavCenter from '../../components/nav_center';

export default function ServicesRubyonrails() {
  return (
    <LayoutPage>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ruby on Rails custom development services at StuntCoders</title>
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
          <main className="mx-auto mt-10 max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
            <div className="text-center">
              <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                <span className="mr-1">Development</span>
                <br className="xl:hidden" />
                <span className="text-red-600">on Rails</span>
              </h2>
              <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
                Create beautiful, fast and secure web applications tailored
                exclusively for your business goals.
              </p>
              <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <Link
                    className="focus:shadow-outline-red flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-red-500 focus:border-red-700 focus:outline-none md:py-4 md:px-10 md:text-lg"
                    to="/contact/"
                  >
                    Get started
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className=" text-base font-semibold uppercase leading-6 tracking-wide text-red-600">
              From day one
            </p>
            <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              We Work Hard to Understand Your Needs
            </h3>
            <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
              By hiring us, you get a team of dedicated engineers who are
              passionate about making software. We apply modern tools and Agile
              methodology to implement your ideas on time and within budget.
            </p>
          </div>
          <div className="mt-10">
            <ul className="md:col-gap-8 md:row-gap-10 md:grid md:grid-cols-2">
              <li className="mt-10 mr-5 md:mt-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-red-500 text-white">
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
                          d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4 pr-4">
                    <h4 className="text-lg font-medium leading-6 text-gray-900">
                      Engineering Your Vision
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      We carefully assemble your engineering team to meet your
                      unique needs and goals using our deep tech expertise. This
                      way, we can deliver the most elegant solution for your
                      challenges.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10 md:mt-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-red-500 text-white">
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
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 text-gray-900">
                      Cut Your Development Time by 30%
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      We want you to win. Our goal is to help our partners to
                      turn their ideas into profitable businesses, and reducing
                      the cost of development and time to market is essential.
                    </p>
                    <br />
                  </div>
                </div>
              </li>
              <li className="mt-10 mr-5 md:mt-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-red-500 text-white">
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
                          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 text-gray-900">
                      High-quality code
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      We are developing a clear, elegant, efficient code and
                      easily maintainable application architecture.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10 md:mt-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-red-500 text-white">
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
                          d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4 pr-4">
                    <h4 className="text-lg font-medium leading-6 text-gray-900">
                      Thorough Testing
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      We use modern technologies and advanced solutions to
                      develop your products and are open about code climate,
                      test coverages, and other relevant factors that prove the
                      code's quality.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
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
                In our approach, we cultivate openness, respect, and humanity.
              </h3>
            </div>
            <div className="sm:col-gap-8 sm:row-gap-10 mt-10 sm:grid sm:grid-cols-2 lg:col-span-2 lg:mt-0">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-red-500 text-white">
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
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <div className="mt-5 pr-4">
                  <h4 className="text-lg font-medium leading-6 text-gray-900">
                    Learning
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    The first thing we'll do is get to know you and your ideas.
                    We're interested in your professional background, the goals
                    of the project, its business model, and expected user
                    profiles. We'll give you feedback based on our experience in
                    the industry, share some ideas of our own and work with you
                    to frame an executable game plan.
                  </p>
                  <br />
                </div>
              </div>
              <div className="mt-10 sm:mt-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-red-500 text-white">
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
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    />
                  </svg>
                </div>
                <div className="mt-5">
                  <h4 className="text-lg font-medium leading-6 text-gray-900">
                    Planning
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Our next step is to define your application after the first
                    iteration, which usually lasts four weeks. We'll write user
                    stories and draw wireframes that break down each feature and
                    user interaction. Designers and developers will write and
                    estimate trackable tickets. After this, you will have a
                    clear picture of what your project will become after the
                    iteration and how fast it will develop.
                  </p>
                </div>
              </div>
              <div className="mt-10 sm:mt-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-red-500 text-white">
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
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="mt-5 pr-4">
                  <h4 className="text-lg font-medium leading-6 text-gray-900">
                    Design
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    We work with user interface designers that are among the
                    best in the business. Together will work with you to define
                    a unique visual identity and implement detailed mockups of
                    pages that will be part of your application. Design must be
                    ready for each feature that developers will work on for
                    maximum effectiveness.
                  </p>
                </div>
              </div>
              <div className="mt-10 sm:mt-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-red-500 text-white">
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
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <div className="mt-5">
                  <h4 className="text-lg font-medium leading-6 text-gray-900">
                    Implementation
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    We will apply the Agile, test-driven methodology to current
                    requirements. You will see your project advance every day as
                    we continuously deploy new features implemented in the
                    source code of the highest standards. These methods allow us
                    to sustain the pace of development as your project grows and
                    efficiently respond to changes as they happen. We'll be in
                    constant touch through feature discussions, video calls,
                    in-person meetings, or whatever works best for you at a
                    given time.
                  </p>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Let's build great things together</span>
          </h2>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/contact/"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-5 py-3 text-base font-medium text-white hover:bg-red-700"
              >
                Contact us
              </Link>
            </div>
          </div>
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
              Skills matter
            </h3>
            <p className="mx-auto mt-4 max-w-3xl text-center text-xl leading-7 text-gray-500">
              StuntCoders has a robust recruitment process aimed at hiring
              talented people straight out of college. We train our employees to
              adapt to our workflow and grow while appreciating dedication for
              quality, precision, and understanding of our customers' internal
              processes. This way, we manage to build custom-tailored solutions
              that fit your business.
            </p>
          </div>
          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="relative">
              <h4 className="text-2xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-3xl sm:leading-9">
                Hire highly experienced Ruby on Rails developers
              </h4>
              <p className="mt-3 text-lg leading-7 text-gray-500">
                When it comes to making decisions, experience is what we can
                truly rely on. Over the many years of web and Rails application
                development, we have built competencies that are hard to
                replicate.
              </p>
              <p className="mt-3 text-lg leading-7 text-gray-500">
                It often doesn't make sense to invest in your team of developers
                before you even have a proof of concept or MVP for your product.
                Working with an external team is a more lean option.
              </p>
              <p className="mt-3 text-lg leading-7 text-gray-500">
                You don't have to provide office, equipment, and testing. None
                of the material elements are necessary for building an app. You
                can also forget about recruitment time and costs. You don't need
                to worry about software and test infrastructure. You can skip
                trying to gather the exact set of skills necessary for your
                project – a good agency will also offer DevOps, backend and
                frontend development, UI and UX design, as well as product and
                graphic design.
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
                src="../../images/general/senior.jpeg"
                alt="Experienced developer"
                loading="auto"
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
                  Curious whether StuntCoders Ruby on Rails development team is
                  the right fit for your project?
                </h4>
                <p className="mt-3 text-lg leading-7 text-gray-500">
                  We understand that every project is different and requires an
                  individual approach. That is why we offer more than a free
                  consulting session with our team members. Online meetings are
                  okay, but we are open to visiting you and taking all the time
                  needed to understand your project truly.
                </p>
                <p className="mt-3 text-lg leading-7 text-gray-500">
                  During these sessions, you will have a chance to determine
                  whether Ruby on Rails is the right fit for your project and
                  how working with StuntCoders may look.
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
                  src="../../images/rails-ticket-to-future.png"
                  alt="Rails ticket to future"
                  loading="auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-red-200 bg-opacity-25">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <h2 className="text-red-8 00 mx-auto max-w-md text-center  text-3xl font-extrabold lg:max-w-xl lg:text-left">
              The most innovative companies use Ruby on Rails
            </h2>
            <div className="mt-8 flow-root self-center lg:mt-0">
              <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
                <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0">
                  <StaticImage
                    className="h-12"
                    src="../../images/CampDavid-black.svg"
                    alt="Camp David"
                  />
                </div>
                <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0">
                  <StaticImage
                    className="h-12"
                    src="../../images/luado-rosa.png"
                    alt="Luado"
                  />
                </div>
                <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0">
                  <StaticImage
                    className="h-12"
                    src="../../images/skintific-black.svg"
                    alt="Skintific"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                And not only those built by us...
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Choosing the right technology can make the difference between
                success or failure – Ruby on Rails has been trusted by big
                names, including Twitter, Hulu, Slideshare, GitHub, Shopify,
                Groupon, and Airbnb.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
              <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <StaticImage
                  className="max-h-12"
                  src="../../images/ror/github.svg"
                  alt="Github"
                />
              </div>
              <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <StaticImage
                  className="max-h-12"
                  src="../../images/ror/airbnb.svg"
                  alt="AirBnb"
                />
              </div>
              <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <StaticImage
                  className="max-h-12"
                  src="../../images/ror/twitter.svg"
                  alt="Twitter"
                />
              </div>
              <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <StaticImage
                  className="max-h-12"
                  src="../../images/ror/hulu.svg"
                  alt="Hulu"
                />
              </div>
              <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <StaticImage
                  className="max-h-12"
                  src="../../images/ror/groupon.svg"
                  alt="Groupon"
                />
              </div>
              <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <StaticImage
                  className="max-h-12"
                  src="../../images/ror/shopify.svg"
                  alt="Shopify"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl py-12 px-4 text-center sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            <span>Ready to dive in?</span>
            <br />
            <span>We'll get you covered.</span>
          </h2>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <Link
                className="focus:shadow-outline inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none"
                to="/contact/"
              >
                Get in touch
              </Link>
            </div>
            <div className="ml-3 inline-flex">
              <Link
                className="focus:shadow-outline inline-flex items-center justify-center rounded-md border border-transparent bg-red-100 px-5 py-3 text-base font-medium leading-6 text-red-700 transition duration-150 ease-in-out hover:bg-red-50 hover:text-red-600 focus:border-red-300 focus:outline-none"
                to="/testimonials/"
              >
                See what our customers said?
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold uppercase tracking-wide text-red-600">
              Best of all
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              We build to scale.
            </p>
            <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
              We implement an architectural style that allows for highly
              scalable distributed systems. MonolithFirst, Clean Architecture
              are architectural patterns that make it easier for us to move from
              a monolithic or three-tier architecture to a service-oriented
              architecture and turn to microservices once the time is right.
            </p>
          </div>
        </div>
      </div>

      <div className="relative bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-base font-semibold uppercase tracking-wider text-red-600">
            Wondering
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Which technologies are we using?
          </p>
          <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
            Although we are flexible when it comes to adopting new technologies,
            here we share the list of all the libraries (gems), plugins, tools,
            and APIs that we've been using in our work. We keep this list
            updated and use it for our reference. We have decided to publish it,
            hoping that it might help other developers and tell our clients a
            bit more about us.
          </p>
          <div className="mt-12 text-left">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
              <div className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-red-500 p-3 shadow-lg">
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
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                      eCommerce Frameworks
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      <ul className="mt-2 list-disc pl-4 text-base leading-6 text-gray-500">
                        <li>Shopify</li>
                        <li>Solidus</li>
                        <li>Spree commerce</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-red-500 p-3 shadow-lg">
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
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                      Mapping
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      <ul className="mt-2 list-disc pl-4 text-base leading-6 text-gray-500">
                        <li>MapBox</li>
                        <li>Google Map API</li>
                        <li>Geocoder</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-red-500 p-3 shadow-lg">
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
                            d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                      ActiveRecord Extensions
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      <ul className="mt-2 list-disc pl-4 text-base leading-6 text-gray-500">
                        <li>act_as_list</li>
                        <li>acts-as-taggable-on</li>
                        <li>friendly_id</li>
                        <li>to_slug</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-red-500 p-3 shadow-lg">
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
                            d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                      Authentication
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      <ul className="mt-2 list-disc pl-4 text-base leading-6 text-gray-500">
                        <li>devise</li>
                        <li>oauth2</li>
                        <li>omniauth</li>
                        <li>sorcery</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-red-500 p-3 shadow-lg">
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
                            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                      Billing
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      <ul className="mt-2 list-disc pl-4 text-base leading-6 text-gray-500">
                        <li>active_merchant</li>
                        <li>stripe</li>
                        <li>braintree</li>
                        <li>coinbase_commerce</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-red-500 p-3 shadow-lg">
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
                            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                      Databases
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      <ul className="mt-2 list-disc pl-4 text-base leading-6 text-gray-500">
                        <li>MongoDB</li>
                        <li>MySQL</li>
                        <li>PostgreSQL</li>
                        <li>Redis</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-red-500 p-3 shadow-lg">
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
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                      Deployment, Monitoring & Performance
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      <ul className="mt-2 list-disc pl-4 text-base leading-6 text-gray-500">
                        <li>Airbrake</li>
                        <li>Capistrano</li>
                        <li>Ansible</li>
                        <li>New Relic</li>
                        <li>Byebug</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-red-500 p-3 shadow-lg">
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
                            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                      Front-end Libraries
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      <ul className="mt-2 list-disc pl-4 text-base leading-6 text-gray-500">
                        <li>Tailwind UI</li>
                        <li>Bulma</li>
                        <li>Bootstrap</li>
                        <li>Materialize</li>
                        <li>Foundation</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-red-500 p-3 shadow-lg">
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
                            d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                      Queueing and Scheduling
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      <ul className="mt-2 list-disc pl-4 text-base leading-6 text-gray-500">
                        <li>delayed_job</li>
                        <li>resque</li>
                        <li>whenever</li>
                        <li>sidekiq</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-red-500 p-3 shadow-lg">
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
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                      Search
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      <ul className="mt-2 list-disc pl-4 text-base leading-6 text-gray-500">
                        <li>Open Search</li>
                        <li>Elastic Search</li>
                        <li>Algolia</li>
                        <li>ransack</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-red-500 p-3 shadow-lg">
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
                            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                      Integration with web APIs
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      <ul className="mt-2 list-disc pl-4 text-base leading-6 text-gray-500">
                        <li>aws-sdk-s3</li>
                        <li>fog</li>
                        <li>heroku-s3-backup</li>
                        <li>mailchimp</li>
                        <li>linkedin</li>
                        <li>OpenGraph API</li>
                        <li>postmark-rails</li>
                        <li>disqus</li>
                        <li>zerobounce</li>
                        <li>sitemap_generator</li>
                        <li>twilio</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-red-500 p-3 shadow-lg">
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
                            d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                      Testing
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      <ul className="mt-2 list-disc pl-4 text-base leading-6 text-gray-500">
                        <li>capybara</li>
                        <li>cucumber</li>
                        <li>database_cleaner</li>
                        <li>email_spec</li>
                        <li>factory-girl</li>
                        <li>ffaker</li>
                        <li>solargraph</li>
                        <li>RSpec</li>
                        <li>selenium-webdriver</li>
                        <li>shoulda</li>
                        <li>timecop</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-red-500 p-3 shadow-lg">
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
                            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                      View
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      <ul className="mt-2 list-disc pl-4 text-base leading-6 text-gray-500">
                        <li>liquid</li>
                        <li>i18n</li>
                        <li>kaminari</li>
                        <li>recaptcha</li>
                        <li>simple_auto_complete</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl py-12 px-4 text-center sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            <span>Should we talk in person?</span>
            <br />
            <span>We would love to.</span>
          </h2>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <Link
                className="focus:shadow-outline inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none"
                to="/contact/"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
