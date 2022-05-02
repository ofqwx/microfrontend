const deps = require('./package.json').dependencies

module.exports = {
    name: 'host',
    remotes: {
        mfe1: 'mfe1@http://localhost:3001/remoteEntry.js'
    },
    shared: {
        ...deps,
        react: { singleton: true, eager: true, requiredVersion: deps.react },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: deps["react-dom"],
        },
      },
}