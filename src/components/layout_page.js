import './css/tailwind.css';
import React from 'react';
import Header from './header';
import Hero from './hero';
import Footer from './footer';

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
