import * as React from 'react';
import { Link } from 'gatsby';
import LayoutPage from '../components/layout_page';
import NavCenter from '../components/nav_center';

export default function RefundPolicy() {
  return (
    <LayoutPage>
      <div class="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
        <NavCenter />
      </div>

      <div class="relative py-16 bg-white overflow-hidden">
        <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div class="relative h-full text-lg max-w-prose mx-auto">
            <svg
              class="absolute top-12 left-full transform translate-x-32"
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
                height="384"
                fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
              ></rect>
            </svg>
            <svg
              class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
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
                height="384"
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              ></rect>
            </svg>
            <svg
              class="absolute bottom-12 left-full transform translate-x-32"
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
                height="384"
                fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
              ></rect>
            </svg>
          </div>
        </div>
        <div class="relative px-4 sm:px-6 lg:px-8">
          <div class="text-lg max-w-prose mx-auto mb-6">
            <p class="text-base text-center leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
              A fair
            </p>
            <h1 class="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Refund Policy
            </h1>
            <p class="text-xl text-gray-500 leading-8">
              Bad refund policies are infuriating. You feel like the company is
              just trying to rip you off. We never want our customers to feel
              that way, so our refund policy is simple: If you’re ever unhappy
              with our products or services for any reason, just contact our
              support team and we’ll take care of you.
            </p>
          </div>
          <div class="prose prose-lg text-gray-500 mx-auto">
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
