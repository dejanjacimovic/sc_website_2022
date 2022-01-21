import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import LayoutPage from '../../components/layout_page';
import NavLeft from '../../components/nav_left';

export default function CampDavid() {
  return (
    <LayoutPage>
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-screen-xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="50,0 100,0 50,100 0,100"></polygon>
            </svg>

            <NavLeft />

            <main className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-5xl">
                  <span className="mr-1">Direct to Consumer</span>
                  <br className="xl:hidden" />
                  <span className="text-indigo-600">&amp; Business to Business</span>
                </h2>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">StuntCoders worked closely with Camp David &amp; Soccx to optimize server infrastructure, backups, set up server orchestration, develop and integrate and bring the B2B platform to market based on the AddFashion system.</p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <StaticImage className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="../../images/cases/clinton-main.jpeg" loading="auto" alt="Camp David case study" />
        </div>
      </div>

      <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
          <svg className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784"><defs><pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect className="text-gray-200" x="0" y="0" width="4" height="4" fill="currentColor"></rect></pattern></defs><rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"></rect></svg><div className="relative">
          <h3 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">How it All Started?</h3>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-500">
            In 2016 StuntCoders was approached with a request to help maintain the current Magento system by providing technical knowledge and support in migration to the newly built Oxid eCommerce.
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-500">
            StuntCoders worked closely with Camp David & Soccx to optimize server infrastructure, reliable backup systems, set up server orchestration, develop and integrate and bring the B2B platform to market based on the AddFashion system.
          </p>
          </div>
          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">Automating the Future</h4>
              <p className="mt-3 text-lg leading-7 text-gray-500">
                To build a truly scalable solution means avoiding redundancy at all costs. That was an integral part of our strategy when building B2B and B2C systems with the Clinton team and other subcontractors.
              </p>
              <p className="mt-3 text-lg leading-7 text-gray-500">
                Both systems are running fully autonomously connected to the back-office performing a real-time synchronization of stock, fulfillment, and product data.
              </p>
              <p className="mt-3 text-lg leading-7 text-gray-500">
                We reduced the human error factor close to zero by running a fully automated system and saved numerous work hours.
              </p>
            </div>
            <div className="mt-10 -mx-4 relative lg:mt-0">
              <svg className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404"><defs><pattern id="ca9667ae-9f92-4be7-abcb-9e3d727f2941" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect className="text-gray-200" x="0" y="0" width="4" height="4" fill="currentColor"></rect></pattern></defs><rect width="784" height="404" fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"></rect></svg>
              <StaticImage className="relative mx-auto rounded-lg shadow-xl border-gray-200" width="490" src="../../images/cases/clinton-growth.jpeg" loading="auto" alt="Clinton collaboration" />
            </div>
          </div>
          <svg className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12" width="404" height="784" fill="none" viewBox="0 0 404 784"><defs><pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect className="text-gray-200" x="0" y="0" width="4" height="4" fill="currentColor"></rect></pattern></defs><rect width="404" height="784" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"></rect></svg>
          <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">Optimizing for B2B Sales</h4>
              <p className="mt-3 text-lg leading-7 text-gray-500">
                Camp David previously had 60 full-time employees working only on generating offers through non-scalable XLS files sent via email to the merchants and filled in the ERP by hand.
              </p>
              <p className="mt-3 text-lg leading-7 text-gray-500">
                By building a fully integrated B2B store with pre-order and re-order systems, Camp David has saved 40+ hours a month for each sales employee.
              </p>
            </div>
            <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
              <svg className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404"><defs><pattern id="e80155a9-dfde-425a-b5ea-1f6fadd20131" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect className="text-gray-200" x="0" y="0" width="4" height="4" fill="currentColor"></rect></pattern></defs><rect width="784" height="404" fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"></rect></svg>
              <StaticImage className="relative mx-auto rounded-lg shadow-xl border-gray-200" width="490" src="../..//images/cases/clinton-vibes.jpeg" alt="Clinton Vibes" loading="auto" />
            </div>
          </div>
          </div>
        </div>
      </div>

      <section className="bg-white overflow-hidden">
      <div className="relative max-w-screen-xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">
          <svg className="absolute top-full left-0 transform translate-x-80 -translate-y-24 lg:hidden" width="784" height="404" fill="none" viewbox="0 0 784 404"><defs><pattern id="e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32" x="0" y="0" width="20" height="20" patternunits="userSpaceOnUse"><rect className="text-gray-200" x="0" y="0" width="4" height="4" fill="currentColor"></rect></pattern></defs><rect width="784" height="404" fill="url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)"></rect></svg><svg className="hidden lg:block absolute right-full top-1/2 transform translate-x-1/2 -translate-y-1/2" width="404" height="784" fill="none" viewbox="0 0 404 784"><defs><pattern id="56409614-3d62-4985-9a10-7ca758a8f4f0" x="0" y="0" width="20" height="20" patternunits="userSpaceOnUse"><rect className="text-gray-200" x="0" y="0" width="4" height="4" fill="currentColor"></rect></pattern></defs><rect width="404" height="784" fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)"></rect></svg><div className="relative lg:flex lg:items-center">
          <div className="hidden lg:block lg:flex-shrink-0">
            <StaticImage className="h-64 w-64 rounded-full xl:h-80 xl:w-80" src="../..//images/cases/yawafram.jpeg" alt="Yaw's testimonial" loading="auto" />
          </div>
            <div className="relative lg:ml-10">
              <svg className="absolute top-0 left-0 transform -translate-x-8 -translate-y-24 h-36 w-36 text-indigo-200 opacity-50" stroke="currentColor" fill="none" viewbox="0 0 144 144"><path stroke-width="2" d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"></path></svg><blockquote className="relative">
                <div className="text-2xl leading-9 font-medium text-gray-900">
                  <p>StuntCoders has a reputation as a reliable partner, so we at Clinton know they will deliver what has been promised, on time, and on budget.</p>
                </div>
                <footer className="mt-8"><div className="flex">
                    <div className="flex-shrink-0 lg:hidden">
                      <StaticImage className="h-12 w-12 rounded-full" src="../../images/cases/yawafram.jpeg" alt="Yaw Afram's testimonial" loading="auto"/>
                      </div>
                    <div className="ml-4 lg:ml-0">
                      <div className="text-base leading-6 font-medium text-gray-900">Yaw Afram</div>
                      <div className="text-base leading-6 font-medium text-indigo-600">Director of E-Commerce, Clinton Grosshandels GmbH</div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <a name="pricing"></a>
      <div className="relative bg-gray-900">
        <div className="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
          <div className="h-full w-full xl:grid xl:grid-cols-2">
            <div className="h-full xl:relative xl:col-start-2">
              <StaticImage className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0" src="../../images/pricing-plans.jpeg" alt="Pricing plans" />
              <div aria-hidden="true" className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"></div>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
          <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
            <h2 className="text-sm font-semibold tracking-wide uppercase">
              <span className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">Valuable Metrics</span>
            </h2>
            <p className="mt-3 text-3xl font-extrabold text-white">Team. Length. Stack.</p>
            <p className="mt-5 text-lg text-gray-300">Learn more about what efforts we have put together to collaborate with Clinton.</p>
            <div className="mt-8 overflow-hidden">
              <dl className="-mx-8 -mt-8 flex flex-wrap">
                <div className="flex flex-col px-8 pt-8">
                  <dt className="order-2 text-base leading-6 font-medium text-gray-300">
                    in the team
                  </dt>
                  <dd className="order-1 text-2xl leading-8 font-extrabold sm:text-3xl sm:leading-9 bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
                    10+ engineers
                  </dd>
                </div>
                <div className="flex flex-col px-8 pt-8">
                  <dt className="order-2 text-base leading-6 font-medium text-gray-300">
                    of collaboration
                  </dt>
                  <dd className="order-1 text-2xl leading-8 font-extrabold sm:text-3xl sm:leading-9 bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">4+ years</dd>
                </div>
                <div className="flex flex-col px-8 pt-8">
                  <dt className="order-2 text-base leading-6 font-medium text-gray-300">framework of choice</dt>
                  <dd className="order-1 text-2xl leading-8 font-extrabold sm:text-3xl sm:leading-9 bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">Magento, Oxid</dd>
                </div>
                <div className="flex flex-col px-8 pt-8">
                  <dt className="order-2 text-base leading-6 font-medium text-gray-300">orchestration</dt>
                  <dd className="order-1 text-2xl leading-8 font-extrabold sm:text-3xl sm:leading-9 bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">Ansible, AWS</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50">
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            <span>Ready to dive in?</span>
            <br/>
            <span className="text-indigo-600">We'll get you covered.</span>
          </h2>
          <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0">
            <div className="inline-flex rounded-md shadow">
              <Link className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out" to="/contact/">
                  Get started
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out" to="/testimonials/">What did our customers say?</Link>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
