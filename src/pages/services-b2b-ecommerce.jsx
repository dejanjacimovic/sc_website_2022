import * as React from 'react';
import { Link } from 'gatsby';
import LayoutPage from '../components/layout_page';
import NavCenter from '../components/nav_center';

function getB2BPrice() {
  return "27.6500 eur";
}

export default function ServicesB2bEcommerce() {
  return (
    <LayoutPage>
      <div class="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
        <NavCenter />
      </div>

      <div class="py-12 bg-white">
        <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="lg:text-left">
            <p class=" text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">All the</p>
            <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">Features you'll need</h3>
            <p class="mt-4 text-xl leading-7 text-gray-500 lg:mx-auto">With our B2B platform, you have the power to fuel B2B eCommerce — and with our team, the speed to adapt it.</p>
            <p class="mt-4  text-xl leading-7 text-gray-500 lg:mx-auto">Over the last 10-year-period, we have invested more than 100.000 work-hours, working with real-life enterprise customers to bring this unique B2B eCommerce system to the market.</p>
            <p class="mt-4 text-xl leading-7 text-gray-500 lg:mx-auto">It comes packed with essential features out of the box.</p>
          </div>
          <div class="mt-10">
            <ul class="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
              <li class="mt-10 md:mt-8">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4 pr-4">
                    <h4 class="text-lg leading-6 font-medium text-gray-900">Your Tools, Integrated</h4>
                    <p class="mt-2 text-base leading-6 text-gray-500">ERP, Warehouse, CRM, and marketplaces. We integrate all the tools your business relies on to function reliably and synchronously.</p>
                    <p class="mt-2 text-base leading-6 text-gray-500">Some of the systems we have previously made seamless integrations with include SAP, Microsoft Navision, Visma, Autodata, Salesforce, Oracle CRM, SuperOffice, Tradebyte.</p>
                  </div>
                </div>
              </li>
              <li class="mt-10 md:mt-8">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg leading-6 font-medium text-gray-900">Pre-Order & Re-Order Built-in</h4>
                    <p class="mt-2 text-base leading-6 text-gray-500">Business customers need to be able to make pre-orders and receive goods at the beginning of the season.</p>
                    <p class="mt-2 text-base leading-6 text-gray-500">Separate stores mean we support different integrations and completely separate ordering systems to avoid any complications and assure the correct information is in the right place.</p>
                    <br/>
                  </div>
                </div>
              </li>
              <li class="mt-10 md:mt-8">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4 pr-4">
                    <h4 class="text-lg leading-6 font-medium text-gray-900">Custom Pricing</h4>
                    <p class="mt-2 text-base leading-6 text-gray-500">All products can be priced individually per customer group or order volume. Allow unprecedented freedom of pricing definition, either from your B2B eCommerce system or by importing from your ERP.</p>
                  </div>
                </div>
              </li>
              <li class="mt-10 md:mt-8">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg leading-6 font-medium text-gray-900">Pre-Order Analysis</h4>
                    <p class="mt-2 text-base leading-6 text-gray-500">Did some products sell poorly during the pre-order period? Deeply analyze the data before sending your orders to production. Automatically discover the orders with canceled products, decide if you wish to remove or replace them automatically.</p>
                  </div>
                </div>
              </li>
              <li class="mt-10 md:mt-8">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4 pr-4">
                    <h4 class="text-lg leading-6 font-medium text-gray-900">Order Minimums</h4>
                    <p class="mt-2 text-base leading-6 text-gray-500">
                      Our B2B eCommerce system allows setups that can require:
                      <ul class="list-disc list-inside text-gray-500">
                        <li>the minimum total value to proceed to the checkout</li>
                        <li>minimum quantity per individual product</li>
                        <li>minimum quantity per individual product size</li>
                        <li>minimum value per product</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </li>
              <li class="mt-10 md:mt-8">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg leading-6 font-medium text-gray-900">Order Duplication</h4>
                    <p class="mt-2 text-base leading-6 text-gray-500">Company users can view all company-level previously purchased products with the company-specific base price.</p>
                    <p class="mt-2 text-base leading-6 text-gray-500">This will allow them to duplicate the order quantities or match the order and decide to ship it to a separate location.</p>
                  </div>
                </div>
              </li>
              <li class="mt-10 md:mt-8">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4 pr-4">
                    <h4 class="text-lg leading-6 font-medium text-gray-900">No limits on products, pictures, or videos</h4>
                    <p class="mt-2 text-base leading-6 text-gray-500">
                      We consider these limits a thing of the past. You should not pay per product, picture, or video. Your customers deserve the best you can offer, and if that means details of images, 360 gallery, or multiple videos, you will be able to present it to them along with your product.
                    </p>
                  </div>
                </div>
              </li>
              <li class="mt-10 md:mt-8">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4 pr-4">
                    <h4 class="text-lg leading-6 font-medium text-gray-900">Sales representative masquerade</h4>
                    <p class="mt-2 text-base leading-6 text-gray-500">
                      Each customer can have an assigned sales manager from your company. Those managers will be able to log in on behalf of a customer, access shopping lists, add products to the cart, and complete the order.
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
          <svg class="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784"><defs><pattern id="8b1b5f72-e944-4457-af67-0c6d15a99f38" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect class="text-gray-200" x="0" y="0" width="4" height="4" fill="currentColor"></rect></pattern></defs><rect width="404" height="784" fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"></rect></svg>
          <div class="relative lg:grid lg:grid-cols-3 lg:col-gap-8">
            <div class="lg:col-span-1">
              <h3 class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">We are providing you with peace of mind.</h3>
            </div>
            <div class="mt-10 sm:grid sm:grid-cols-2 sm:col-gap-8 sm:row-gap-10 lg:col-span-2 lg:mt-0">
              <div>
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                  </svg>
                </div>
                <div class="mt-5 pr-4">
                  <h4 class="text-lg leading-6 font-medium text-gray-900">Hosting Included</h4>
                  <p class="mt-2 text-base leading-6 text-gray-500">Our team of DevOps is there to make sure your systems are running smoothly 24/7 so that you don't need to dedicate any additional resources to run your B2B online store..</p>
                  <br/>
                </div>
              </div>
              <div class="mt-10 sm:mt-0 pb-4">
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                  </svg>
                </div>
                <div class="mt-5 pb-4">
                  <h4 class="text-lg leading-6 font-medium text-gray-900">Server Monitoring</h4>
                  <p class="mt-2 text-base leading-6 text-gray-500">Our monitoring systems will inform you via SMS and email, just as it will inform our team, so we can react quickly and get you up and running in the unlikely event that something goes wrong.</p>
                </div>
              </div>
              <div class="mt-10 sm:mt-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                  </svg>
                </div>
                <div class="mt-5 pr-4">
                  <h4 class="text-lg leading-6 font-medium text-gray-900">Daily Backups</h4>
                  <p class="mt-2 text-base leading-6 text-gray-500">Because sometimes problems do happen, we make sure backups are performed daily, and completely recoverable within minutes.</p>
                </div>
              </div>
              <div class="mt-10 sm:mt-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <div class="mt-5 pr-4">
                  <h4 class="text-lg leading-6 font-medium text-gray-900">Security Scans</h4>
                  <p class="mt-2 text-base leading-6 text-gray-500">Malware can be hidden anywhere, so we are constantly searching for it, and in case we find malicious pieces of code on the server, we should inform you immediately while taking care of it at the same time.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white">
        <div class="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span class="block">Unleash your sales team's secret weapon</span>
          </h2>

          <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">Speed up deals with the ability for sales reps to create custom quotes and discounts, login, shop, and purchase on behalf of customers.</p>

          <div class="mt-8 flex justify-center">
            <div class="inline-flex rounded-md shadow">
              <a href="/contact-us.php" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Contact us for a demo
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="relative bg-gray-50 py-16 sm:py-24">
        <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div class="relative sm:py-16 lg:py-0">
            <div aria-hidden="true" class="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
              <div class="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72"></div>
              <svg class="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12" width="404" height="392" fill="none" viewBox="0 0 404 392">
                <defs>
                  <pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
              </svg>
            </div>
            <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
              <div class="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden lg:h-96">
                <iframe width="560" class="absolute inset-0 h-full w-full object-cover" src="https://www.youtube.com/embed/0bjarONvdso" title="Payment Reminders" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
          </div>

          <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            <div class="pt-12 sm:pt-16 lg:pt-20">
              <h2 class="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                Payment Reminders
              </h2>
              <div class="mt-6 text-gray-500 space-y-6">
                <p class="text-lg">
                  Since your business will most often work on an invoice basis with your customers, you need to send them payment reminders after the order has shipped.
                </p>
                <p class="text-lg">
                  With our B2B eCommerce platform, it is easy to overview those customers and send bulk reminders.
                </p>
                <p class="text-base leading-7">
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white">
        <div class="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span class="block">As featured in</span>
          </h2>

          <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">We got featured on major news sites for providing a great B2B eCommerce solutions.</p>

          <div class="bg-white">
            <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
              <div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img class="h-12" src="/images/media/cbs.svg" alt="CBS" />
                </div>
                <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img class="h-12" src="/images/media/fox.svg" alt="FOX" />
                </div>
                <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img class="h-12" src="/images/media/nbc.svg" alt="NBC" />
                </div>
                <div class="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                  <img class="h-12" src="/images/media/usa-today.svg" alt="USA Today" />
                </div>
                <div class="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                  <img class="h-12" src="/images/media/ncn.svg" alt="NCN" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="py-16 bg-gray-50 overflow-hidden lg:py-24">
        <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
          <svg class="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784"><defs><pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect class="text-gray-200" x="0" y="0" width="4" height="4" fill="currentColor"></rect></pattern></defs><rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"></rect></svg>
          <div class="relative">
            <h3 class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">Adapt to your customers' needs</h3>
            <p class="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-500">B2B eCommerce system should serve you and adapt to your needs so that you can optimize your business processes and save on time for your sales team.</p>
          </div>
          <div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div class="relative">
              <h4 class="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">Powerful front-end</h4>
              <p class="mt-3 text-lg leading-7 text-gray-500">Everybody has different habits, and that is absolutely fine. Your habits help you stay organised throughout the day, and we won't make you change them for us.</p>
            </div>
            <div class="mt-10 -mx-4 relative lg:mt-0">
              <svg class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404"><defs><pattern id="ca9667ae-9f92-4be7-abcb-9e3d727f2941" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect class="text-gray-200" x="0" y="0" width="4" height="4" fill="currentColor"></rect></pattern></defs><rect width="784" height="404" fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"></rect></svg>
              <iframe width="560" height="300" class="relative mx-auto rounded-2xl shadow-xl inset-0 w-full object-cover" src="https://www.youtube.com/embed/73Z21tT_1i0" title="Product attributes and production analytics" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          <svg class="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12" width="404" height="784" fill="none" viewBox="0 0 404 784"><defs><pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect class="text-gray-200" x="0" y="0" width="4" height="4" fill="currentColor"></rect></pattern></defs><rect width="404" height="784" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"></rect></svg><div class="relative mt-12 sm:mt-16 lg:mt-24">
          <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div class="lg:col-start-2">
              <h4 class="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">Adaptive back-end</h4>
              <p class="mt-3 text-lg leading-7 text-gray-500">Do your customers prefer using XLS instead of the web interface? Our B2B eCommerce system allows you to export lists of products to an XLS file, email them to your customer, and then import them back into the system while keeping you informed of information changes that happened in the meantime.</p>
              <p class="mt-3 text-lg leading-7 text-gray-500">Export+upload XLS system will allow you flexibility while transitioning from old-fashion B2B, while sales representatives will save time to perform more critical tasks.</p>
            </div>
            <div class="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
              <svg class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404"><defs><pattern id="e80155a9-dfde-425a-b5ea-1f6fadd20131" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect class="text-gray-200" x="0" y="0" width="4" height="4" fill="currentColor"></rect></pattern></defs><rect width="784" height="404" fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"></rect></svg>

              <iframe width="560" height="300" class="relative rounded-2xl shadow-xl inset-0 w-full object-cover" src="https://www.youtube.com/embed/liv-RBh95PM" title="XLS Order Upload Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          </div>
        </div>
      </div>

      <div class="bg-white">
        <div class="max-w-screen-xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            <span>Want to learn more?</span>
            <br />
            <span>We'd love to answer your questions.</span>
          </h2>
          <div class="mt-8 flex justify-center">
            <div class="inline-flex rounded-md shadow">
                <a class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out" href="/contact-us.php">
                    Contact us
                </a>
            </div>
          </div>
        </div>
      </div>

      <div class="relative bg-gray-50 py-16 sm:py-24">
        <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div class="relative sm:py-16 lg:py-0">
            <div aria-hidden="true" class="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
              <div class="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72"></div>
              <svg class="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12" width="404" height="392" fill="none" viewBox="0 0 404 392">
                <defs>
                  <pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
              </svg>
            </div>
            <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
              <div class="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden lg:h-96">
                <iframe width="560" class="absolute inset-0 h-full w-full object-cover" src="https://www.youtube.com/embed/Ge2Ow1ZbY9Y" title="Product attributes and production analytics" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
          </div>

          <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            <div class="pt-12 sm:pt-16 lg:pt-20">
              <h2 class="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                Decisions are better when backed by data
              </h2>
              <div class="mt-6 text-gray-500 space-y-6">
                <p class="text-lg">
                  Since your business will most often work on an invoice basis with your customers, you need to send them payment reminders after the order has shipped.
                </p>
                <p class="text-lg">
                  With our B2B eCommerce platform, it is easy to overview those customers and send bulk reminders.
                </p>
                <p class="text-base leading-7">

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white">
        <div class="max-w-screen-xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div class="pb-16 xl:flex xl:items-center xl:justify-between">
            <div>
              <h1 class="text-4xl leading-10 font-extrabold sm:text-5xl sm:leading-none sm:tracking-tight">
                <span class="text-gray-900">Starting from </span>
                <span class="text-indigo-600">{getB2BPrice()}</span>
              </h1>
              <p class="mt-5 text-xl leading-7 text-gray-500">Standard implementation takes about six months and requires a project manager on the side of the client.</p>
            </div>
            <a class="mt-8 w-full bg-indigo-600 border border-transparent px-5 py-3 inline-flex items-center justify-center text-base leading-6 font-medium rounded-md text-white hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out sm:mt-10 sm:w-auto xl:mt-0"
               href="/contact-us.php">
                Get a custom quote
            </a>
          </div>
        </div>
      </div>
    </LayoutPage>
  )
}
