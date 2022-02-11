import React from 'react';
import { Link } from 'gatsby';

export default function Footer() {
  return (
    <div className="bg-gray-900 font-sans text-gray-900 antialiased">
      <div className="mx-auto max-w-screen-xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
          <div className="sm:mt-12">
            <h4 className="text-sm font-semibold uppercase leading-5 tracking-wider text-gray-400">
              Company
            </h4>
            <ul className="mt-4">
              <li>
                <Link
                  className="text-base leading-6 text-gray-300 hover:text-white"
                  to="/testimonials/"
                >
                  Testimonials
                </Link>
              </li>
              <li className="mt-4">
                <Link
                  className="text-base leading-6 text-gray-300 hover:text-white"
                  to="/about/"
                >
                  About us
                </Link>
              </li>
              <li className="mt-4">
                <Link
                  className="text-base leading-6 text-gray-300 hover:text-white"
                  to="/services-ecommerce-development/"
                >
                  Services
                </Link>
              </li>
              <li className="mt-4">
                <Link
                  className="text-base leading-6 text-gray-300 hover:text-white"
                  to="/pricing/"
                >
                  Pricing
                </Link>
              </li>
              <li className="mt-4">
                <a
                  className="text-base leading-6 text-gray-300 hover:text-white"
                  href="https://stuntcoders.careers/"
                  target="_blank"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div className="sm:mt-12">
            <h4 className="text-sm font-semibold uppercase leading-5 tracking-wider text-gray-400">
              Legal
            </h4>
            <ul className="mt-4">
              <li>
                <Link
                  className="text-base leading-6 text-gray-300 hover:text-white"
                  to="/privacy-policy/"
                >
                  Privacy
                </Link>
              </li>
              <li className="mt-4">
                <Link
                  className="text-base leading-6 text-gray-300 hover:text-white"
                  to="/terms/"
                >
                  Terms
                </Link>
              </li>
              <li className="mt-4">
                <Link
                  className="text-base leading-6 text-gray-300 hover:text-white"
                  to="/refund-policy/"
                >
                  Refund
                </Link>
              </li>
              <li className="mt-4">
                <Link
                  className="text-base leading-6 text-gray-300 hover:text-white"
                  to="/cancellation-policy/"
                >
                  Cancellation
                </Link>
              </li>
              <li className="mt-4">
                <Link
                  className="text-base leading-6 text-gray-300 hover:text-white"
                  to="/restrictions-policy/"
                >
                  Restrictions
                </Link>
              </li>
            </ul>
          </div>

          <div className="sm:mt-12">
            <h5 className="text-sm font-semibold uppercase leading-5 tracking-wider text-gray-400">
              United States
            </h5>
            <p className="mt-4 text-base leading-6 text-gray-300">
              8 The Green
              <br />
              19901 Dover
              <br />
              Delaware
              <br />
              <br />
              +1 (424) 297-1577 (Dejan)
              <br />
              <br />
            </p>
          </div>

          <div className="sm:mt-12">
            <h5 className="text-sm font-semibold uppercase leading-5 tracking-wider text-gray-400">
              Serbia
            </h5>
            <p className="mt-4 text-base leading-6 text-gray-300">
              Vatroslava Lisinskog 21
              <br />
              11000 Beograd
              <br />
            </p>
          </div>

          <div className="sm:mt-12">
            <h5 className="text-sm font-semibold uppercase leading-5 tracking-wider text-gray-400">
              Nordics
            </h5>
            <p className="mt-4 text-base leading-6 text-gray-300">
              Kalevankatu 31
              <br />
              00100, Helsinki
              <br />
              Finland
              <br />
              <br />
              +358 413131372 (Hugo)
              <br />
              <br />
            </p>
          </div>

          <img
            src="https://stcdshare.s3.amazonaws.com/aaa-banner.png"
            className="w-32 object-right-top sm:m-12"
          />
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <p className="mt-8 text-base leading-6 text-gray-400 md:order-1 md:mt-0">
            © 2020 Adorable Corporation, Inc. in collaboration with StuntCoders
            doo. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
