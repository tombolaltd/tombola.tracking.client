var UglifyJsPlugin = require("webpack/lib/optimize/UglifyJsPlugin");

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: './dist/tombola.tracker.min.js',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['', '.ts']
    },
    module: {
        loaders: [
            {test: /\.ts?$/, loader: 'ts-loader'}
        ],
        preLoaders: [
            {test: /\.js$/, loader: 'source-map-loader'}
        ]
    },
    plugins: [
        new UglifyJsPlugin()
    ]
};