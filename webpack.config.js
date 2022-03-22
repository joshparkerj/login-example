module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'swc-loader',
        options: {
          jsc: {
            parser: {
              jsx: true,
            },
          },
        },
      },
    ],
  },
};
