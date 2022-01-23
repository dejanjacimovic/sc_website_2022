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

export function getMaintenancePrice() {
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

export function getFaq() {
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
      "Sure, you can. We'd be sad to see you go, but make sure to check out <a href='/refund-policy/'>fair refund policy</a> along the way. We prefer having a fair relationship over a frustrated one.",
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

export function servicesIncluded() {
  return [
    '90 minutes Maximum Response Time',
    '24/7 Support in Case Of Emergency',
    'Problem-free Guarantee',
    'Content Management, Done for You',
    'Phone Support',
    'Weekly Upgrades',
    'Server Monitoring',
    'Daily Backups',
    'Weekly Service Reports',
    'Security Scans',
    'Hack &amp; DDoS Mitigation',
    'Plugin Setup',
    'Catalog Management',
    'Maintaining GDPR',
    'User and role management',
    'Batch import of pages & products',
    'Fighting off SPAM',
    'Speed optimisation',
    'Help improving the search',
    'Suggestions on UI and UX improvements',
    'Ensuring the website is working properly',
    'Configuring SSL (https)',
  ];
}
