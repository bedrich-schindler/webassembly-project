const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = () => ({
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    static: Path.join(__dirname, 'build'),
  },
  devtool: false,
  entry: {
    bundle: [
      Path.join(__dirname, 'src/main.jsx'),
    ],
  },
  experiments: {
    topLevelAwait: true,
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(js|jsx)$/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[hash:base64:8]',
              },
            },
          },
          { loader: 'postcss-loader' },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: ['node_modules'],
              },
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: Path.join(__dirname, 'build/generated'),
    publicPath: '/generated/',
  },
  performance: {
    hints: false,
  },
  plugins: [
    new StyleLintPlugin({
      configFile: 'stylelint.config.js',
      syntax: 'scss',
    }),
    new HtmlWebpackPlugin({
      filename: Path.join(__dirname, 'build/index.html'),
      minify: false,
      template: Path.join(__dirname, 'src/assets/index.html'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    modules: ['src', 'node_modules'],
  },
});
