const webpack = require('webpack');
const path = require('path')
console.log(webpack);

module.exports = {
    entry:"./src/main.js",
    output:{
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
}
