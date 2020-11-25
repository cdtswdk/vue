const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./base.config');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge.merge(baseConfig,{
    plugins: [
        new UglifyJsPlugin()
    ]
});
