const fetch = require('node-fetch');

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  const response = await fetch(
    'https://api.ipify.org?format=jsonp&callback=getIP'
  );
  const data = await response.json();
  data.response.docs.forEach((item) => {
    createNode({
      ...item,
      id: item._id,
      internal: {
        type: 'CustomerIp',
        contentDigest: createContentDigest(item),
      },
    });
  });
};

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  const response = await fetch(
    'http://api.ipstack.com/178.222.19.167?access_key=ecb285d703ed9506024a975b75fc7b7b'
  );
  const data = await response.json();
};

exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: `/contact-us.php`,
    toPath: `/contact`,
    statusCode: 301,
  });

  createRedirect({
    fromPath: `/pricing.php`,
    toPath: `/pricing`,
    statusCode: 301,
  });

  createRedirect({
    fromPath: `/portfolio.php`,
    toPath: `/portfolio`,
    statusCode: 301,
  });

  createRedirect({
    fromPath: `/testimonials.php`,
    toPath: `/testimonials`,
    statusCode: 301,
  });

  createRedirect({
    fromPath: `/about-us.php`,
    toPath: `/about-us`,
    statusCode: 301,
  });

  createRedirect({
    fromPath: `/services-woocommerce-maintenance.php`,
    toPath: `/services-woocommerce-maintenance`,
    statusCode: 301,
  });

  createRedirect({
    fromPath: `/services-ecommerce-development.php`,
    toPath: `/services-ecommerce-development`,
    statusCode: 301,
  });

  createRedirect({
    fromPath: `/services-b2b-ecommerce.php`,
    toPath: `/services-b2b-ecommerce`,
    statusCode: 301,
  });

  createRedirect({
    fromPath: `/privacy-policy.php`,
    toPath: `/privacy-policy`,
    statusCode: 301,
  });

  createRedirect({
    fromPath: `/terms.php`,
    toPath: `/terms`,
    statusCode: 301,
  });

  createRedirect({
    fromPath: `/refund-policy.php`,
    toPath: `/refund-policy`,
    statusCode: 301,
  });

  createRedirect({
    fromPath: `/cancellation-policy.php`,
    toPath: `/cancellation-policy`,
    statusCode: 301,
  });

  createRedirect({
    fromPath: `/restrictions-policy.php`,
    toPath: `/restrictions-policy`,
    statusCode: 301,
  });

  createRedirect({
    fromPath: `/services-rubyonrails.php`,
    toPath: `/services-rubyonrails`, statusCode: 301,

  });

  createRedirect({
    fromPath: `/blog/*`,
    toPath: `/`,
    statusCode: 301,
  });
};
