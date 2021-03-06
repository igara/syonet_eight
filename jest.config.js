const path = require('path');

module.exports = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  testMatch: ['**/__tests__/**/*.*(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': [
      'esbuild-jest',
      {
        sourcemap: 'both',
      },
    ],
  },
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', '<rootDir>'],
  moduleNameMapper: {
    '\\.(svg)$': '<rootDir>/../../__mocks__/svg_mock.js',
    '\\.(jpg|jpeg|png|gif)$': '<rootDir>/../../__mocks__/image_mock.js',
    '\\.(css)$': '<rootDir>/../../__mocks__/style_mock.js',
  },
  globals: {
    'esbuild-jest': {
      tsconfig: path.join(__dirname, 'jest.tsconfig.json'),
      diagnostics: false,
    },
  },
  snapshotSerializers: ['@emotion/jest/serializer'],
  collectCoverageFrom: ['**/*.{ts|tsx}', '!**/node_modules/**'],
};
