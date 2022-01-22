import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default function ContentManagement() {
  return (
    <div className="relative bg-gray-50 py-16 sm:py-24">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72"></div>
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
            <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden lg:h-96">
              <StaticImage
                className="absolute inset-0 h-full w-full object-cover"
                src="../../images/content-management-done-for-you.jpg"
                alt="Content management done for you"
              />
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
              Content management, done for you{' '}
              <span className="text-indigo-600">in Unlimited plan</span>
            </h2>
            <div className="mt-6 text-gray-500 space-y-6">
              <p className="text-lg">
                We believe that business should be easy. No more pay per page,
                no more nightly updates, and no more time spent navigating
                confusing coding to make even the simplest change! StuntCoders
                is a different breed of content management system: we do all the
                work for you so you can get back to running your business.
              </p>
              <p className="text-base leading-7">
                We help our customers forget about their once-tedious tasks of
                adding and managing content. Weather that is a page, post, or a
                bunch of products, just send us your documents, and we will take
                care of the rest.
              </p>
              <p className="text-base leading-7">
                <ul className="list-disc list-inside">
                  <li>
                    Stop wasting your time on tedious and overwhelming editing
                    tasks.
                  </li>
                  <li>Upload images, products, updated prices, and more.</li>
                  <li>
                    Easily manage all of your content by just sending us an
                    email.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
