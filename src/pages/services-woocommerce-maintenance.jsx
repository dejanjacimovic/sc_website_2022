import * as React from 'react';
import { Link } from 'gatsby';
import LayoutPage from '../components/layout_page';
import NavCenter from '../components/nav_center';
import AddedValue from '../components/blocks/added_value';
import ContentManagement from '../components/blocks/content_management';
import PlusIntegrations from '../components/blocks/plus_integrations';
import Woocommerce from '../components/blocks/woocommerce';

function getMaintenancePrice() {
  return '380 eur';
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
      "Sure, you can. We'd be sad to see you go, but make sure to check out <a href='/refund-policy.php'>fair refund policy</a> along the way. We prefer having a fair relationship over a frustrated one.",
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

function QA(question, answer, isFirst = false) {
  let classVal = '';

  if (isFirst) {
    classVal = 'class="mt-6 border-t border-gray-200 pt-6"';
  }

  return (
    <div classVal>
      <div>
        <dt class="text-lg leading-7">
          <button class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900">
            <span class="font-medium text-gray-900">{question}</span>
            <span class="ml-6 h-7 flex items-center">
              <svg
                class="-rotate-180 h-6 w-6 transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </span>
          </button>
        </dt>
        <dd class="mt-2 pr-12">
          <p class="text-base leading-6 text-gray-500">{answer}</p>
        </dd>
      </div>
    </div>
  );
}

export default function ServicesWoocommerceMaintenance() {
  return (
    <LayoutPage>
      <div class="relative bg-gray-50 overflow-hidden">
        <div class="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full">
          <div class="relative h-full max-w-screen-xl mx-auto">
            <svg
              class="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
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
                height="784"
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              ></rect>
            </svg>
            <svg
              class="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
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
                height="784"
                fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
              ></rect>
            </svg>
          </div>
        </div>
        <div class="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <NavCenter />
          <main class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
            <div class="text-center">
              <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                <span class="mr-1">Services to support your</span>
                <br class="xl:hidden" />
                <span class="text-indigo-600">WooCommerce</span>
              </h2>
              <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                We believe that the service we offer should be fair, reasonably
                priced, and cover most of the cases you will ever need. We
                believe that now, more than ever, it is important to have a
                human touch that helps you navigate through technical
                challenges.
              </p>
              <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div class="rounded-md shadow">
                  <a
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                    href="/contact/"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <div class="py-12 bg-white">
        <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="lg:text-center">
            <p class=" text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
              Guaranteed
            </p>
            <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Customer Happiness
            </h3>
            <p class="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
              We know that a business is only as good as its customers. If we
              are lucky enough to earn your trust, we promise to work hard on
              maintaining your happiness in years to come.
            </p>
          </div>
          <div class="mt-10">
            <ul class="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
              <li class="mt-10 md:mt-8">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4 pr-4">
                    <h4 class="text-lg leading-6 font-medium text-gray-900">
                      90 minutes Maximum Response Time
                    </h4>
                    <p class="mt-2 text-base leading-6 text-gray-500">
                      Your business and time are important! When you entrust us
                      with your precious time and investment, a fast response
                      will be the first promise we keep.
                    </p>
                  </div>
                </div>
              </li>
              <li class="mt-10 md:mt-8">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg leading-6 font-medium text-gray-900">
                      Problem-free Guarantee
                    </h4>
                    <p class="mt-2 text-base leading-6 text-gray-500">
                      Your happiness is our success as we grow together. This
                      means we stand by our services 100% to be the source of
                      your happiness.
                    </p>
                    <br />
                  </div>
                </div>
              </li>
              <li class="mt-10 md:mt-8">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg leading-6 font-medium text-gray-900">
                      Phone Support
                    </h4>
                    <p class="mt-2 text-base leading-6 text-gray-500">
                      If you need instant help, we are here for you. We rely on
                      your judgment and believe you will pick up your phone and
                      call us only if something is really urgent. We will be
                      there for you outside of working hours, on weekends and
                      public holidays, to resolve the problem you face.
                    </p>
                  </div>
                </div>
              </li>
              <li class="hidden mt-10 md:mt-8">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg leading-6 font-medium text-gray-900">
                      Content Management, Done for You
                    </h4>
                    <p class="mt-2 text-base leading-6 text-gray-500">
                      We know you have better things to do with your time than
                      learning basic HTML, uploading banners, setting up product
                      pictures, and overall managing the content. Just send us
                      the email, and we'll take care of the rest in a pedant
                      manner.
                    </p>
                  </div>
                </div>
              </li>
              <li class="mt-10 md:mt-8">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4 pr-4">
                    <h4 class="text-lg leading-6 font-medium text-gray-900">
                      24/7 Support in Case Of Emergency
                    </h4>
                    <p class="mt-2 text-base leading-6 text-gray-500">
                      If you need instant help, we will be there for you. We
                      understand you will pick up your phone and call us only if
                      something is really urgent, so we will be there for you
                      outside of working hours, weekends, and public holidays,
                      to resolve the problem you face.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="bg-gray-50 overflow-hidden">
        <div class="relative max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <svg
            class="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
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
              height="784"
              fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
            ></rect>
          </svg>
          <div class="relative lg:grid lg:grid-cols-3 lg:col-gap-8">
            <div class="lg:col-span-1">
              <h3 class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                Security should never be a concern.
              </h3>
            </div>
            <div class="mt-10 sm:grid sm:grid-cols-2 sm:col-gap-8 sm:row-gap-10 lg:col-span-2 lg:mt-0">
              <div>
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                </div>
                <div class="mt-5 pr-4">
                  <h4 class="text-lg leading-6 font-medium text-gray-900">
                    Weekly Upgrades
                  </h4>
                  <p class="mt-2 text-base leading-6 text-gray-500">
                    Keeping your WooCommerce up to date is the first good step
                    to keep your website healthy and free of attackers. But
                    upgrades can cause a headache too. Incompatible themes,
                    plugins or expired licenses can easily break a website. That
                    is why we take care of this, for you.
                  </p>
                  <br />
                </div>
              </div>
              <div class="mt-10 sm:mt-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    ></path>
                  </svg>
                </div>
                <div class="mt-5">
                  <h4 class="text-lg leading-6 font-medium text-gray-900">
                    Server Monitoring
                  </h4>
                  <p class="mt-2 text-base leading-6 text-gray-500">
                    Nobody likes to have an unavailable website and lost
                    customers because of this. Our monitoring systems will
                    inform you via SMS and email, just as it will inform our
                    team, so we can react quickly and get you up and running.
                  </p>
                </div>
              </div>
              <div class="mt-10 sm:mt-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    ></path>
                  </svg>
                </div>
                <div class="mt-5 pr-4">
                  <h4 class="text-lg leading-6 font-medium text-gray-900">
                    Daily Backups
                  </h4>
                  <p class="mt-2 text-base leading-6 text-gray-500">
                    Because sometimes problems do happen, we make sure backups
                    are performed daily, and completely recoverable within
                    minutes.
                  </p>
                </div>
              </div>
              <div class="mt-10 sm:mt-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    ></path>
                  </svg>
                </div>
                <div class="mt-5">
                  <h4 class="text-lg leading-6 font-medium text-gray-900">
                    Hack Interventions
                  </h4>
                  <p class="mt-2 text-base leading-6 text-gray-500">
                    Your website's savior is a help site for fixing webpages
                    that have been hacked by internet trolls or other hackers
                    who want to disrupt your website. We go in and clean up any
                    mess left behind from them, so you don't need to worry about
                    anything like that!
                  </p>
                  <br />
                </div>
              </div>
              <div class="mt-10 sm:mt-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                </div>
                <div class="mt-5 pr-4">
                  <h4 class="text-lg leading-6 font-medium text-gray-900">
                    Security Scans
                  </h4>
                  <p class="mt-2 text-base leading-6 text-gray-500">
                    Malware can be hidden anywhere, so we are constantly
                    searching for it, and in case we find malicious pieces of
                    code on the server, we should inform you immediately while
                    taking care of it at the same time.
                  </p>
                </div>
              </div>
              <div class="mt-10 sm:mt-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div class="mt-5">
                  <h4 class="text-lg leading-6 font-medium text-gray-900">
                    DDoS Mitigation
                  </h4>
                  <p class="mt-2 text-base leading-6 text-gray-500">
                    Malicious attacks can take any form and can bring businesses
                    to their knees. We are here for you in a case anything goes
                    wrong.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AddedValue />
      <ContentManagement />
      <PlusIntegrations />

      <div class="py-16 bg-gray-50 overflow-hidden lg:py-24">
        <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
          <svg
            class="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
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
              height="784"
              fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
            ></rect>
          </svg>
          <div class="relative">
            <h3 class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              A better way to communicate
            </h3>
            <p class="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-500">
              Tickets are not for every one of us. In fact, most of us hate
              tickets. They are slow, provide little feedback, and most of all
              —&nbsp;feel like you're talking to a robot. That is why we
              communicate the way you like.
            </p>
          </div>
          <div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div class="relative">
              <h4 class="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                Let's talk the way you like to
              </h4>
              <p class="mt-3 text-lg leading-7 text-gray-500">
                Everybody has different habits, and that is absolutely fine.
                Your habits help you stay organised throughout the day, and we
                won't make you change them for us.
              </p>
              <ul class="mt-10">
                <li>
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h5 class="text-lg leading-6 font-medium text-gray-900">
                        Tasks on our platform
                      </h5>
                      <p class="mt-2 text-base leading-6 text-gray-500">
                        Internally, we use Kanban boards (yes, the ones from
                        Toyota). They help us have a clean overview of the
                        current status of tasks. If you like this approach, we
                        welcome you to join us.
                      </p>
                    </div>
                  </div>
                </li>
                <li class="mt-10">
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h5 class="text-lg leading-6 font-medium text-gray-900">
                        Email
                      </h5>
                      <p class="mt-2 text-base leading-6 text-gray-500">
                        Is the email right way to go for you? We'll set you up a
                        dedicated email address so you can shoot us a message,
                        and we'll take care of it.
                      </p>
                    </div>
                  </div>
                </li>
                <li class="mt-10">
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h5 class="text-lg leading-6 font-medium text-gray-900">
                        Slack
                      </h5>
                      <p class="mt-2 text-base leading-6 text-gray-500">
                        Like Slack? Great, we do too! Hop on our Slack, we'll
                        open a channel for your project, and you can easily ping
                        any of our team members you are familiar with in
                        real-time, during working hours.
                      </p>
                    </div>
                  </div>
                </li>
                <li class="mt-10">
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h5 class="text-lg leading-6 font-medium text-gray-900">
                        WhatsApp
                      </h5>
                      <p class="mt-2 text-base leading-6 text-gray-500">
                        Sometimes you're on the go, and if it's just the easiest
                        option for you, we don't mind it.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="mt-10 -mx-4 relative lg:mt-0">
              <svg
                class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
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
                  width="784"
                  height="404"
                  fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
                ></rect>
              </svg>
              <img
                class="relative mx-auto"
                width="490"
                src="https://stcdshare.s3.amazonaws.com/whatsapp-min.png"
                alt="Whatsapp message support"
                loading="auto"
              />
            </div>
          </div>
          <svg
            class="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
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
              height="784"
              fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
            ></rect>
          </svg>
          <div class="relative mt-12 sm:mt-16 lg:mt-24">
            <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div class="lg:col-start-2">
                <h4 class="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                  Keeping you in the loop
                </h4>
                <p class="mt-3 text-lg leading-7 text-gray-500">
                  We swore never to be "missing in action" because there is no
                  worse feeling than having to chase those who need to solve
                  your problems. That is why we always keep you in the loop,
                  even on the complex tasks.
                </p>
                <ul class="mt-10">
                  <li>
                    <div class="flex">
                      <div class="flex-shrink-0">
                        <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                          <svg
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            ></path>
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div class="ml-4">
                        <h5 class="text-lg leading-6 font-medium text-gray-900">
                          Nothing gets lost
                        </h5>
                        <p class="mt-2 text-base leading-6 text-gray-500">
                          Our internal tools do not allow human error. If there
                          was no reply from our end by the expected date, our
                          systems will nudge, ping, and disturb every one of us,
                          so we never loose track of your tasks.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="mt-10">
                    <div class="flex">
                      <div class="flex-shrink-0">
                        <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                          <svg
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div class="ml-4">
                        <h5 class="text-lg leading-6 font-medium text-gray-900">
                          Send it and forget it
                        </h5>
                        <p class="mt-2 text-base leading-6 text-gray-500">
                          It is our mission to make your requirements happen.
                          Once you send us what you need to get done, you can
                          sincerely go to sleep without thinking if it will be
                          done.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                <svg
                  class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
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
                    width="784"
                    height="404"
                    fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                  ></rect>
                </svg>
                <img
                  class="relative mx-auto"
                  width="490"
                  src="https://stcdshare.s3.amazonaws.com/status-updates-min.png"
                  alt="Status update from StuntCoders"
                  loading="auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Woocommerce />

      <div class="bg-gray-50">
        <div class="max-w-screen-xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            <span>Ready to dive in?</span>
            <br />
            <span>We'll get you covered.</span>
          </h2>
          <div class="mt-8 flex justify-center">
            <div class="inline-flex rounded-md shadow">
              <a
                class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                href="/contact/"
                onclick="fbq('track', 'Services sign up', {content_name: 'Services sign up',content_category: 'Services sign up',});gtag('event', 'sign_up', {method: 'Services sign up'});"
              >
                Get started
              </a>
            </div>
            <div class="ml-3 inline-flex">
              <a
                class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out"
                href="/testimonials.php"
              >
                See what our customers said?
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="relative bg-white">
        <div class="h-56 bg-indigo-600 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
          <img
            class="w-full h-full object-cover"
            src="images/magic-in-the-office.jpg"
            alt="Magic in the office"
            loading="auto"
          />
        </div>
        <div class="relative max-w-screen-xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
          <div class="max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10">
            <div>
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg
                  class="h-6 w-6"
                  fill="none"
                  viewbox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  ></path>
                </svg>
              </div>
            </div>
            <h2 class="mt-6 text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
              Get what you want, every time
            </h2>
            <p class="mt-6 text-lg leading-7 text-gray-500">
              We sincerely understand how your business is important to you, and
              to your customers. And we know our success depends on yours. This
              is why your business truly matters to us too.
            </p>
            <div class="mt-8 overflow-hidden">
              <dl class="-mx-8 -mt-8 flex flex-wrap">
                <div class="flex flex-col px-8 pt-8">
                  <dt class="order-2 text-base leading-6 font-medium text-gray-500">
                    in case of emergency
                  </dt>
                  <dd class="order-1 text-2xl leading-8 font-extrabold text-indigo-600 sm:text-3xl sm:leading-9">
                    24/7 availability
                  </dd>
                </div>
                <div class="flex flex-col px-8 pt-8">
                  <dt class="order-2 text-base leading-6 font-medium text-gray-500">
                    support for you
                  </dt>
                  <dd class="order-1 text-2xl leading-8 font-extrabold text-indigo-600 sm:text-3xl sm:leading-9">
                    truly unlimited
                  </dd>
                </div>
                <div class="flex flex-col px-8 pt-8">
                  <dt class="order-2 text-base leading-6 font-medium text-gray-500">
                    response time guaranteed
                  </dt>
                  <dd class="order-1 text-2xl leading-8 font-extrabold text-indigo-600 sm:text-3xl sm:leading-9">
                    90 minutes
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white">
        <div class="max-w-screen-xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div class="pb-16 xl:flex xl:items-center xl:justify-between">
            <div>
              <h1 class="text-4xl leading-10 font-extrabold sm:text-5xl sm:leading-none sm:tracking-tight">
                <span class="text-gray-900">And even more from </span>
                <span class="text-indigo-600">
                  {getMaintenancePrice()} a month
                </span>
              </h1>
              <p class="mt-5 text-xl leading-7 text-gray-500">
                Includes every feature we listed above plus the ones listed
                below.
              </p>
            </div>
            <a
              class="mt-8 w-full bg-indigo-600 border border-transparent px-5 py-3 inline-flex items-center justify-center text-base leading-6 font-medium rounded-md text-white hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out sm:mt-10 sm:w-auto xl:mt-0"
              href="/pricing.php"
            >
              See our pricing
            </a>
          </div>
          <div class="border-t border-gray-200 pt-16 xl:grid xl:grid-cols-3 xl:col-gap-8">
            <div>
              <h2 class="text-base leading-6 font-semibold text-indigo-600 tracking-wide uppercase">
                Everything you need
              </h2>
              <p class="mt-2 text-3xl leading-9 font-extrabold text-gray-900">
                To manage your online business
              </p>
              <p class="mt-4 text-lg leading-7 text-gray-500"></p>
            </div>
            <div class="mt-4 sm:mt-8 md:mt-10 md:grid md:grid-cols-2 md:col-gap-8 xl:mt-0 xl:col-span-2">
              <ul class="divide-y divide-gray-200">
                <li class="py-4 flex space-x-3 md:py-0 md:pb-4">
                  <svg
                    class="h-6 w-6 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span class="text-base leading-6 text-gray-500">
                    Setting up and maintaining GDPR
                  </span>
                </li>
                <li class="py-4 flex space-x-3">
                  <svg
                    class="h-6 w-6 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span class="text-base leading-6 text-gray-500">
                    User and role management
                  </span>
                </li>
                <li class="py-4 flex space-x-3">
                  <svg
                    class="h-6 w-6 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span class="text-base leading-6 text-gray-500">
                    Support when going international
                  </span>
                </li>
                <li class="py-4 flex space-x-3">
                  <svg
                    class="h-6 w-6 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span class="text-base leading-6 text-gray-500">
                    Batch import of pages &amp; products
                  </span>
                </li>
                <li class="py-4 flex space-x-3">
                  <svg
                    class="h-6 w-6 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span class="text-base leading-6 text-gray-500">
                    Fighting off SPAM bots
                  </span>
                </li>
              </ul>
              <ul class="border-t border-gray-200 divide-y divide-gray-200 md:border-t-0">
                <li class="py-4 flex space-x-3 md:border-t-0 md:py-0 md:pb-4">
                  <svg
                    class="h-6 w-6 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span class="text-base leading-6 text-gray-500">
                    Help improving the search
                  </span>
                </li>
                <li class="py-4 flex space-x-3">
                  <svg
                    class="h-6 w-6 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span class="text-base leading-6 text-gray-500">
                    Suggestions on UI and UX improvements
                  </span>
                </li>
                <li class="py-4 flex space-x-3">
                  <svg
                    class="h-6 w-6 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span class="text-base leading-6 text-gray-500">
                    Speed optimisation
                  </span>
                </li>
                <li class="py-4 flex space-x-3">
                  <svg
                    class="h-6 w-6 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span class="text-base leading-6 text-gray-500">
                    Configuring SSL
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gray-50">
        <div class="max-w-screen-xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div class="max-w-3xl mx-auto">
            <h2 class="text-center text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
              Frequently asked questions
            </h2>
            <div class="mt-6 border-t-2 border-gray-200 pt-6">
              <dl>{QA('question', 'answer', true)}</dl>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
