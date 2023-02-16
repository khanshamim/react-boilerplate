const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    index: ["./src/index.js"],
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
  optimization: {
    usedExports: true,
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
};
