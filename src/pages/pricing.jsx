import * as React from 'react';
import { Link } from 'gatsby';
import LayoutPage from '../components/layout_page';
import NavCenter from '../components/nav_center';
import AddedValue from '../components/blocks/added_value';
import ContentManagement from '../components/blocks/content_management';
import PlusIntegrations from '../components/blocks/plus_integrations';

function faqList() {
  let myArray = getFaq();
  let output = [];
  for (var key in myArray) {
    output.push(QA(key, myArray[key]));
  }

  return output;
}

function getFaq() {
  return {
    'Do you offer 24/7 support?':
      'Our office hours are 9 AM – 6 PM Central European Time, Monday through Friday. Any request submitted during off-hours are immediately attended with SLA of 90 minutes. However, in an emergency, you can call our emergency line, and immediate support is provided to you regardless of the hours.',
    'Do you support WordPress Multisite?':
      'Absolutely. Due to the different use cases, database structure and plugin/theme variations, we will request information from you about your existing network. So, give us a call as each multisite is different and we will give you a custom quote.',
    'Can you help me with server maintenance?':
      "Of course. Our team includes experienced system administrators that can help you optimise your server for speed, security, and even upgrade it, so you don't need to sweat about which version of MySQL or PHP is right for your website.",
    'Do you offer software development services?':
      'Yes. Custom development is not part of this plan. However, our team is available to perform any of your custom development if you require such an additional service.',
    'Can you help me connect to MailChimp, Klaviyo, Posten or Vips?':
      'Absolutely. We have a plenty of experience with all of the mentioned platforms, and more. We can surely help you navigate the platforms themselves.',
    'Can I cancel at any time?':
      "Sure, you can. We'd be sad to see you go, but make sure to check out <a href='/refund-policy/'>fair refund policy</a> along the way. We prefer having a fair relationship over a frustrated one.",
    'Are you able to provide hosting for me?':
      'While we do not own servers, we can recommend where to purchase, and we can take care of the rest once you grant us access.',
    'How can I give you access to the site?':
      'Once you sign up, you will have a secure place to share your login details. This will help our team navigate access to the site, and, in case you need server maintenance, you can share those details as well.',
    'I own multiple websites, is there a discount?':
      'Since each case is specific, it would be better to get in touch with us to give you a custom-tailored offer.',
    'How "unlimited" is "unlimited"?':
      "It is unlimited. You need to ask us questions; please do. Wanna jump on the call? Let's talk. You need us to upload content? Please send us all. You need us to fix malware all the time? Wait for a second... You can't have malware all the time; we must fix that. So, yes, truly unlimited support for you and your business.",
    'If an update breaks my website, will the fix be free of charge?':
      'All updates are done with a backup beforehand. So, in an unlikely event that something goes wrong, we will rollback your website to a previous stable version. We will inestigate on what has caused the website to break, and give you an honest opinion on what are your further options.',
  };
}

function QA(question, answer) {
  return (
    <div>
      <dt className="text-lg leading-6 font-medium text-white">{question}</dt>
      <dd className="mt-2 text-base text-indigo-200">{answer}</dd>
    </div>
  );
}

function servicesIncluded() {
  return [
    '90 minutes Maximum Response Time',
    '24/7 Support in Case Of Emergency',
    'Problem-free Guarantee',
    'Content Management, Done for You',
    'Phone Support',
    'Weekly Upgrades',
    'Server Monitoring',
    'Daily Backups',
    'Weekly Service Reports',
    'Security Scans',
    'Hack &amp; DDoS Mitigation',
    'Plugin Setup',
    'Catalog Management',
    'Maintaining GDPR',
    'User and role management',
    'Batch import of pages & products',
    'Fighting off SPAM',
    'Speed optimisation',
    'Help improving the search',
    'Suggestions on UI and UX improvements',
    'Ensuring the website is working properly',
    'Configuring SSL (https)',
  ];
}

function serviceIncluded(serviceName, c = 0) {
  return (
    <li className="py-4 flex md:border-t-0 md:py-0 md:pb-4">
      <svg
        className="flex-shrink-0 h-6 w-6 text-green-500"
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
          d="M5 13l4 4L19 7"
        />
      </svg>
      <span className="ml-3 text-base text-gray-500">{serviceName}</span>
    </li>
  );
}

