const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //context: path.resolve('./src/public'),
    devtool: "source-map",
    entry: "./index.ts",
    output: {
        path: path.resolve('./dist'),
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        devtoolModuleFilenameTemplate: function (info) {
            return "file:///" + info.absoluteResourcePath;
        }
    },
    resolve: {
        extensions: [".ts", ".js"],
        modules: [path.resolve('./src'), 'node_modules']
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    },
    devServer: {
        inline:true,
        port: 4040
    }
}