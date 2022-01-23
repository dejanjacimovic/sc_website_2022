import React from 'react';

export function getHeroPhrase() {
  let country = getCountryName();

  switch (country) {
    case 'United States':
      return 'trusted by US companies';
    case 'Norway':
      return 'trusted by Norwegian companies';
    case 'Sweden':
    case 'Denmark':
    case 'Finland':
    case 'Iceland':
      return 'trusted by Nordic companies';
    case 'Germany':
      return 'trusted by German companies';
    default:
      return 'trusted by European companies';
  }
}

export function getHeroRegionPhrase() {
  let country = getCountryName();

  switch (country) {
    case 'United States':
      return 'US';
    case 'Norway':
      return 'Norway';
    case 'Sweden':
    case 'Denmark':
    case 'Finland':
    case 'Iceland':
      return 'Nordics';
    case 'Germany':
      return 'Germany';
    default:
      return 'Europe';
  }
}

export function getRegionName() {
  let country = getCountryName();

  switch (country) {
    case 'United States':
      return 'US';
    case 'Norway':
      return 'Norwegian';
    case 'Sweden':
    case 'Denmark':
    case 'Finland':
    case 'Iceland':
      return 'Nordic';
    case 'Germany':
      return 'German';
    default:
      return 'European';
  }
}

function getUserIp() {
  // check if IP is saved in cookie
  // if so, return IP from cookie
  // if not, somehow get user IP
  // write it in cookie
  // return the value
}

function getCountryName() {
  // check if country name in cookie? if so, return cookie value
  cookieStore.set('country', 'United States');
  return 'United States';

  let userIP = getUserIp();

  path =
    'http://api.ipstack.com/' +
    userIP +
    '?access_key=ecb285d703ed9506024a975b75fc7b7b';

  // try {
  //     $country = $ipapi['country_name'];
  // } catch (Exception $e) {
  //     $country = 'United States';
  // }

  return $country;
}

function getB2BPrice() {
  let country = getCountryName();

  switch (country) {
    case 'United States':
      return '$31.700 USD';
    case 'Norway':
      return '280.920 kr';
    case 'Sweden':
      return '275.150 kr';
    case 'Denmark':
      return '200.100 kr';
    default:
      return '27.650 €';
  }
}

function getMaintenancePrice() {
  let country = getCountryName();

  switch (country) {
    case 'United States':
      return '$399 USD';
    case 'Norway':
      return '3.920 kr';
    case 'Sweden':
      return '3.920 kr';
    case 'Denmark':
      return '2.899 kr';
    default:
      return '380 €';
  }
}

function getMaintenanceValue() {
  country = getCountryName();

  switch (country) {
    case 'United States':
      return '$10.000+ USD';
    case 'Norway':
      return '100.000+ NOK';
    case 'Sweden':
      return '100.000+ SEK';
    case 'Denmark':
      return '100.000+ DKK';
    default:
      return '10.000+ €';
  }
}
