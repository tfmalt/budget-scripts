const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: devMode ? 'development' : 'production',
  entry: ['./src/scripts/main.js', './src/styles/main.scss'],
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/assets',
    filename: 'assets/scripts/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        // Look for Sass files and process them according to the
        // rules specified in the different loaders
        test: /\.(sa|sc)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                includePaths: ['./node_modules']
              }
            }
          }
        ]
      },
      {
        // Adds support to load images in your CSS rules. It looks
        // for .png, .jpg, .jpeg and .gif
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: '../images',
              emitFile: false
            }
          }
        ]
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/styles/main.css'
    })
  ]
};
