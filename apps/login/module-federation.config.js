module.exports = {
  name: 'login',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
  shared: (library, defaultConfig) => {
    if (library === '@hookform/resolvers/yup') {
      return {
        ...defaultConfig,
        strictVersion: false,
      };
    }

    return defaultConfig;
  },
};
