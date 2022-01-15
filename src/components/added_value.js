import React from 'react';

function getMaintenanceValue() {
  return "10.000 eur"
}

export default function Pricing() {
  return (
    <div class="bg-white">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-extrabold text-gray-900">Access to our {getMaintenanceValue()} in value resources</h2>
          <p class="mt-4 text-lg text-gray-500">All of our members get access to our database of themes, plugins, fonts, tools, and more...</p>
        </div>
        <dl class="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          <div class="flex">
            <!-- Heroicon name: outline/check -->
            <svg class="flex-shrink-0 h-6 w-6 text-white bg-indigo-500 rounded" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <div class="ml-3">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                1.500+ premium templates
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                With access to the largest theme marketplace in the world, we are confident we can help you achieve that new look for your site.
              </dd>
            </div>
          </div>

          <div class="flex">
            <!-- Heroicon name: outline/check -->
            <svg class="flex-shrink-0 h-6 w-6 text-white bg-indigo-500 rounded" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <div class="ml-3">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                600+ premium plugins
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                If your problem can be solved with specific plugin, we most likely already have it for you.
              </dd>
            </div>
          </div>

          <div class="flex">
            <!-- Heroicon name: outline/check -->
            <svg class="flex-shrink-0 h-6 w-6 text-white bg-indigo-500 rounded" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <div class="ml-3">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Premium caching plugin
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                WP Rocket is the most powerful caching plugin in the world. Use it to improve the speed of your WordPress site, SEO rankings and conversions.
              </dd>
            </div>
          </div>

          <div class="flex">
            <!-- Heroicon name: outline/check -->
            <svg class="flex-shrink-0 h-6 w-6 text-white bg-indigo-500 rounded" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <div class="ml-3">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Image and loading optimisation
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                We store, handle and scale your images with 80% less size while looking just as great!
              </dd>
            </div>
          </div>

          <div class="flex">
            <!-- Heroicon name: outline/check -->
            <svg class="flex-shrink-0 h-6 w-6 text-white bg-indigo-500 rounded" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <div class="ml-3">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                CDN for blazing-fast websites
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                Ultra-fast static and dynamic content delivery over Cloudflare global edge network.
              </dd>
            </div>
          </div>

          <div class="flex">
            <!-- Heroicon name: outline/check -->
            <svg class="flex-shrink-0 h-6 w-6 text-white bg-indigo-500 rounded" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <div class="ml-3">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                SSL for every website
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                Security for you, and your customers should not be discussed. That is why we include HTTPS support for all of our customers.
              </dd>
            </div>
          </div>

          <div class="flex">
            <!-- Heroicon name: outline/check -->
            <svg class="flex-shrink-0 h-6 w-6 text-white bg-indigo-500 rounded" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <div class="ml-3">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Staging server
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                This way, you can always preview and test changes before going live and be sure nothing will get broken.
              </dd>
            </div>
          </div>

          <div class="flex">
            <!-- Heroicon name: outline/check -->
            <svg class="flex-shrink-0 h-6 w-6 text-white bg-indigo-500 rounded" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <div class="ml-3">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Malware &amp; virus scans
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                We help detect malicious code and infected file locations by scanning your WordPress site source code. Just in time, before it can damage your online reputation.
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div>
);
}
