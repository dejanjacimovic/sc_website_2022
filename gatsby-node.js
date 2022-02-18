const fetch = require('node-fetch');

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest
}) => {
  const response = await fetch('https://api.ipify.org?format=jsonp&callback=getIP');
  const data = await response.json();
  data.response.docs.forEach((item) => {
    createNode({
      ...item,
      id: item._id,
      internal: {
        type: 'CustomerIp',
        contentDigest: createContentDigest(item)
      }
    });
  });
};


exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest
}) => {
  const response = await fetch('http://api.ipstack.com/178.222.19.167?access_key=ecb285d703ed9506024a975b75fc7b7b');
  const data = await response.json();
};

