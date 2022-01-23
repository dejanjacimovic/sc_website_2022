import React from 'react';

export function getHeroPhrase() {
  return 'killing it!';
}

export function getHeroRegionPhrase() {
  return 'Europe';
}

export function getRegionName() {
  return 'European';
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
  return 'United States';

  let userIP = getUserIp();

  path = 'http://api.ipstack.com/' + userIP + '?access_key=ecb285d703ed9506024a975b75fc7b7b';

  try {
      $country = $ipapi['country_name'];
  } catch (Exception $e) {
      $country = 'United States';
  }

  return $country;
}
