const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "JS/[name].bundle.js",
    publicPath: "/"
  },
  devServer: {
    contentBase: "build",
    inline: false,
    port: 3000
  },
  module: {
    rules: [
      // Javascript Settings
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"]
            }
          },
          "eslint-loader"
        ]
      },
      // Assets Settings
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              fallback: {
                loader: "file-loader"
              }
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              fallback: {
                loader: "file-loader"
              }
            }
          },
          "img-loader"
        ]
      },
      // CSS Settings
      {
        test: /\.styl$/,
        use: [
          ExtractCssChunks.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[name]__[local]__[hash:base64:5]"
            }
          },
          "postcss-loader",
          "stylus-loader"
        ]
      },
      {
        test: /\.css$/,
        use: [
          ExtractCssChunks.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[name]__[local]__[hash:base64:5]"
            }
          },
          "postcss-loader"
        ]
      }
    ]
  },
  // Plugins
  plugins: [
    new ExtractCssChunks({
      filename: "CSS/[name].css",
      hot: true,
      reloadAll: true,
      cssModules: true
    }),
    new CopyWebpackPlugin([
      {
        from: "./public",

        to: "public/[path]/[name].[ext]"
      }
    ]),
    new HtmlWebpackPlugin({
      minify: true,
      title: "React App",
      filename: "index.html",
      template: "./public/index.html"
    })
  ],
  resolve: {
    extensions: [".js"]
  }
};
