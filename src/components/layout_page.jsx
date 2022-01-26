import './css/tailwind.css';
import React from 'react';
import Header from './header';
import Footer from './footer';

export default function LayoutPage(content) {
  return (
    (<Header />),
    (
      <body>
        <div className="font-sans antialiased text-gray-900">
          {content.children}
        </div>
        <Footer />
      </body>
    )
  );
}


