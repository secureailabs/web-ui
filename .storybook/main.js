const path = require('path');

module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/components/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-scss',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    config.resolve.alias['@app'] = path.resolve(__dirname, '../src');
    config.resolve.alias['@components'] = path.resolve(
      __dirname,
      '../src/components'
    );
    config.resolve.alias['@utils'] = path.resolve(__dirname, '../src/utils');

    config.resolve.alias['@layout'] = path.resolve(__dirname, '../src/layout');
    config.resolve.alias['@assets'] = path.resolve(__dirname, '../src/assets');
    return config;
  },
};
