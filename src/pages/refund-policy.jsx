import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import LayoutPage from '../components/layout_page';
import NavCenter from '../components/nav_center';

export default function RefundPolicy() {
  return (
    <LayoutPage>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Learn about our fair refund policy</title>
      </Helmet>

      <div className="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
        <NavCenter />
      </div>

      <div className="relative overflow-hidden bg-white py-16">
        <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full">
          <div className="relative mx-auto h-full max-w-prose text-lg">
            <svg
              className="absolute top-12 left-full translate-x-32 transform"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
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
                fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
              />
            </svg>
            <svg
              className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
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
                height="384"
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute bottom-12 left-full translate-x-32 transform"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
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
                fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
              />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-6 max-w-prose text-lg">
            <p className="text-center text-base font-semibold uppercase leading-6 tracking-wide text-indigo-600">
              A fair
            </p>
            <h1 className="mt-2 mb-8 text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Refund Policy
            </h1>
            <p className="text-xl leading-8 text-gray-500">
              Bad refund policies are infuriating. You feel like the company is
              just trying to rip you off. We never want our customers to feel
              that way, so our refund policy is simple: If you’re ever unhappy
              with our products or services for any reason, just contact our
              support team and we’ll take care of you.
            </p>
          </div>
          <div className="prose prose-lg mx-auto text-gray-500">
            <h2>Examples of refunds we’d grant.</h2>
            <ul>
              <li>
                You tried our services for the first time, and you did not like
                it within first 30 days, we will issue a 100% refund.
              </li>
              <li>
                If you were just charged for your next month of service but you
                meant to cancel, we’re happy to refund that last charge.
              </li>
              <li>
                If you forgot to cancel your account a couple months ago and you
                haven’t used it since then, we’ll give you a full refund for up
                to three months. No problem.
              </li>
              <li>
                If you have been unhappy for the last month of receiving our
                services, and you want to cancel collaboration with us, for any
                reason, we will issue a 100% refund for that month. Of course.
              </li>
            </ul>

            <p>
              At the end of the day, nearly everything on the edges comes down
              to a case-by-case basis. Send us a note, tell us what’s up, and
              we’ll work with you to make sure you’re happy.
            </p>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
