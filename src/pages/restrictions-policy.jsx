import * as React from 'react';
import { Link } from 'gatsby';
import LayoutPage from '../components/layout_page';
import NavCenter from '../components/nav_center';

export default function RestrictionsPolicy() {
  return (
    <LayoutPage>
      <div className="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
        <NavCenter />
      </div>

      <div className="relative py-16 bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div className="relative h-full text-lg max-w-prose mx-auto">
            <svg
              className="absolute top-12 left-full transform translate-x-32"
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
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
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
              className="absolute bottom-12 left-full transform translate-x-32"
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
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto mb-6">
            <p className="text-base text-center leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
              Introducing
            </p>
            <h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Restricted purposes
            </h1>
            <p className="text-xl text-gray-500 leading-8">
              We’ve outlined these restrictions to be clear about what we won’t
              stand for. That said, this list is by no means exhaustive. We will
              make changes over time.
            </p>
          </div>
          <div className="prose prose-lg text-gray-500 mx-auto">
            <ul>
              <li>
                <strong>Child exploitation, sexualization, or abuse</strong>: We
                don’t tolerate any activities that create, disseminate, or
                otherwise cause child abuse. Keep away and stop. Just stop.
              </li>
              <li>
                <strong>Doxing</strong>: If you are using StuntCoders products
                to share other peoples’ private personal information for the
                purposes of harassment, we don’t want anything to do with you.
              </li>
              <li>
                <strong>Infringing on intellectual property</strong>: You can’t
                use StuntCoders products to make or disseminate work that uses
                the intellectual property of others beyond the bounds of{' '}
                <a href="https://www.copyright.gov/fair-use/more-info.html">
                  fair use
                </a>
                .
              </li>
              <li>
                <strong>Malware or spyware</strong>: Code for good, not evil. If
                you are using our products to make or distribute anything that
                qualifies as malware or spyware — including remote user
                surveillance — begone.
              </li>
              <li>
                <strong>Phishing or otherwise attempting fraud</strong>: It is
                not okay to lie about who you are or who you affiliate with to
                steal from, extort, or otherwise harm others.
              </li>
              <li>
                <strong>Spamming</strong>: No one wants unsolicited commercial
                emails. We don’t tolerate folks (including their bots) using
                StuntCoders products for spamming purposes. If your emails don’t
                pass muster with{' '}
                <a href="https://www.ftc.gov/tips-advice/business-center/guidance/can-spam-act-compliance-guide-business">
                  CAN-SPAM
                </a>{' '}
                or any other anti-spam law, it’s not allowed.
              </li>
              <li>
                <strong>Cybersquatting</strong>: We don’t like username
                extortionists. If you purchase a StuntCoders product account in
                someone else’s name and then try to sell that account to them,
                you are{' '}
                <a href="https://www.law.cornell.edu/uscode/text/15/1125">
                  cybersquatting
                </a>
                . Cybersquatting accounts are subject to immediate cancelation.
              </li>
              <li>
                <strong>Violence, or threats thereof</strong>: If an activity
                qualifies as violent crime in the United States or where you
                live, you may not use StuntCoders products to plan, perpetrate,
                or threaten that activity.
              </li>
            </ul>

            <h2>How to report abuse</h2>
            <p>
              See someone using our products for one of the restricted purposes?
              Let us know by emailing report@adorableinc.com and we will
              investigate. If you’re not 100% sure, report it anyway.
            </p>
            <p>
              Please share as much as you are comfortable with about the
              account, the content or behavior you are reporting, and how you
              found it. Sending us a URL or screenshots is super helpful. If you
              need a secure file transfer, let us know and we will send you a
              link. We will not disclose your identity to anyone associated with
              the reported account. For copyright cases, we’ve outlined extra
              instructions on how to notify us about infringement claims.
            </p>
            <p>
              Someone on our team will respond within one business day to let
              you know we’ve begun investigating. We will also let you know the
              outcome of our investigation (unless you ask us not to or we are
              not allowed to under law).
            </p>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
