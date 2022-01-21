import * as React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image'
import LayoutPage from '../components/layout_page';
import NavCenter from '../components/nav_center';

function portfolioList() {
  let myArray = clients();
  let output = [];
  for (var key in myArray) {
    output.push(project(key, myArray[key]));
  }

  return output;
}

function clients() {
  return {
    'SmartyPants Vitamins': {
      tehnologies: 'WordPress, Shopify',
      country: '🇺🇸',
      link: 'https://www.smartypantsvitamins.com/',
      image: '../images/portfolio/smartypantsvitamins.jpeg',
    },
    'CAMP DAVID & SOCCX': {
      tehnologies: 'Oxid e-Commerce',
      country: '🇩🇪',
      link: 'https://www.campdavid-soccx.de/',
      image: '../images/portfolio/campdavid.jpeg',
    },
    Arduino: {
      tehnologies: 'Magento',
      link: 'https://store.arduino.cc/',
      country: '🇮🇹',
      image: '../images/portfolio/arduino.jpeg',
    },
    Tesori: {
      tehnologies: 'Magento, WordPress',
      country: '🇳🇴',
      link: 'https://tesori.no/',
      image: '../images/portfolio/tesori.jpeg',
    },
    BilXtra: {
      tehnologies: 'Magento, WordPress, Ruby on Rails',
      country: '🇳🇴',
      link: 'https://bilxtra.no/',
      image: '../images/portfolio/bilxtra.jpeg',
    },
    Pickles: {
      tehnologies: 'Magento, WordPress',
      country: '🇳🇴',
      link: 'https://pickles.no/',
      image: '../images/portfolio/pickles.jpeg',
    },
    JumpKing: {
      tehnologies: 'WordPress, WooCommerce',
      country: '🇳🇴',
      link: 'https://jumpking.no/',
      image: '../images/portfolio/jumpking.jpeg',
    },
    Smartlapper: {
      tehnologies: 'Magento, WordPress',
      country: '🇳🇴',
      link: 'https://smartlapper.no/',
      image: 'https://stcdshare.s3.amazonaws.com/cfc59pxu4G.png',
    },
    'Lava Art': {
      tehnologies: 'WordPress, WooCommerce, WPML',
      country: '🇳🇴',
      link: 'https://lavaart.com/',
      image: '../images/portfolio/lavaart.jpeg',
    },
    Bedtime: {
      tehnologies: 'WordPress, WooCommerce',
      country: '🇳🇴',
      link: 'https://bedtime.no/',
      image: '../images/portfolio/bedtime.jpeg',
    },
    'Naturlig Liv': {
      tehnologies: 'WordPress, Magento',
      country: '🇳🇴',
      link: 'https://natuligliv.no/',
      image: '../images/portfolio/natuligliv.jpeg',
    },
    'Ulleval Kiropraktor': {
      tehnologies: 'WordPress',
      country: '🇳🇴',
      link: 'https://www.ullevalkiropraktor.no/',
      image: '../images/portfolio/ullevalkiropraktor.jpg',
    },
    'Omage Cure': {
      tehnologies: 'WordPress, WooCommerce',
      country: '🇳🇴',
      link: 'https://omegacure.no/',
      image: '../images/portfolio/omegacure.jpeg',
    },
    Warholms: {
      tehnologies: 'Magento',
      country: '🇳🇴',
      link: 'https://warholms.no/',
      image: '../images/portfolio/warholms.jpeg',
    },
    'Made By Berit': {
      tehnologies: 'WooCommerce, WordPress',
      country: '🇳🇴',
      link: 'https://beritnordstrand.no/',
      image: '../images/portfolio/beritnordstrand.jpeg',
    },
    'CAMP DAVID & SOCCX B2B': {
      tehnologies: 'Ruby On Rails, Magento',
      link: 'https://www.campdavid-soccx.de/',
      country: '🇩🇪',
      image: '../images/portfolio/clinton-b2b.jpeg',
    },
    DNBS: {
      tehnologies: 'WooCommerce, WordPress',
      substack: 'Klarna, WPML',
      country: '🇳🇴',
      link: 'https://www.dnbs.no/en/',
      image: '../images/portfolio/dnbs.jpeg',
    },
    'Sommer Ballett': {
      tehnologies: 'WooCommerce, WordPress',
      substack: 'Klarna, WPML',
      country: '🇳🇴',
      link: 'https://www.sommerballett.no/en/',
      image: '../images/portfolio/sommerballett.jpeg',
    },
    Khujo: {
      tehnologies: 'Magento, WordPress',
      substack: 'Redis, SalesForce, Optimizely, Amazon CloudFront',
      country: '🇩🇪',
      link: 'https://www.khujo.com/',
      image: '../images/portfolio/khujo.jpeg',
    },
    MedLearn: {
      tehnologies: 'WordPress',
      substack: 'Redis',
      country: '🇳🇴',
      link: 'https://medlearn.no/',
      image: '../images/portfolio/medlearn.jpeg',
    },
    'GR Drukkerij': {
      tehnologies: 'WordPress, WooCommece',
      substack: 'Klarna',
      country: '🇳🇱',
      link: 'https://grdruk.nl/',
      image: '../images/portfolio/grdruk.jpeg',
    },
    'Living Autism': {
      tehnologies: 'Ruby On Rails, WordPress',
      substack: 'Redis',
      country: '🇬🇧',
      link: 'https://livingautism.co.uk/',
      image: '../images/portfolio/livingautism.jpg',
    },
    Skntific: {
      tehnologies: 'Ruby On Rails',
      substack: 'Redis, Nginx',
      country: '🇳🇴',
      link: 'https://skintific.no/',
      image: '../images/portfolio/skintific.jpeg',
    },
    LeCollab: {
      tehnologies: 'Ruby On Rails',
      substack: 'Redis, Nginx',
      country: '🇺🇸',
      link: 'https://LeCollab.com/',
      image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixqx=PxHbCpEsMp&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    Selekkt: {
      tehnologies: 'Magento, Algolia',
      substack: 'Nginx',
      country: '🇩🇪',
      link: 'https://selekkt.com/',
      image: '../images/portfolio/selekkt.jpeg',
    },
    'Ucon Acrobatics': {
      tehnologies: 'Magento, Shopify',
      substack: 'Redis, Nginx',
      country: '🇩🇪',
      link: 'https://ucon-acrobatics.com/',
      image: '../images/portfolio/ucon-acrobatics.jpeg',
    },
    Mascolori: {
      tehnologies: 'Magento',
      substack: 'Redis, Nginx',
      country: '🇳🇱',
      link: 'https://mascolori.nl/',
      image: '../images/portfolio/mascolori.jpeg',
    },
    Vaktrommet: {
      tehnologies: 'Magento, Algolia, Custom JS',
      substack: 'Nginx',
      country: '🇳🇴',
      link: 'https://vaktrommet.no/',
      image: '../images/portfolio/vaktrommet.jpeg',
    },
    'Tokyo Jane': {
      tehnologies: 'Magento, WordPress',
      substack: 'Nginx',
      country: '🇩🇪',
      link: 'https://tokyojane.com/',
      image: '../images/portfolio/tokyojane.jpeg',
    },
    Etiketta: {
      tehnologies: 'Nest.js, React',
      substack: 'Nginx, Express JS',
      country: '🇸🇪',
      link: 'https://etiketta.se/',
      image: '../images/portfolio/etiketta.jpeg',
    },
    PosterStar: {
      tehnologies: 'WooCommerce, WPML',
      substack: 'Klarna',
      country: '🇸🇪',
      link: 'https://posterstar.websitetotal.com/',
      image: '../images/portfolio/posterstar.jpeg',
    },
    'Privatni Casovi': {
      tehnologies: 'Ruby On Rails',
      substack: 'Klarna',
      country: '🇷🇸',
      link: 'https://privatni-casovi.net/',
      image: '../images/portfolio/privatni-casovi.jpeg',
    },
    'Fachwelt Verlag': {
      tehnologies: 'WordPress',
      substack: 'Klarna',
      country: '🇩🇪',
      link: 'https://www.fachwelt-verlag.de/',
      image: '../images/portfolio/fachwelt-verlag.jpg',
    },
    'IB Expo': {
      tehnologies: 'Ruby On Rails',
      substack: 'Klarna',
      country: '🇳🇴',
      link: 'https://ib-expo.com/',
      image: '../images/portfolio/ib-expo.jpg',
    },
    Luado: {
      tehnologies: 'Ruby On Rails',
      substack: 'Stripe, Twilio',
      country: '🇳🇴',
      link: 'https://luado.no/',
      image: '../images/portfolio/luado.jpeg',
    },
    'Ruden Energy': {
      tehnologies: 'Craft CMS',
      substack: 'Klarna',
      country: '🇳🇴',
      link: 'https://rudenas.com/',
      image: '../images/portfolio/rudenas.jpeg',
    },
    'Prominent Immobilien': {
      tehnologies: 'WordPress',
      substack: 'Klarna',
      country: '🇩🇪',
      link: 'https://www.prominent-immobilien.com/',
      image: '../images/portfolio/prominent-immobilien.jpg',
    },
    ALP: {
      tehnologies: 'Craft CMS',
      substack: 'Klarna',
      country: '🇳🇴',
      link: 'https://alpinogfjell.no/',
      image: '../images/portfolio/alpinogfjell.jpeg',
    },
    'Bare Bra Barnemat': {
      tehnologies: 'WordPress',
      substack: 'Klarna',
      country: '🇳🇴',
      link: 'https://www.barebrabarnemat.no/',
      image: '../images/portfolio/barebrabarnemat.jpg',
    },
    Industry24h: {
      tehnologies: 'WordPress',
      substack: 'Klarna',
      country: '🇩🇪',
      link: 'https://industry24h.com/',
      image: '../images/portfolio/industry24h.jpeg',
    },
  }
}

function project(clientName, client) {
  let imageSrc = client['image'];
  console.log(imageSrc);

  return (
    <li>
      <div class="space-y-4">
        <div class="aspect-w-3 aspect-h-2">
          <GatsbyImage
            className="object-cover shadow-lg rounded-lg"
            image={imageSrc}
            alt={clientName}
          />
        </div>

        <div class="space-y-2">
          <div class="text-lg leading-6 font-medium space-y-1">
            <h3>{clientName}</h3>
            <p class="text-indigo-600">{client['tehnologies']}</p>
          </div>
          <ul class="flex space-x-5">
            <li>
              <a
                href={client['link']}
                target="_blank"
                class="text-gray-400 hover:text-gray-500"
              >
                <span class="sr-only">Website</span>
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>{client['country']}</li>
          </ul>
        </div>
      </div>
    </li>
  );
}

export default function Portfolio() {
  return (
    <LayoutPage>
      <div class="relative pt-6 pb-2 sm:pb-16 md:pb-2 lg:pb-2 xl:pb-2">
        <NavCenter />
      </div>

      <div class="bg-white">
        <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div class="space-y-12">
            <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Our Portfolio
              </h2>
              <p class="text-xl text-gray-500">
                List of projects we have built, maintained, or co-worked on
                developing, and technologies they are built on.
              </p>
            </div>
            <ul class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
              {portfolioList()}
            </ul>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
