import * as React from 'react';
import { Link } from 'gatsby';
import LayoutPage from '../components/layout_page';
import NavCenter from '../components/nav_center';

export default function AboutUs() {
  return (
    <LayoutPage>
      <div className="bg-white">
        <div className="relative">
          <div className="block absolute inset-y-0 h-full w-full">
            <div className="relative h-full">
              <svg className="absolute right-full transform translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full" width="404" height="784" fill="none" viewBox="0 0 404 784"><defs><pattern id="e229dbec-10e9-49ee-8ec3-0286ca089edf" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect className="text-gray-200" x="0" y="0" width="4" height="4" fill="currentColor"></rect></pattern></defs><rect width="404" height="784" fill="url(#ad9a0a02-b58e-4a1d-8c36-1b649889af63)"></rect></svg><svg className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4" width="404" height="784" fill="none" viewBox="0 0 404 784"><defs><pattern id="d2a68204-c383-44b1-b99f-42ccff4e5365" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect className="text-gray-200" x="0" y="0" width="4" height="4" fill="currentColor"></rect></pattern></defs><rect width="404" height="784" fill="url(#478e97d6-90df-4a89-8d63-30fdbb3c7e57)"></rect></svg>
            </div>
          </div>
          <div className="relative pt-6 pb-12 lg:pb-20">
            <NavCenter />
          </div>
        </div>
      </div>

      <div className="relative py-16 bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div className="relative h-full text-lg max-w-prose mx-auto">
            <svg className="absolute top-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384"><defs><pattern id="74b3fd99-0a6f-4271-bef2-e80eeafdf357" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect className="text-gray-200" x="0" y="0" width="4" height="4" fill="currentColor"></rect></pattern></defs><rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"></rect></svg>
            <svg className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384"><defs><pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect className="text-gray-200" x="0" y="0" width="4" height="4" fill="currentColor"></rect></pattern></defs><rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"></rect></svg>
            <svg className="absolute bottom-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384"><defs><pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect className="text-gray-200" x="0" y="0" width="4" height="4" fill="currentColor"></rect></pattern></defs><rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"></rect></svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto mb-6">
            <p className="text-base text-center leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Learn more</p>
            <h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">About Us</h1>
            <p className="text-xl text-gray-500 leading-8">Hi there,<br/>
              Let me tell you the story about StuntCoders (some of us are in this photo).
            </p>
            <figure><img className="w-full rounded-lg" src="https://d10ngartke0vp.cloudfront.net/stunt-family.jpg" alt="StuntCoders team" width="1310" loading="auto" /></figure>
          </div>
          <div className="prose prose-lg text-gray-500 mx-auto">
            <p>When we were kids, we were honest about our fantasies. We were hungry for knowledge and all that mattered was fun. Later, we grew up and started doing what we were told to. Soon, we started despising Mondays and continued with our lives without trying to make our days count.</p>
            <p>We <strong>honestly believed</strong> that this is not the road we were meant to take, because if you are not truly happy, it will show on the products you deliver. We wanted an environment where we would feel free to talk about ideas, a place where we could learn something new every day and where we could come to be productive and give our maximum. We wanted a place where you would ask yourself: “How come the whole week has already gone by?!”.</p>
            <p>So we founded a company and brought our friendship to the office. We didn’t want employees, we wanted a family of professionals that could come up with killing solutions. We called it StuntCoders.</p>

            <p><strong>StuntCoders is a family</strong>, and when we accept a new project, our <strong>client becomes</strong> a part of <strong>our family</strong>. We want to make our clients feel welcome and we want them to know that <strong>we care</strong>. We care about their ideas and plans, and we try hard to make them happen. We know how important their vision is, as we have fulfilled ours.</p>
            <p>Our knowledge is our client’s shortcut to success. And we don’t search for shortcuts in our work. We believe in people and ideas. We know that with a good idea, we can do more and we’re ready to work more and harder than others because we know that in the end, we’ll be proud. Proud of what we achieved, proud of ourselves and proud of our work.</p>
            <p>Sincerely,<br/><span className="text-indigo-600">Dejan Jacimovic</span></p>
          </div>
        </div>
      </div>
    </LayoutPage>
  )
}
