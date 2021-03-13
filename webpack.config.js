const TerserPlugin = require("terser-webpack-plugin");
const path = require('path');

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: {
        main: "./assets/ts/main.ts",
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
                extractComments: false,
            })
        ],
    },
    output: {
        path: path.resolve(__dirname, './assets/js'),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    }
};