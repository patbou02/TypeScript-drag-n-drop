const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/app.ts',
  performance: {
    maxAssetSize: 50000,
    maxEntrypointSize: 50000,
  },
  devServer: {
    static: [
      {
        directory: path.join(__dirname),
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'none',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new CleanPlugin.CleanWebpackPlugin()
  ]
};