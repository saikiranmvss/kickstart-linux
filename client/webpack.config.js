const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
require("dotenv").config();

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  devServer: {
    static: path.join(__dirname, "public"),
    port: 3000,
    historyApiFallback: true,
    hot: true,
    proxy: [
      {
        context: ["/api"], 
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ 
      template: "./public/index.html",
    }),
    
    new CopyWebpackPlugin({
      patterns: [
        { from: "public", to: "", globOptions: { ignore: ["**/index.html"] } }, 
      ],
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env), 
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
