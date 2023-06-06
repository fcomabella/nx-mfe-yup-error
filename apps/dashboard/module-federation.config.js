const deps = require('../../package.json').dependencies;

const sharedLibraries = new Set([
  '@hookform/resolvers',
  'react',
  'react-dom',
  'react-hook-form',
  'react-router-dom',
  'yup',
]);

module.exports = {
  name: 'dashboard',
  remotes: ['login', 'validated-form'],
  shared: (library, defaultConfig) => {
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
