const deps = require('./package.json').dependencies

module.exports = {
    name: 'mfe1',
    filename: 'remoteEntry.js',
    exposes: {
      "./Mfe1": './src/Mfe1' 
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