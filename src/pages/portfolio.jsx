import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image';
import LayoutPage from '../components/layout_page';
import NavCenter from '../components/nav_center';
import { getClients } from '../helpers/portfolio';

function findImage(fileName, edges) {
  for (let i = 0; i < edges.length; i++) {
    if (edges[i].node.relativePath == fileName) {
      return getImage(edges[i].node.childImageSharp);
    }
  }

  return '';
}

function portfolioList(edges) {
  let clients = getClients();
  let output = [];
  for (var key in clients) {
    output.push(project(key, clients[key], edges));
  }

  return output;
}

function project(clientName, client, edges) {
  return (
    <li>
      <div className="space-y-4">
        <div className="aspect-w-3 aspect-h-2">
          <GatsbyImage
            imgClassName="object-cover shadow-lg rounded-lg"
            image={findImage(client.image, edges)}
            alt={clientName}
            formats={['auto', 'webp']}
            height=200
          />
        </div>

        <div className="space-y-2">
          <div className="text-lg leading-6 font-medium space-y-1">
            <h3>{clientName}</h3>
            <p className="text-indigo-600">{client['tehnologies']}</p>
          </div>
          <ul className="flex space-x-5">
            <li>
              <a
                href={client['link']}
                target="_blank"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Website</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>{client['country']}</li>
          </ul>
        </div>
      </div>
    </li>
  );
}

export default function Portfolio({ data }) {
  return (
    <LayoutPage>
      <div className="relative pt-6 pb-2 sm:pb-16 md:pb-2 lg:pb-2 xl:pb-2">
        <NavCenter />
      </div>

      <div className="bg-white">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Our Portfolio
              </h2>
              <p className="text-xl text-gray-500">
                List of projects we have built, maintained, or co-worked on
                developing, and technologies they are built on.
              </p>
            </div>
            <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
              {portfolioList(data.allFile.edges)}
            </ul>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}

export const IMAGES = graphql`
  query Portfolio {
    allFile {
      edges {
        node {
          relativePath
          childImageSharp {
            gatsbyImageData(
              width: 600
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`;
