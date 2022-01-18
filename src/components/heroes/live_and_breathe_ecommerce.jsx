import React from 'react';

export default function LiveAndBreatheEcommerce() {
  return (
    (
      <div className="relative pb-32 mt-8 bg-gray-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="/images/working-class-hero.jpeg"
            alt="working class hero is soomething to be"
          />
          <div
            className="absolute inset-0 bg-gray-800 mix-blend-multiply"
            aria-hidden="true"
          ></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            We live and breathe eCommerce
            <br />
            since 2010
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Are you looking for experts to help you (re)launch, position, and
            grow your eCommerce business? We offer strategic services, including
            in-house design and development for eCommerce businesses. We work
            with companies like Camp David, Tesori, JumpKing, and Arduino.
          </p>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            We accompany brands to success in the world of eCommerce by building
            scalable solutions that measure what matters—your sales.
          </p>
        </div>
      </div>
    ),
    (
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
                We deliver dedicated project manager, consultant, designer, and
                developer resources as part of a long-term engagement. This way,
                all of our resources are focused on becoming intimate with your
                business.
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
                We use Cloud services to eliminate the need for provisioning and
                managing infrastructure so our teams can focus more on
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
                cross-functional teams that are the best fit for the assignment
                and responsibility for the quality and timeliness of software
                delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  );
}
