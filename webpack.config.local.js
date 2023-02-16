const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const fs = require("fs");

module.exports = {
  mode: "development",
  entry: {
    index: ["./src/index.js"],
  },
  devtool: "eval-cheap-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    hot: true,
    compress: true,
    port: "auto", // Default port would be 8080.
    server: {
      type: "https",
      options: {
        key: fs.readFileSync("localhost.key"),
        cert: fs.readFileSync("localhost.crt"),
        ca: fs.readFileSync("localhost.pem"),
      },
    },
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif|otf|ttf|eot|woff|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              emitFile: true,
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/i,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            presets: [
              "@babel/env",
              [
                "@babel/preset-react",
                {
                  runtime: "automatic",
                },
              ],
            ],
            plugins: [
              ["@babel/plugin-proposal-decorators", { decoratorsBeforeExport: true }],
              "@babel/plugin-proposal-function-bind",
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "[name].bundle.js",
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "public/images", to: "images" },
        { from: "public/favicon.ico", to: "favicon.ico" },
        { from: "public/index.html", to: "index.html" },
        { from: "configs/local.env", to: "configs/env-config.js" },
      ],
    }),
  ],
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
};
