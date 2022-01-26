import './css/tailwind.css';
import React from 'react';
import Header from './header';
import Footer from './footer';

export default function LayoutPage(content) {
  return (
    (<Header />),
    (
      <div className="">
        {content.children}
      </div>
    ),
    (
      <Footer />
    )
  );
}

exports.onRenderBody = ({ setBodyAttributes }) => {
  setBodyAttributes({
      className: 'font-sans antialiased text-gray-900'
    });
};
