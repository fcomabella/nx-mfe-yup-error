const sharedLibraries = new Set([
  '@hookform/resolvers',
  '@hookform/resolvers/yup',
]);

module.exports = {
  name: 'login',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
  shared: (library, defaultConfig) => {
    console.log(library);
    if (sharedLibraries.has(library)) {
      return false;
    }
  },
};
