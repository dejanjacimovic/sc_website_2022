import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import LayoutPage from '../components/layout_page';
import NavCenter from '../components/nav_center';
import contact from '../images/covid-office.jpg';

function encode(data) {
  const formData = new FormData();

  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }

  return formData;
}

export default function Contact() {
  const [state, setState] = React.useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => {
        window.location.href = '/thank-you';
      })
      .catch((error) => alert(error));
  };

  return (
    <LayoutPage>
      <div className="">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Reach out to StuntCoders, we'd love to meet you!</title>
        </Helmet>

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
          <div className="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div className="lg:pr-8">
              <div className="mx-auto max-w-md sm:max-w-lg lg:mx-0">
                <h2 className="text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10">
                  Let's work together
                </h2>
                <p className="mt-4 text-lg leading-7 text-gray-500 sm:mt-3">
                  We’d love to hear from you! Even though our offices are empty
                  during these COVID times, we're still available and fast as
                  ever.
                </p>

                <form
                  className="row-gap-6 sm:col-gap-8 mt-9 grid grid-cols-1 sm:grid-cols-2"
                  name="contact"
                  data-netlify="true"
                  id="contact-us-form"
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  <div className="sm:col-span-2">
                    <label
                      className="block text-sm font-medium leading-5 text-gray-700"
                      for="name"
                    >
                      Name
                    </label>
                    <div className="relative mt-1 rounded-md shadow-sm">
                      <input
                        className="block w-full rounded-md border-gray-300 shadow-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border border-gray-300 p-3"
                        id="name"
                        name="name"
                        type="text"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2 mt-4">
                    <label
                      className="block text-sm font-medium leading-5 text-gray-700"
                      for="email"
                    >
                      Email
                    </label>
                    <div className="relative mt-1 rounded-md shadow-sm">
                      <input
                        className="block w-full rounded-md border-gray-300 shadow-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border border-gray-300 p-3"
                        id="email"
                        name="email"
                        type="email"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2 mt-4">
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
                    <div className="relative mt-1 rounded-md shadow-sm">
                      <textarea
                        className="form-textarea block w-full rounded-md border-gray-300 shadow-sm transition duration-150 ease-in-out sm:text-sm sm:leading-5 border border-gray-300 p-3"
                        id="how_can_we_help"
                        name="how_can_we_help"
                        rows="4"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="text-right sm:col-span-2">
                    <br />
                    <span className="inline-flex rounded-md shadow-sm">
                      <button
                        className="focus:shadow-outline-indigo g-recaptcha inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out hover:bg-indigo-500 focus:border-indigo-700 focus:outline-none active:bg-indigo-700"
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
