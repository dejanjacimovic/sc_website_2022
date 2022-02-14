import * as React from 'react';
import { Link } from 'gatsby';
import LayoutPage from '../components/layout_page';
import NavCenter from '../components/nav_center';

export default function CancellationPolicy() {
  return (
    <LayoutPage>
      <Helmet>
        <meta charSet="utf-8" />
        <title>StuntCoders cancellation policy</title>
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
              Transparent
            </p>
            <h1 className="mt-2 mb-8 text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Cancellation Policy
            </h1>
            <p className="text-xl leading-8 text-gray-500">
              We want satisfied customers, not hostages. That’s why we make it
              easy for you to cancel your account directly in all of our apps —
              no phone calls required, no questions asked.
            </p>
          </div>
          <div className="prose prose-lg mx-auto text-gray-500">
            <p>
              Account owners can cancel their accounts in app, under "My
              Account".
            </p>
            <p>
              Our legal responsibility is to account owners, which means we
              cannot cancel an account at the request of anyone else. If for
              whatever reason you no longer know who the account owner is,
              contact us. We will gladly reach out to any current account owners
              at the email addresses we have on file.
            </p>
            <h2>What happens when you cancel?</h2>
            <p>
              You won’t be able to access your account once you cancel, so make
              sure you download everything you want to keep beforehand.
            </p>
            <p>
              We’ll permanently delete your account data within 7 days from our
              servers and logs, and within 180 days from our backups. Retrieving
              data for a single account from a backup isn’t possible, so if you
              change your mind you’ll need to do it within the first 7 days.
              Data can’t be recovered once it has been permanently deleted.
            </p>
            <p>
              We won’t bill you again once you cancel. Contact us for a{' '}
              <a href="/refund-policy/">refund</a>. We’ll treat you right.
            </p>

            <h2>StuntCoders-initiated cancellations</h2>
            <p>
              We may cancel accounts if they have been inactive for an extended
              period:
            </p>
            <ul>
              <li>
                For frozen accounts: 30 days after being frozen due to billing
                failures
              </li>
              <li>For abusive customers: 7 dats after being frozen</li>
            </ul>
            <p>
              We also retain the right to suspend or terminate accounts for any
              reason at any time, as outlined in our{' '}
              <a href="/terms/">Terms of Service</a>. In practice, this
              generally means we will cancel your account without notice if we
              have evidence that you are using our products to engage in abusive
              behavior.
            </p>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
