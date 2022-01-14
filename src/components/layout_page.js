import React from 'react';
import Header from "../components/header";
import './css/tailwind.css';

export default function LayoutPage(content) {
  return (
    <Header/>,
    <body className="font-sans antialiased text-gray-900">
      <div className="">
        {content.children}
      </div>
    </body>
  );
}
