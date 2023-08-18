// webpack.config.js

module.exports = {
  entry: './browser/app.js',
  output: {
    path: __dirname + '/browser',
    filename: 'bundle.js',
  },
  devtool: 'eval-source-map',
};

