var path = require('path');

module.exports = {
    entry: {
        app: './App/App.js',
        vendor: ["react","react-dom"]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../public')
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader?cacheDirectory=true',
            }
        }]
    }
};