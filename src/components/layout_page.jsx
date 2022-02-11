import './css/tailwind.css';
import React from 'react';
import Header from './header';
import Footer from './footer';

export default function LayoutPage(content) {
  return (
    (<Header />),
    (
      <body>
        <div className="font-sans text-gray-900 antialiased">
          {content.children}
        </div>
        <Footer />
      </body>
    )
  );
}
