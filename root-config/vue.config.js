const singleSpaDefaults = require("webpack-config-single-spa-ts");

module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
  configureWebpack: (config) => {
    config.module.rules.unshift({
      parser: {
        system: false,
      },
    });
  },
};
