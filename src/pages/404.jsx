import * as React from 'react';
import { Link } from 'gatsby';
import LayoutPage from '../components/layout_page';

export default function NotFoundPage() {
  return (
    <LayoutPage>
      <main class="min-h-full bg-cover bg-top sm:bg-top" style="background-image: url('https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75');">
        <div class="max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
          <p class="text-sm font-semibold text-black text-opacity-50 uppercase tracking-wide">404 error</p>
          <h1 class="mt-2 text-4xl font-extrabold text-white tracking-tight sm:text-5xl">Oh oh! We think you got lost.</h1>
          <p class="mt-2 text-lg font-medium text-black text-opacity-50">There's nothing to be found on this link.</p>
          <div class="mt-6">
            <a href="/" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black text-opacity-75 bg-white bg-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50">
              Back to the homepage
            </a>
          </div>
        </div>
      </main>
    </LayoutPage>
  );
};
