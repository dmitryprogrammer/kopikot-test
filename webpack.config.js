const path = require("path");
const webpack = require("webpack");

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
            {test: /\.jsx?/, use: "babel-loader", exclude: /node_modules/}
        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin()
    ],
    devServer: {
        compress: true,
        contentBase: path.join(__dirname),
    }
};

module.exports = config;