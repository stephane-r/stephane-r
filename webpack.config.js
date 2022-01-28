const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  entry: ["./src/index.html", "./src/index.js"],
  module: {
    rules: [
      {
        test: /\.html$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          context: path.resolve(__dirname, "src"),
          from: "./*.html",
        },
      ],
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new HtmlMinimizerPlugin(), new TerserPlugin()],
  },
};
