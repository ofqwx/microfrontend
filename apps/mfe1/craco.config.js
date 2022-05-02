const cracoModuleFederation = require('craco-module-federation');

module.exports = {
    mode: 'development',
    devServer: {
      port: 3001,
    },
    plugins: [
        {
            plugin: cracoModuleFederation,
        },
    ]
  };