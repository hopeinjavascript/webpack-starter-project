const path = require("path");
const { merge: webpackMerge } = require("webpack-merge");
const webpackCommon = require("./webpack.common.js");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = webpackMerge(webpackCommon, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "..", "build"),
  },
  module: {
    rules: [
      //css/scss
      //they are loaded in the reverse order so its imp to the loader that going to load first in the last index of the array
      {
        test: /\.scss$/,
        // use: ["style-loader", "css-loader", "sass-loader"],
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"], // MiniCssExtractPlugin to minify and extract css out of the JS bundle
      },
      // file-loader
      // for resolving the imports/require and convert them to accessiible URL
      // eg. http://127.0.0.1:5500/build/dog.9f95a79c83b9ba9cbc6b93b8c536232c.jpg
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[contenthash].[ext]",
            path: path.resolve(__dirname, "..", "build", "imgs"),
          },
        },
      },
    ],
  },
  plugins: [new CleanWebpackPlugin(), new MiniCssExtractPlugin()], // MiniCssExtractPlugin to minify and extract css out of the JS bundle
});
