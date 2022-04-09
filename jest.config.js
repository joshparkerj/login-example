module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': [
      '@swc/jest',
      {
        jsc: {
          parser: {
            jsx: true,
          },
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },
  coverageReporters: [
    'cobertura',
  ]
};
