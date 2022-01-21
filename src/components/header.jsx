import React from 'react';
import Layout from '../components/header';
import favicon from '../images/logo-purple.png'

export default function Header() {
  return (
    <header>
      <title>StuntCoders</title>
      <link rel="icon" type="image/png" sizes="16x16" href={favicon} />
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content="" />
      <meta name="author" content="" />
      <meta name="facebook-domain-verification" content="u7n67cd60by0290q0me248tsm49hl0" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </header>
  );
}