export default function Pricing() {
  return (
    <LayoutPage>
      <div className="relative pt-6 pb-8 sm:pb-8 md:pb-8 lg:pb-12 xl:pb-12">
        <NavCenter />
      </div>

      <div className="max-w-7xl mx-auto py-24 px-4 bg-white sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
          The right price for you.
        </h2>
        <p className="mt-6 max-w-2xl text-xl text-gray-500">
          Choose an affordable plan that's packed with the best features for
          your business.
        </p>

        <div className="mt-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">
                Unlimited Support
              </h3>
              <p className="mt-4 flex items-baseline text-gray-900">
                <span className="text-5xl font-extrabold tracking-tight">
                  €380
                </span>
                <span className="ml-1 text-xl font-semibold">/month</span>
              </p>
              <p className="mt-6 text-gray-500">
                The essentials to provide you with stress-free maintenance.
              </p>

              <ul role="list" className="mt-6 space-y-6">
                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-indigo-500"
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">Weekly Updates</span>
                </li>

                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-indigo-500"
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    90 minutes Response Time
                  </span>
                </li>

                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-indigo-500"
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">Server Monitoring</span>
                </li>

                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-indigo-500"
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">Hack Interventions</span>
                </li>

                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-indigo-500"
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    Access to our resources (10.000 eur in value)
                  </span>
                </li>

                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-indigo-500"
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">Content Management</span>
                </li>

                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-indigo-500"
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    No Development Hours
                  </span>
                </li>
              </ul>
            </div>

            <a
              href="/contact/"
              className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
            >
              Contact us
            </a>
          </div>

          <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">
                Micro-team
              </h3>

              <p className="absolute top-0 py-1.5 px-4 bg-indigo-500 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
                Most popular
              </p>
              <p className="mt-4 flex items-baseline text-gray-900">
                <span className="text-5xl font-extrabold tracking-tight">
                  €7.200
                </span>
                <span className="ml-1 text-xl font-semibold">/month</span>
              </p>
              <p className="mt-6 text-gray-500">
                For those in need of front-end and back-end development.
              </p>

              <ul role="list" className="mt-6 space-y-6">
                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-indigo-500"
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    Weekly Quality Assurance
                  </span>
                </li>

                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-indigo-500"
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    90 minutes Response Time
                  </span>
                </li>

                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-indigo-500"
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">Server Monitoring</span>
                </li>

                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-indigo-500"
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">Hack Interventions</span>
                </li>

                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-indigo-500"
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    Access to our resources (10.000 eur in value)
                  </span>
                </li>

                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-indigo-500"
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">160 Work Hours</span>
                </li>

                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-indigo-500"
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    Fastest response in case of emergency (outside of working
                    hours and on weekends)
                  </span>
                </li>

                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-indigo-500"
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    Maintenance of automatic deployment mechanisms
                  </span>
                </li>

                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-indigo-500"
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    Server monitoring with SMS notifications
                  </span>
                </li>

                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-indigo-500"
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    Suggestions on available improvements in both user interface
                    and performance
                  </span>
                </li>

                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-indigo-500"
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    Analysis and recommendations for adaptations of your online
                    presence
                  </span>
                </li>

                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-indigo-500"
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    Constant SEO improvements from a technical perspective
                  </span>
                </li>

                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-indigo-500"
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    Ability to purchase additional hour at price of €45
                  </span>
                </li>
              </ul>
            </div>

            <a
              href="/contact/"
              className="bg-indigo-500 text-white hover:bg-indigo-600 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
            >
              Contact us
            </a>
          </div>

          <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">
                Accelerated Development
              </h3>

              <p className="absolute top-0 py-1.5 px-4 bg-gray-400 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
                Starting from
              </p>

              <p className="mt-4 flex items-baseline text-gray-900">
                <span className="text-5xl font-extrabold tracking-tight">
                  €11.250
                </span>
                <span className="ml-1 text-xl font-semibold">/month</span>
              </p>
              <p className="mt-6 text-gray-500">
                Dedicated team for your ever-growing company.
              </p>

              <ul role="list" className="mt-6 space-y-6">
                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-indigo-500"
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    Full time, fully integrated team
                  </span>
                </li>

                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-indigo-500"
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    Team assigned only to you
                  </span>
                </li>

                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-indigo-500"
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    Predictable and transparent cost
                  </span>
                </li>

                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-indigo-500"
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    Continuous domain knowledge retention
                  </span>
                </li>

                <li className="flex">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-indigo-500"
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-500">
                    Monthly subscription
                  </span>
                </li>
              </ul>
            </div>

            <a
              href="/contact/"
              className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="bg-gradient-to-t from-indigo-50 via-white to-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="pb-16 xl:flex xl:items-center xl:justify-between">
              <div>
                <h1 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight">
                  <span className="text-gray-900">
                    Unlimited and Development plans include...
                  </span>
                </h1>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-16 xl:grid xl:grid-cols-3 xl:gap-x-8">
              <div>
                <h2 className="text-base font-semibold text-indigo-600 uppercase tracking-wide">
                  Everything you need to manage your{' '}
                </h2>
                <p className="mt-2 text-3xl font-extrabold text-gray-900">
                  website
                </p>
              </div>
              <div className="mt-4 sm:mt-8 md:mt-10 md:grid md:grid-cols-2 md:gap-x-8 xl:mt-0 xl:col-span-2">
                <ul className="divide-y divide-gray-200">
                  <li className="py-4 flex md:py-0 md:pb-4" />
                </ul>
              </div>
            </div>
          </div>
        </div>

        <AddedValue />
        <ContentManagement />
        <PlusIntegrations />

        <div className="bg-indigo-900">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white">
              Frequently asked questions
            </h2>
            <div className="mt-6 border-t border-indigo-400 border-opacity-25 pt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12">
                {faqList()}
              </dl>
            </div>
          </div>
        </div>

        <div className="bg-indigo-50">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-indigo-900 sm:text-4xl">
              <span className="block">Got questions?</span>
            </h2>
            <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="/contact/"
                  className="bg-indigo-600 border border-transparent rounded-md py-3 px-5 inline-flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
