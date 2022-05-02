const cracoModuleFederation = require("craco-module-federation");

module.exports = {
  mode: "development",
  devServer: {
    port: 8001,
  },
  eslint: {
    enable: false,
  },
  plugins: [
    {
        plugin: cracoModuleFederation,
    },
]
};
