
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [['import', {"libraryName": "antd", "style": "css"}]]
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
        // use: ["style-loader", "css-loader"]
      },
    ]
  },
  devServer: {
    historyApiFallback: true,
    port: 8080,
    proxy:{
        '/v2': {
            target: 'http://api.douban.com',
            secure:false,
            changeOrigin: true,
            pathRewrite: {
                '^/v2': ''
            }
        }
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};