const webpack = require('webpack');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');


const {
  HOT_ONLY_ENTRY,
  NODE_MODULES_PATH
} = require('./paths');

const DEVELOPMENT_CONFIG = {
  entry: {
    client: [
      'react-hot-loader/patch',
      HOT_ONLY_ENTRY
    ]
  },

  output: {
    publicPath: 'http://localhost:9001/assets/'
  },

  cache: true,

  devServer: {
    hot: true,
    port: 9001,
    inline: true,
    host: '0.0.0.0',
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    stats: {
      assets: true,
      timings: true,
      chunks: false,
      children: false
    }
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new WatchMissingNodeModulesPlugin(NODE_MODULES_PATH)
  ]
};

module.exports = DEVELOPMENT_CONFIG;
