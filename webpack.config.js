const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
    entry: {
        app: ["babel-polyfill", path.resolve(__dirname, "./src/app.js")]
    },
    output: {
        path: path.resolve(__dirname, "bundles"),
        filename: "bundle.js"
    },
    devtool: "source-map",
    module: {
        rules: [
            {test: /\.jsx?/, use: "babel-loader", exclude: /node_modules/},
            {test: /\.html$/, loader: "raw-loader"},
            {
                test: /\.(sass|scss)$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader!sass-loader?sourceMap=true?outputStyle=:compressed"
            },
        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
    ],
    devServer: {
        compress: true,
        contentBase: path.resolve(__dirname),
    }
};

module.exports = config;