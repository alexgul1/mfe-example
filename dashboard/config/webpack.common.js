const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
    entry: './src/index.js',
    resolve: {
        extensions: ['.js', '.vue'],
    },
    output: {
        uniqueName: 'db',
        filename: '[name].[contenthash].js',
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
                use: {
                    loader: 'file-loader'
                }
            },
            {
                test: /\.vue$/i,
                use: 'vue-loader'
            },
            {
                test: /\.(scss|css)$/i,
                use: ['vue-style-loader', 'style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.m?jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new VueLoaderPlugin()
    ]
}
