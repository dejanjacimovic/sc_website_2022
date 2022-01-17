import './css/tailwind.css';
import React from 'react';
import Header from '../components/header';
import NavCenter from '../components/nav_center';
import NavLeft from '../components/nav_left';

export default function LayoutPage(content) {
  return (
    (<Header />),
    (
      <body className="font-sans antialiased text-gray-900">
        <div className="">
          <Hero nav=content.nav />
          {content.children}
        </div>
      </body>
    )
  );
}
