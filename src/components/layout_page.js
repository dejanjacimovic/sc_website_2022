import './css/tailwind.css';
import React from 'react';
import Header from '../components/header';
import Hero from '../components/hero';
import Footer from '../components/footer';

export default function LayoutPage(content) {
  return (
    (<Header />),
    (
      <body className="font-sans antialiased text-gray-900">
        <div className="">
          <Hero nav={content.nav} />
          {content.children}
        </div>
        <Footer />
      </body>
    )
  );
}
