const deps = require('../../package.json').dependencies;

const sharedLibraries = new Set([
  'react',
  'react-dom',
  'react-hook-form',
  'react-router-dom',
  'yup',
]);

module.exports = {
  name: 'dashboard',
  remotes: ['login'],
  shared: (library, defaultConfig) => {
    console.log(library);
    if (sharedLibraries.has(library)) {
      return {
        ...defaultConfig,
        singleton: true,
        eager: true,
        requiredVersion: deps[library],
      };
    }

    return false;
  },
};
