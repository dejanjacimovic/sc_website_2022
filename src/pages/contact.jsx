import * as React from 'react';
import { Link } from 'gatsby';
import LayoutPage from '../components/layout_page';
import NavCenter from '../components/nav_center';
import contact from '../images/covid-office.jpg';

export default function Contact() {
  return (
    <LayoutPage>
      <div className="">
        <div className="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <NavCenter />
        </div>

        <div className="relative bg-white">
          <div className="lg:absolute lg:inset-0">
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <img
                className="h-56 w-full object-cover lg:absolute lg:h-full"
                src={contact}
                alt=""
                loading="auto"
              />
            </div>
          </div>
          <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
            <div className="lg:pr-8">
              <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
                <h2 className="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10">
                  Let's work together
                </h2>
                <p className="mt-4 text-lg leading-7 text-gray-500 sm:mt-3">
                  We’d love to hear from you! Even though our offices are empty
                  during these COVID times, we're still available and fast as
                  ever.
                </p>

                <form
                  className="mt-9 grid grid-cols-1 row-gap-6 sm:grid-cols-2 sm:col-gap-8"
                  name="contact"
                  data-netlify="true"
                  id="contact-us-form"
                  method="POST"
                >
                  <div className="sm:col-span-2">
                    <label
                      className="block text-sm font-medium leading-5 text-gray-700"
                      for="name"
                    >
                      Name
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <input
                        className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md shadow-sm"
                        id="name"
                        name="name"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      className="block text-sm font-medium leading-5 text-gray-700"
                      for="email"
                    >
                      Email
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <input
                        className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md shadow-sm"
                        id="email"
                        name="email"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label
                        className="block text-sm font-medium leading-5 text-gray-700"
                        for="how_can_we_help"
                      >
                        How can we help you?
                      </label>
                      <span className="text-sm leading-5 text-gray-500">
                        Max. 500 characters
                      </span>
                    </div>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <textarea
                        className="form-textarea block w-full transition ease-in-out duration-150 sm:text-sm sm:leading-5 border-gray-300 rounded-md shadow-sm"
                        id="how_can_we_help"
                        name="how_can_we_help"
                        rows="4"
                      />
                    </div>
                  </div>
                  <div className="text-right sm:col-span-2">
                    <br />
                    <span className="inline-flex rounded-md shadow-sm">
                      <button
                        className="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out g-recaptcha"
                        data-sitekey="6LdoFm0aAAAAAD4ZE5f3sS2PoLph_h0kouP_VPF9"
                        data-callback="onSubmit"
                        data-action="submit"
                        type="submit"
                      >
                        Submit
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
