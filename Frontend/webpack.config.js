const path = require("path")

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    index: path.resolve(__dirname, "./src/index.ts"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public", "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
}
