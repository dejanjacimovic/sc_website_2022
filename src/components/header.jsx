import React from 'react';
import Layout from '../components/header';
import favicon from '../images/logo-purple.png'

export default function Header() {
  return (
    <header>
      <title>StuntCoders</title>
      <link rel="icon" type="image/png" sizes="16x16" href={favicon} />
    </header>
  );
}
