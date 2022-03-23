const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  module: {
    rules: [
      // babel-loader
      // for transpiling JSX code to regular JS code that browsers can understand
      {
        test: /\.(js|jsx)$/,
        // use: ["babel-loader"],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"], //presets can be included here as well instead of .babelrc file
          },
        },
        exclude: /node_modules/,
      },
      // html-loader
      // for detecting and parsing img tag in html
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../src/template.html"),
    }),
  ],
};
