const withPlugins = require("next-compose-plugins");
const nextImages = require("next-images");

module.exports = withPlugins([nextImages], {
  images: {
    disableStaticImages: true,
  },
});