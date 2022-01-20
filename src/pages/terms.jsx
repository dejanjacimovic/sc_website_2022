import * as React from 'react';
import { Link } from 'gatsby';
import LayoutPage from '../components/layout_page';
import NavCenter from '../components/nav_center';

export default function Terms() {
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
              Terms of Service
            </h1>
          </div>
          <div className="prose prose-lg text-gray-500 mx-auto">
            <p>
              From everyone at Adorable &amp; StuntCoders, thank you for using
              our products &amp; services! We build them to help you do your
              best work.
            </p>

            <p>
              When we say “Company”, “we”, “our”, “Adorable”, or “us” in this
              document, we are referring to Adorable Corporation, Inc.
            </p>

            <p>
              When we say “Services”, we mean any product created and maintained
              by Adorable Corporation, Inc.. That includes StuntCoders, whether
              delivered within a web browser, desktop application, mobile, or
              another format.
            </p>

            <p>
              When we say “You” or “your”, we are referring to the people or
              organizations that own an account with one or more of our
              Services.
            </p>

            <p>
              When you use our Services, now or in the future, you are agreeing
              to the latest Terms of Service. That’s true for any of our
              existing and future products and all features that we add to our
              Services over time. There may be times where we do not exercise or
              enforce any right or provision of the Terms of Service; in doing
              so, we are not waiving that right or provision.{' '}
              <strong>
                These terms do contain a limitation of our liability.
              </strong>
            </p>

            <p>
              If you violate any of the terms, we may terminate your account.
              That’s a broad statement and it means you need to place a lot of
              trust in us. We do our best to deserve that trust by being open
              about <a href="/about-us.php">who we are</a>, how we work, and
              keeping an open door to your{' '}
              <a href="/contact/">feedback</a>.
            </p>

            <h2>Account Terms</h2>
            <ol>
              <li>
                You are responsible for maintaining the security of your account
                and password. The Company cannot and will not be liable for any
                loss or damage from your failure to comply with this security
                obligation. We recommend users set up two-factor authentication
                for added security. In some of our Services, we may require it.
              </li>
              <li>
                You are responsible for all content posted and activity that
                occurs under your account. That includes content posted by
                others who either: (a) have access to your login credentials; or
                (b) have their own logins under your account.
              </li>
              <li>
                You must be a human. Accounts registered by “bots” or other
                automated methods are not permitted.
              </li>
            </ol>

            <h2>Payment, Refunds, and Plan Changes</h2>
            <ol>
              <li>
                If you are using a free version of one of our Services, it is
                really free: we do not ask you for your credit card and — just
                like for customers who pay for our Services — we do not sell
                your data.
              </li>
              <li>
                For paid Services that offer a free trial, we explain the length
                of trial when you sign up. After the trial period, you need to
                pay in advance to keep using the Service. If you do not pay, we
                will freeze your account and it will be inaccessible until you
                make payment. If your account has been frozen for a while, we
                will queue it up for auto-cancellation. See our{' '}
                <a href="/cancellation-policy.php">Cancellation policy</a> for
                more details.
              </li>
              <li>
                If you are upgrading, we will charge your card immediately and
                your billing cycle starts on the day of upgrade. For other
                upgrades or downgrades in plan level, the new rate starts from
                the next billing cycle.
              </li>
              <li>
                All fees are exclusive of all taxes, levies, or duties imposed
                by taxing authorities. Where required, we will collect those
                taxes on behalf of the taxing authority and remit those taxes to
                taxing authorities. Otherwise, you are responsible for payment
                of all taxes, levies, or duties.
              </li>
              <li>
                We process refunds according to our{' '}
                <a href="/refund-policy.php">Refund policy</a>.
              </li>
            </ol>

            <h2>Cancellation and Termination</h2>
            <ol>
              <li>
                You are solely responsible for properly canceling your account.
                Within each of our Services, we provide a simple
                no-questions-asked cancellation link. You can find instructions
                for how to cancel your account in our{' '}
                <a href="/cancellation-policy.php">Cancellation policy</a>. An
                email or phone request to cancel your account is not
                automatically considered cancellation. If you need help
                cancelling your account, you can always contact our{' '}
                <a href="/contact/">Support team</a>.
              </li>
              <li>
                All of your content will be inaccessible from the Services
                immediately upon cancellation. Please check{' '}
                <a href="/cancellation-policy.php">Cancellation policy</a> for
                details.
              </li>
              <li>
                If you cancel the Service before the end of your current paid up
                month, your cancellation will take effect immediately, and you
                will not be charged again. We do not automatically prorate
                unused time in the last billing cycle. See our{' '}
                <a href="/refund-policy.php">Refund policy</a> for more details.
              </li>
              <li>
                We have the right to suspend or terminate your account and
                refuse any and all current or future use of our Services for any
                reason at any time. Suspension means you and any other users on
                your account will not be able to access the account or any
                content in the account. Termination will furthermore result in
                the deletion of your account or your access to your account, and
                the forfeiture and relinquishment of all content in your
                account. We also reserve the right to refuse the use of the
                Services to anyone for any reason at any time. There are some
                things we staunchly stand against and this clause is how we
                exercise that stance. For more details, see our Use{' '}
                <a href="/restrictions-policy.php">Restrictions policy</a>.
              </li>
              <li>
                Verbal, physical, written or other abuse (including threats of
                abuse or retribution) of Company employee or officer will result
                in immediate account termination.
              </li>
            </ol>

            <h2>Modifications to the Service and Prices</h2>
            <p>
              Sometimes we change the pricing structure for our products. When
              we do that, we tend to exempt existing customers from those
              changes. However, we may choose to change the prices for existing
              customers. If we do so, we will give at least 30 days notice and
              will notify you via the email address on record. We may also post
              a notice about changes on our websites or the affected Services
              themselves.
            </p>

            <h2>Uptime, Security, and Privacy</h2>
            <ol>
              <li>
                We reserve the right to temporarily disable your account if your
                usage significantly exceeds the average usage of other customers
                of the Services. Of course, we’ll reach out to the account owner
                before taking any action except in rare cases where the level of
                use may negatively impact the performance of the Service for
                other customers.
              </li>
              <li>
                We take many measures to protect and secure your data through
                backups, redundancies, and encryption. We enforce encryption for
                data transmission from the public Internet. There are some edge
                cases where we may send your data through our network
                unencrypted.
              </li>
              <li>
                When you use our Services, you entrust us with your data. We
                take that trust to heart. You agree that Adorable may process
                your data as described in our{' '}
                <a href="/privacy-policy.php">Privacy Policy</a> and for no
                other purpose. We as humans can access your data for the
                following reasons:
                <ul>
                  <li>
                    <strong>To help you with support requests you make.</strong>{' '}
                    We’ll ask for express consent before accessing your account.
                  </li>
                  <li>
                    <strong>
                      On the rare occasions when an error occurs that stops an
                      automated process partway through.
                    </strong>{' '}
                    We get automated alerts when such errors occur. When we can
                    fix the issue and restart automated processing without
                    looking at any personal data, we do. In rare cases, we have
                    to look at a minimum amount of personal data to fix the
                    issue. In these rare cases, we aim to fix the root cause as
                    much as possible to avoid the errors from reoccurring.
                  </li>
                  <li>
                    <strong>To the extent required by applicable law.</strong>{' '}
                    As a US company with all data infrastructure located in the
                    US, we only preserve or share customer data if compelled by
                    a US government authority with a legally binding order or
                    proper request under the Stored Communications Act. If a
                    non-US authority approaches Adorable for assistance, our
                    default stance is to refuse unless the order has been
                    approved by the US government, which compels us to comply
                    through procedures outlined in an established mutual legal
                    assistance treaty or agreement mechanism. If Adorable is
                    audited by a tax authority, we only share the bare minimum
                    billing information needed to complete the audit.
                  </li>
                </ul>
              </li>
              <li>
                We use third party vendors and hosting partners to provide the
                necessary hardware, software, networking, storage, and related
                technology required to run the Services.
              </li>
              <li>
                Under the California Consumer Privacy Act (“CCPA”), Adorable is
                a “service provider”, not a “business” or “third party”, with
                respect to your use of the Services. That means we process any
                data you share with us only for the purpose you signed up for
                and as described in these Terms of Service,{' '}
                <a href="/privacy-policy.php">Privacy policy</a>, and other
                policies. We do not retain, use, disclose, or sell any of that
                information for any other commercial purposes unless we have
                your explicit permission. And on the flip-side, you agree to
                comply with your requirements under the CCPA and not use
                Adorable’s Services in a way that violates the regulations.
              </li>
              <li>
                These Service Terms incorporate the Adorables Data Processing
                Addendum (“DPA”), when the General Data Protection regulation
                (“GDPR”) applies to your use of Adorable Services to process
                Customer Data as defined in the DPA. The DPA is effective as of
                October 5, 2020 and replaces and supersedes any previously
                agreed data processing addendum between you and Adorable
                Corporation, Inc. relating to the GDPR. If you prefer to have an
                executed copy of the Data Processing Addendum, you may contact
                us. Regardless of whether you execute or not, we protect and
                secure your data to the high standards set out in the addendum.
              </li>
            </ol>

            <h2>Copyright and Content Ownership</h2>
            <ol>
              <li>
                We claim no intellectual property rights over the material you
                provide to the Services. All materials uploaded remain yours.
              </li>
              <li>
                We do not pre-screen content, but reserve the right (but not the
                obligation) in our sole discretion to refuse or remove any
                content that is available via the Service.
              </li>
              <li>
                The names, look, and feel of the Services are copyright© to the
                Company. All rights reserved. You may not duplicate, copy, or
                reuse any portion of the HTML, CSS, JavaScript, or visual design
                elements without express written permission from the Company.
                You must request permission to use the Company’s logo or any
                Service logos for promotional purposes. Please email us requests
                to use logos. We reserve the right to rescind this permission if
                you violate these Terms of Service.
              </li>
              <li>
                You agree not to reproduce, duplicate, copy, sell, resell or
                exploit any portion of the Services, use of the Services, or
                access to the Services without the express written permission by
                the Company.
              </li>
              <li>
                You must not modify another website so as to falsely imply that
                it is associated with the Services or the Company.
              </li>
            </ol>

            <h2>Features and Bugs</h2>
            <p>
              We design our Services with care, based on our own experience and
              the experiences of customers who share their time and feedback.
              However, there is no such thing as a service that pleases
              everybody. We make no guarantees that our Services will meet your
              specific requirements or expectations.
            </p>
            <p>
              We also test all of our features extensively before shipping them.
              As with any software, our Services inevitably have some bugs. We
              track the bugs reported to us and work through priority ones,
              especially any related to security or privacy. Not all reported
              bugs in our software will get fixed and we don’t guarantee
              completely error-free Services.
            </p>

            <h2>Liability</h2>
            <p>
              We mention liability throughout these Terms but to put it all in
              one section:
            </p>
            <p>
              <strong>
                You expressly understand and agree that the Company shall not be
                liable, in law or in equity, to you or to any third party for
                any direct, indirect, incidental, lost profits, special,
                consequential, punitive or exemplary damages, including, but not
                limited to, damages for loss of profits, goodwill, use, data or
                other intangible losses (even if the Company has been advised of
                the possibility of such damages), resulting from: (i) the use or
                the inability to use the Services; (ii) the cost of procurement
                of substitute goods and services resulting from any goods, data,
                information or services purchased or obtained or messages
                received or transactions entered into through or from the
                Services; (iii) unauthorized access to or alteration of your
                transmissions or data; (iv) statements or conduct of any third
                party on the service; (v) or any other matter relating to this
                Terms of Service or the Services, whether as a breach of
                contract, tort (including negligence whether active or passive),
                or any other theory of liability.
              </strong>
            </p>

            <p>
              In other words: choosing to use our Services does mean you are
              making a bet on us. If the bet does not work out, that’s on you,
              not us. We do our darnedest to be as safe a bet as possible
              through careful management of the business; investments in
              security, infrastructure, and talent; and in general{' '}
              <a href="/about-us.php">providing an actual care</a>. If you
              choose to use our Services, thank you for betting on us.
            </p>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
