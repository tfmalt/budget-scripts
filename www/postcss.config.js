const postcssPresetEnv = require('postcss-preset-env');

if (process.env.NODE_ENV === 'production') {
  module.exports = {
    plugins: [postcssPresetEnv(), require('cssnano')]
  };
  return;
}
module.exports = {};
