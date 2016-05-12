module.exports = {
    entry: './src/index.ts',
    output: {
        filename: './dist/tombola.tracker.js',
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
    }
};