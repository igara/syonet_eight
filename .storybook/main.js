const path = require('path');

module.exports = {
  stories: ['../projects/**/components/**/*.stories.mdx'],
  staticDirs: ['./public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-postcss',
    'storybook-addon-performance/register',
    'storybook-addon-mock/register',
    'storybook-addon-next-router',
  ],
  typescript: {
    reactDocgen: false,
  },
  webpackFinal: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@www': path.resolve(__dirname, '../projects/syonet_eight_www'),
      '@design_system': path.resolve(__dirname, '../projects/syonet_eight_design_system'),
      '@emotion/core': path.resolve(__dirname, '../node_modules/@emotion/react'),
      'emotion-theming': path.resolve(__dirname, '../node_modules/@emotion/react'),
    };

    return config;
  },
};
