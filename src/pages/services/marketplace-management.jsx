import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import LayoutPage from '../../components/layout_page';
import NavCenter from '../../components/nav_center';

import aboutYouImg from '../../images/marketplaces/aboutyou-black.png';
import breuningerImg from '../../images/marketplaces/breuninger-black.png';
import douglasImg from '../../images/marketplaces/douglas-black.png';
import ottoImg from '../../images/marketplaces/otto-black.png';
import zalandoImg from '../../images/marketplaces/zalando-black.png';

export default function MarketplaceManagement() {
	return (
		<LayoutPage>
			<Helmet>
				<title>Marketplace setup and management through TradeByte</title>
			</Helmet>

			<div className="relative overflow-hidden bg-gray-50">
				<div className="hidden sm:absolute sm:inset-y-0 sm:block sm:h-full sm:w-full">
					<div className="relative mx-auto h-full max-w-screen-xl">
						<svg
							className="absolute right-full translate-y-1/4 translate-x-1/4 transform lg:translate-x-1/2"
							width="404"
							height="784"
							fill="none"
							viewBox="0 0 404 784"
						>
							<defs>
								<pattern
									id="f210dbf6-a58d-4871-961e-36d5016a0f49"
									x="0"
									y="0"
									width="20"
									height="20"
									patternUnits="userSpaceOnUse"
								>
									<rect
										className="text-gray-200"
										x="0"
										y="0"
										width="4"
										height="4"
										fill="currentColor"
									/>
								</pattern>
							</defs>
							<rect
								width="404"
								height="784"
								fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
							/>
						</svg>
						<svg
							className="absolute left-full -translate-y-3/4 -translate-x-1/4 transform md:-translate-y-1/2 lg:-translate-x-1/2"
							width="404"
							height="784"
							fill="none"
							viewBox="0 0 404 784"
						>
							<defs>
								<pattern
									id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
									x="0"
									y="0"
									width="20"
									height="20"
									patternUnits="userSpaceOnUse"
								>
									<rect
										className="text-gray-200"
										x="0"
										y="0"
										width="4"
										height="4"
										fill="currentColor"
									/>
								</pattern>
							</defs>
							<rect
								width="404"
								height="784"
								fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
							/>
						</svg>
					</div>
				</div>
				<div className="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
					<NavCenter />

					<main className="mt-8">
						<div>
							<div className="relative">
								<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
								<div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
									<div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
										<div className="absolute inset-0">
											<img
												className="h-full w-full object-cover"
												src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
												alt="People working on laptops"
											/>
											<div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
										</div>
										<div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
											<h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
												<span className="block text-white">
													Sell your products on
												</span>
												<span className="block text-indigo-200">
													marketplaces, easily.
												</span>
											</h1>
											<p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">
												Launch like a rocket and growth without limits. Join ourwide range of partners and enter the worlds most populat marketplaces.
											</p>
											<div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
													<a
														href="#"
														className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8"
													>
														Learn more
													</a>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="bg-gray-100">
								<div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
									<p className="text-center text-sm font-semibold uppercase tracking-wide text-gray-500">
										Would you sell on any of these?
									</p>
									<div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-6 lg:grid-cols-6">
										<div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
											<img
												className="h-12"
												src={aboutYouImg}
												alt="AboutYou"
											/>
										</div>
										<div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
											<img
												className="h-12"
												src={breuningerImg}
												alt="Beuninger"
											/>
										</div>
										<div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
											<img
												className="h-12"
												src={zalandoImg}
												alt="Zalando"
											/>
										</div>
										<div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
											<img
												className="h-12"
												src={ottoImg}
												alt="OTTO"
											/>
										</div>
										<div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
											<img
												className="h-12"
												src={douglasImg}
												alt="Douglas"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>

			<div className="bg-indigo-50">
				<div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-24 lg:px-8">
					<h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
						<span className="block">Get in touch?</span>
						<span className="block text-indigo-600">Book your call today.</span>
					</h2>
					<div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
						<div className="inline-flex rounded-md shadow">
							<Link
								to="/contact/"
								className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
							>
								Get started
							</Link>
						</div>
					</div>
				</div>
			</div>
		</LayoutPage>
	);
}
