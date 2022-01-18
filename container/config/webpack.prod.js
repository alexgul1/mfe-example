const {merge} = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const commonConfig = require('./webpack.common');
const packages = require('../package.json')

const domain = process.env.PRODUCTION_DOMAIN;

const config = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/container/latest/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`
            },
            shared: packages.dependencies,
        })
    ]
};

module.exports = merge(commonConfig, config)
