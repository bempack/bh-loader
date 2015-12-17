const path = require('path');

module.exports = {
    entry: './test/entry.js',
    target: 'node',
    output: {
        path: __dirname + '/../dist',
        libraryTarget: 'commonjs2',
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.bh\.js$/,
            loader: path.resolve(__dirname + '/../')
        }]
    }
}
