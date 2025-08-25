const HtmlWebPackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html",
});
module.exports = {
  mode: "development",
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3001,
    historyApiFallback: {
      index: "/public/index.html",
    },
    // hot: true,
    // open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    htmlPlugin,
    new ModuleFederationPlugin({
      name: "Host",
      filename: "remoteEntry.js",
      remotes: {
        AuthModule: "AuthModule@http://localhost:3002/remoteEntry.js",
        SecondModule: "Second@http://localhost:3003/remoteEntry.js",
      },
      shared: {
        react: { singleton: true, eager: true },
        "react-dom": {
          singleton: true,
          eager: true,
        },
        "react-router-dom": {
          singleton: true,
          eager: true,
        },
      },
    }),
  ],
};

// Checkout: "Checkout@http://localhost:3000/remoteEntry.js"
